// menu show

const navMenu = document.getElementById("nav-menu");
const navToogle = document.getElementById("nav-toogle");
const navClose = document.getElementById("nav-close");

if(navToogle){
    navToogle.addEventListener('click',()=>{
        navMenu.classList.add("show-menu");
    })
}

// menu hidden
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

//remove mobile menu

const navLink = document.querySelectorAll('.nav-link');
const linkAction=()=>{
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

// change background header

const bgHeader=()=>{
    const header = document.getElementById(header);
    //when scroll>50 
    this.scrollY>=50?header.classList.add('bg-header')
                    :header.classList.remove('bg-header')
}
window.addEventListener('scroll',bgHeader)

// gsap animation

gsap.from('.home-img-2' , 1.2, {opacity:0,y:200,delay:.1})
gsap.from('.home-img-3' , 1.2, {opacity:0,y:200,delay:.5})
gsap.from('.home-data' , 1.2, {opacity:0,y:-60,delay:1})
gsap.from('.home-bird-1' , 1.2, {opacity:0,x:-80,delay:1.1})
gsap.from('.home-bird-2' , 1.2, {opacity:0,x:80,delay:1.2})
gsap.from('.home-img-1' , 1.2, {opacity:0,y:200,delay:1.2})
gsap.from('.home-img-4' , 1.2, {opacity:0,x:200,delay:1.3})