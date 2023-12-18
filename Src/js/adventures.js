



// let current = 0.5;
// let step = 0.005;
// let min = 0.5;
// let max = 3; 
// let direction;
let mountain = document.querySelector('.mount');
let balloon3 = document.querySelector('.balloon--3');
let balloon4 = document.querySelector('.balloon--4');
let balloon5 = document.querySelector('.balloon--5');
var rect = balloon3.getBoundingClientRect();
var rect2 = balloon4.getBoundingClientRect();
var rect3 = balloon5.getBoundingClientRect();
console.log(rect2.top / 16 * 2.22);
const inittop = rect.top;
const inittop2 = rect2.top;
const initleft3 = rect3.left;
const inittop3 = rect3.top;

let scrollEle = document.querySelector('.adv--home');
window.addEventListener('scroll', function (event) {
    let val = window.scrollY;

    // mountain.style.top = (val * 0.2) + '%';

    let text = document.querySelector('.adv--home--head');
    // balloon3.style.top = (val * 0.05 + inittop/16) + '%';
    balloon4.style.top =  (val * -0.15 + inittop2/16 * 2.22) + 'vw';
    // balloon5.style.left = val * 0.01 + initleft3 / 16 + '%';


    // balloon5.style.transform = 'translateY(' + val * 0.05 + '%)';
    // balloon5.style.transform = 'translateX(' + val * 0.05 + '%)';


    text.style.transform = 'translateY(' + val * 0.03 + 'vw)';
    balloon5.style.transform = 'translateZ(' + val * 0.2 + 'vw)';
    balloon3.style.transform = 'translateZ(' + val * -0.1 + 'vw)';





    // var st = window.pageYOffset || document.documentElement.scrollTop;
    // if (st > lastScrollTop) {
    //     direction = 1;
    //     console.log("down")
    // } else if (st < lastScrollTop) {
    //     direction = -1
    //     console.log("up")
    // } 
    // lastScrollTop = st <= 0 ? 0 : st; 
	// let newZoom = current + direction * step; 
  
    // if (newZoom < min || newZoom > max) { 
    //     return; 
    // } 
  
    // current = newZoom; 
  
    // let image = document.querySelector('.mount'); 
    // image.style.transform = 'scale(' + current + ')'; 
    // let fan1 = document.querySelector(".fan--1");
    // let fan2 = document.querySelector(".fan--2");
    // fan1.style.transform = 'translateY(' + current * 500 + 'px)';
    // fan2.style.transform = 'translateY(' + current * 500 + 'px)';


});
