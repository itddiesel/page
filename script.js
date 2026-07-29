/*=========================================
 INJEC TECH DIESEL
 script.js
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if(loader){
            loader.style.display = "none";
        }

    },1000);

});

/*=========================================
 MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

/*=========================================
 CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});

/*=========================================
 STICKY NAVBAR
=========================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/*=========================================
 SCROLL REVEAL
=========================================*/

const revealElements=document.querySelectorAll(

".content,.card,.service-box,.banner,.contact-grid div"

);

function reveal(){

    const trigger=window.innerHeight*0.85;

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        if(top<trigger){

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/*=========================================
 SMOOTH BUTTON SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================================
 ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("current");

if(link.getAttribute("href")==="#"+current){

link.classList.add("current");

}

});

});

/*=========================================
 FLOATING EFFECT
=========================================*/

const cards=document.querySelectorAll(".card,.service-box");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/*=========================================
 BUTTON RIPPLE
=========================================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.left=

e.clientX-this.getBoundingClientRect().left-diameter/2+"px";

circle.style.top=

e.clientY-this.getBoundingClientRect().top-diameter/2+"px";

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/*=========================================
 PARALLAX HERO
=========================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const value=window.scrollY;

hero.style.backgroundPositionY=value*0.4+"px";

});

/*=========================================
 BACK TO TOP BUTTON
=========================================*/

const topBtn=document.createElement("div");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="topButton";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="30px";
topBtn.style.bottom="120px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.background="#163d9d";
topBtn.style.color="#fff";
topBtn.style.display="flex";
topBtn.style.alignItems="center";
topBtn.style.justifyContent="center";
topBtn.style.cursor="pointer";
topBtn.style.boxShadow="0 15px 35px rgba(0,0,0,.35)";
topBtn.style.opacity="0";
topBtn.style.pointerEvents="none";
topBtn.style.transition=".4s";
topBtn.style.zIndex="998";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";
topBtn.style.pointerEvents="auto";

}else{

topBtn.style.opacity="0";
topBtn.style.pointerEvents="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================================
 CONSOLE MESSAGE
=========================================*/

console.log("%cInjec Tech Diesel","font-size:28px;color:#f2b300;font-weight:bold;");
console.log("%cPrecision Diesel Injection Specialists","font-size:16px;color:#ffffff;");
