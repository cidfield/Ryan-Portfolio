

let menuTrigger = document.querySelector('.menu-trigger');
let nav = document.querySelector('nav');

const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.logo');
const navElements = document.querySelectorAll('nav ul li a');
let trigger = document.querySelector('.menu-trigger');

menuTrigger.addEventListener('click', function(e) {
    
    if(e.target.className === 'ion-navicon-round') {
        e.target.className = 'ion-close-round';
        navigation.classList.add('after-scroll');
        logo.style.color = '#2D2B29';
        trigger.style.color = '#2D2B29';
        logo.style.borderColor = '#2D2B29';
        navElements.forEach(function(element) {
            element.style.color = '#2D2B29';
        });
    } else {
        e.target.className = 'ion-navicon-round';
    }
    
    e.preventDefault();
});

window.addEventListener('scroll', function() {
    
    if(window.scrollY >= 130) {
        navigation.classList.add('after-scroll');
        logo.style.color = '#2D2B29';
        trigger.style.color = '#2D2B29';
        logo.style.borderColor = '#2D2B29';
        navElements.forEach(function(element) {
            element.style.color = '#2D2B29';
        });
        
    } else {
        navigation.classList.remove('after-scroll');
        logo.style.color = '#FBFEFA';
        trigger.style.color = '#FBFEFA';
        logo.style.borderColor = '#FBFEFA';
        navElements.forEach(function(element) {
            element.style.color = '#FBFEFA';
        });
    }
});

