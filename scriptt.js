document.addEventListener('DOMContentLoaded',function(){
let menu = document.querySelector('#menu');//error
let list = document.querySelector('.part1-ul');
let hideShow = 0;

menu.addEventListener('click', function () {
    if (hideShow == 0) {
        list.style.left = '0%'
        document.getElementById("menu").className = "fa-solid fa-xmark";
        hideShow++;
    } else {
        list.style.left = '-100%'
        document.getElementById("menu").className = "fa-solid fa-bars";
        hideShow = 0
    }
})

let navCursor = document.querySelector('.navbarCursor')
let nav = document.querySelector('nav')
nav.addEventListener('mousemove',function(e){
    console.log('nav' + e.clientX)
    console.log('nav' + e.clientY)
    navCursor.style.display = 'block';
    gsap.to('.navbarCursor',{
        left:e.clientX,
        top:e.clientY,
        ease:"power3.out"
    })
})
nav.addEventListener('mouseout',function(){
    navCursor.style.display = 'none'
})



})

