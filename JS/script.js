
const nav = document.querySelector('.nav');
const galleryImg = document.querySelectorAll('.gal-img ');
const model = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalImgCon = document.querySelector('.modal__img-container');
const form = document.querySelector('.form');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const messageArea = document.getElementById('message');

const burgerMenuButton = document.querySelector('#burgerMenu-btn');
const navResponsiveItem = document.querySelectorAll('.navResponsive__item');
const navResponsive = document.querySelector('.navResponsive');
const closeButton = document.getElementById('closeButton');



//  Nav
    window.addEventListener('scroll', () => {
    nav.classList.toggle('nav__scroll', window.scrollY > 0)
 });

 //Responsive Nav
 burgerMenuButton.addEventListener('click', () => {
    navResponsive.classList.toggle('showNav');
 });
 
 navResponsiveItem.forEach(item => {
     item.addEventListener('click', () => {
        navResponsive.classList.remove('showNav');
     })
 })

 closeButton.addEventListener('click', () => {
    navResponsive.classList.toggle('showNav');
 })





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

function checkrequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input,`${getfeildName(input)} is required`);
        }else {
            showSucess(input);
        }
    });
}

function checkLengthName(input, min, max){
    if(input.value.length < min){
        showError(input, `${getfeildName(input)} must be at least ${min} characters long `)
    }else if(input.value.length > max){
        showError(input, `${getfeildName(input)} must be less than ${max} characters long `)
    }else {
        showSucess(input, 'Thank you')
    }
}

function checkisValidEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value).toLowerCase())){
        showSucess(input, 'Thankyou')
    }else {
        showError(input, 'That Email is not valid');
    }
  }

function checkPhoneNumber(input){
    const re = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/;
    if(re.test(input.value)){
        showSucess(input, 'Thank you');
    }else {
         showError(input, 'That phone number is not valid')
    }
}

function checkLengthMessage(input, min, max){
    if(input.value.length < min){
        showError(input, `Yor message needs to be at least ${min} characters long`);
    }else if(input.value.length > max){
        showError(input, `Your message can only be ${max} characters long`)
    }else {
        showSucess(input, 'Thankyou');
    }
}



// Get fieldname
function getfeildName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', e => {
    e.preventDefault() 

    checkrequired(inputArr);
    checkLengthName(name, 3, 15)
    checkPhoneNumber(phone)
    checkisValidEmail(email);
    checkLengthMessage(messageArea, 10, 600);
    
    console.log(messageArea.value.length)
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

  

  


