///////// active menu   ///////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while (--len && window.scrollY + 97 <section[len].offsetTop){}
        menuLi.forEach(sec => sec.classList.remove("active"));
        menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


/////////////  sticky navbar   ///////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll",function (){
    header.classList.toggle("sticky",window.scrollY > 50)
})

/////////////  icon navbar   ///////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navlist =document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}

menuIcon.onscroll = ()=>{
    menuIcon.classList.remove("bx-x")
    navlist.classList.remove("open")
}

/////////////  anima ///////////////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((e1)=>observer.observe(e1));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((e1)=>observer.observe(e1));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((e1)=>observer.observe(e1));

