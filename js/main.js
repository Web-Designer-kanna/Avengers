

document.querySelector(".top-screen").addEventListener("click",scrollTop);
function scrollTop(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
};


window.addEventListener("scroll",()=>{
  if(window.scrollY>window.screen.availHeight){
    document.querySelector("header").classList.add("active");
  }
  else{
    document.querySelector("header").classList.remove("active");
  }
});

var slideUp = {
  distance: '150px',
  origin: 'bottom',
  opacity: null,
  duration:1500,
  easing:'ease',
};
var slideleft = {
  distance: '150px',
  origin: 'right',
  opacity: null,
  duration:1500,
  easing:'ease',
};

ScrollReveal().reveal('.image', slideUp)
ScrollReveal().reveal('.text-content', slideleft)

const menuBtn=document.querySelector(".menu");
const navBar=document.querySelector("header nav ul");
const closeBtn=document.querySelector("header nav ul .fa-close");

menuBtn.addEventListener("click",()=>{
  navBar.classList.toggle("active");
})
closeBtn.addEventListener("click",()=>{
  navBar.classList.toggle("active");
})



