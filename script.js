var btn=document.querySelector("button")
var istatus=document.querySelector("h5")
var flag=0
btn.addEventListener("click",function(){
    if(flag==0){
        istatus.innerHTML="Request sending..."
        istatus.style.color="rgb(255,212,18)"
        btn.innerHTML="Remove friends"
    setTimeout(function() {
        istatus.innerHTML="Friends"
        istatus.style.color="Green"
    }, 2000);
    flag=1
    }else{
        istatus.innerHTML="Stranger"
        istatus.style.color="Red"
        btn.innerHTML="Add Friend"
        flag=0
    }

})