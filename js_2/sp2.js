//-------------- Image-----------------
function myFunction(smallImg){
    var fullImg = document.getElementById("imgB");
    fullImg.src = smallImg.src;
}
//-------------- Chi tiet ------------
const butTon = document.querySelector(".on")
if(butTon){
   butTon.addEventListener("click", function(){
       document.querySelector(".ps-right-content-big").classList.toggle("activeB")
   })
   
}