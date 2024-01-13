

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

ScrollReveal().reveal('.fade-up', slideUp)
ScrollReveal().reveal('.text-content', slideleft)




