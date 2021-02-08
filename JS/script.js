
const nav = document.querySelector('.nav');
const galleryImg = document.querySelectorAll('.gal-img ');
const model = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalImgCon = document.querySelector('.modal__img-container');
const form = document.querySelector('.form');
const inputs = form.querySelectorAll('.form__input');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const messageArea = document.getElementById('message');



//  Nav
const backgroundFunction = window.addEventListener('scroll', () => {
    nav.classList.toggle('scroll', window.scrollY > 0)
 });



// Gallery

galleryImg.forEach(img => {
    img.addEventListener('click', e => {
        model.style.display = 'block';

        imgFunc(e.target);
    });
})

function imgFunc(img) {
    const newImg = document.createElement('img');
    newImg.src = img.src;
    modalImgCon.appendChild(newImg);   

}

modalClose.addEventListener('click', e => {
    e.preventDefault()
    model.style.display = 'none';
    modalImgCon.innerHTML = '';
    
});

model.addEventListener('click', e => {
    e.preventDefault()
    model.style.display = 'none';
    modalImgCon.innerHTML = '';
    
});



//Form

const inputArr = [name, email, phone, messageArea];


//ShowError
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form__form-control error';
    const small = formControl.querySelector('.form__small');
    small.innerText = message;
}

//Show Success
function showSucess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form__form-control success';
    const small = formControl.querySelector('.form__small');
    small.innerText = message;
}



//Check Required
function checkRequired(){
    inputArr.forEach(input => {
        if(input.value === ''){
            showError(input, `${input.id} required`)
        }else {
            showSucess(input, 'Thank you')
        }
    })
}

form.addEventListener('submit', e => {
    e.preventDefault() 

    checkRequired()
    form.reset()
       
})


// Google Map
var map;

function initMap () {
    const bittersweet = { lat: 54.62468707449994, lng: -5.9754263423425 };
     map = new google.maps.Map(document.getElementById("map"), {
      center: bittersweet,
      zoom: 17,
    });
    const marker = new google.maps.Marker({
        position: bittersweet,
        map: map,
    })
  }

  

  


