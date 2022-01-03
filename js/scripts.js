/*!
* Start Bootstrap - Small Business v5.0.4 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

(function(){
    const slider = [...document.querySelectorAll('.slider__body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);

        value = currentElement;
        value += change;
        if(value === 0 || value == slider.length+1){
            value = value === 0 ? slider.length : 1;
        }

        slider[currentElement-1].classList.toggle('slider__body--show');
        slider[value-1].classList.toggle('slider__body--show');
    }

    setInterval (function(){
        changePosition(1);
    },7000);
})()






/*
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnRight = document.querySelector("#btnRight");
const btnLeft = document.querySelector("#btnLeft");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function nextRight(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all .05s";
    setTimeout(function(){
       slider.style.transition = "none" ;
       slider.insertAdjacentElement('beforeend', sliderSectionFirst);
       slider.style.marginleft = "-100%";
    }, 50);
}

btnRight.addEventListener('click', function(){
    nextLeft();
});

function nextLeft(){
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginleft = "0";
    slider.style.transition = "all .05s";
    setTimeout(function(){
       slider.style.transition = "none" ;
       slider.insertAdjacentElement('afterbegin', sliderSectionLast);
       slider.style.marginleft = "-100%";
    }, 50);
}

btnLeft.addEventListener('click', function(){
    nextLeft();
});

setInterval (function(){
    nextRight();
},5000);

*/