function aparecerElementos(){const e=document.querySelectorAll(".para-aparecer"),t=.7*window.innerHeight;e.forEach((e=>{const n=e.getBoundingClientRect().top;e.classList.toggle("aparecer",n<t)}))}document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".menu-desktop ul li a");function t(){let t=-1;e.forEach(((e,n)=>{const o=document.querySelector(e.getAttribute("href"));o&&window.scrollY>=o.offsetTop-50&&(t=n)})),e.forEach(((e,n)=>{e.parentElement.classList.toggle("active",n===t)}))}window.addEventListener("scroll",t),t()})),document.getElementById("contactForm").addEventListener("submit",(function(e){e.preventDefault();const t=document.getElementById("name").value.trim(),n=document.getElementById("email").value.trim(),o=document.getElementById("message").value.trim();t&&n&&o?document.getElementById("formMessage").style.display="block":alert("Por favor, preencha todos os campos.")})),window.addEventListener("scroll",aparecerElementos),aparecerElementos(),particlesJS("particles-js",{particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#007bff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.5,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#007bff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});