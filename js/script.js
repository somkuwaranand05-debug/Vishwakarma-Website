/* =====================================
   VISHWAKARMA FABRICATION
   script.js
====================================== */

/*==============================
 Sticky Header
==============================*/

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
        header.style.transition = ".4s";

    }

    else{

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.08)";

    }

});


/*==============================
 Active Navigation
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop-120;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/*==============================
 Fade-in Animation
==============================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".card,.product,.project,.about,.contactBox")
.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


/*==============================
 Counter Animation
==============================*/

const counters = document.querySelectorAll(".stats h3");

let started = false;

window.addEventListener("scroll",()=>{

const stats = document.querySelector(".stats");

if(!stats) return;

const trigger = stats.offsetTop-450;

if(window.scrollY>trigger && !started){

started=true;

counters.forEach(counter=>{

const target = parseInt(counter.innerText);

let count=0;

const speed = target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

}

update();

});

}

});


/*==============================
 Scroll to Top Button
==============================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/*==============================
 Floating WhatsApp Button
==============================*/

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/919326428848";

whatsapp.target="_blank";

whatsapp.className="whatsapp";

whatsapp.innerHTML='<i class="fa-brands fa-whatsapp"></i>';

document.body.appendChild(whatsapp);


/*==============================
 Image Hover Zoom
==============================*/

document.querySelectorAll(".product img,.project img").forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.05)";
img.style.transition=".5s";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});


/*==============================
 Contact Button Animation
==============================*/

setInterval(()=>{

document.querySelectorAll(".btn1").forEach(btn=>{

btn.classList.toggle("pulse");

});

},1000);


/*==============================
 Smooth Reveal
==============================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});
const menu=document.getElementById("menu-toggle");
const navbar=document.getElementById("navbar");

menu.onclick=function(){

navbar.classList.toggle("active");

}
document.querySelectorAll(".counter").forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const speed=target/80;

if(count<target){

counter.innerText=Math.ceil(count+speed);

setTimeout(update,25);

}

else{

counter.innerText=target+"+";

}

}

update();

});

console.log("Vishwakarma Fabrication Website Loaded Successfully");
