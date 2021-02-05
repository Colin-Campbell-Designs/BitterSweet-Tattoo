
const nav = document.querySelector('nav');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const message = document.getElementById('message');
const inputs = document.getElementsByClassName('form__input');

const form = document.getElementById('form');


const backgroundFunction = window.addEventListener('scroll', () => {
    if(nav.clientTop !== 0){
        nav.classList.add('scroll')
    }
})

var map;

function initMap() {
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

  

  
 

//   function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }