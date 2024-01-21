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
        }else if(item.dataset.name==searchBox.value.trim()){
            Items[index].style.display="block";
        }
        else{
            Items[index].style.display="none";
        }
     })
}





