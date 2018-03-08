

let menuTrigger = document.querySelector('.menu-trigger');
let nav = document.querySelector('nav');

menuTrigger.addEventListener('click', function(e) {
    
    nav.classList.toggle('trigger');
    
    e.preventDefault();
});

menuTrigger.addEventListener('click', function(e) {
    
    if(e.target.className === 'ion-navicon-round') {
        e.target.className = 'ion-close-round';
    } else {
        e.target.className = 'ion-navicon-round';
    }
    
    e.preventDefault();
});

