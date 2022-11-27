const container=document.getElementById("js-container");
const highlight=document.getElementById("js-highlight");
var containerHeight;

window.onscroll=function(){
  containerHeight=container.offsetHeight-window.innerHeight; 
  containerPos=container.getBoundingClientRect().top;
    total=containerHeight+containerPos;
    progress=100-((total/containerHeight)*100);
    highlight.style.width=progress+"%";
}


document.getElementById("popup").addEventListener("click", function() {
 document.querySelector('#cover').style.display = "flex";
});

document.getElementById("close").addEventListener("click", function() {
 document.querySelector('#cover').style.display = "none";
});


//form validation
 const username=document.getElementById("name")
 const password=document.getElementById("password")
 const form=document.getElementById("form")
 const error=document.getElementById("error")

 form.addEventListener("submit",(e)=>{
   let messages=[]
   if(username.value ==="" || username.value==null){
    messages.push("fill name field")
   }
   if(username.value.length <=6 ){
    messages.push("username must have 6 character")
   }
   if(messages.length>0){
    e.preventDefault()
    error.innerText =messages.join(",")
   }
})