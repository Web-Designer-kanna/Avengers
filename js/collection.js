
const swiper_wrapper=document.querySelector(".swiper-wrapper");
const dots=document.querySelectorAll(".swiper-pagination .page-item");
const swiper_slides=document.querySelectorAll(".swiper-wrapper .swiper-slide");
let swiper_index=0;
let swiper_width=swiper_wrapper.clientWidth;

function updateSlides(){
    swiper_wrapper.style.transform=`translateX(${-swiper_index*swiper_slides[swiper_index].clientWidth}px)`;
    dots.forEach((dot)=>dot.classList.remove("active"));
    dots[swiper_index].classList.add("active");
}

function nextSlide(){
    if(swiper_index>=swiper_slides.length-1){
        swiper_index=0;
    }
    else{ swiper_index++;}
    updateSlides();
 
}

setInterval(nextSlide,3000);

const search_btn=document.querySelector(".search-btn");
const searchBox=document.querySelector("#searchvalue");
const Items=document.querySelectorAll(".item .box");


search_btn.addEventListener("click",()=>{
    filterItems();
    searchBox.value="";
});
window.addEventListener("keydown",(e)=>{
   if(e.key=="Enter"){
    filterItems();
    searchBox.value="";
   }
})
function filterItems(){
    Items.forEach((item,index)=>{
        if(searchBox.value==""){
            return 
        }else if(item.dataset.name.trim().toLowerCase()==searchBox.value.trim().toLowerCase()){
            Items[index].style.display="block";
        }
        else{
            Items[index].style.display="none";
        }
     })
}





