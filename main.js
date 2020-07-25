const toggle = document.querySelector("#toggle");


toggle.addEventListener("click",()=>{
    if(document.body.classList.contains("light")){
        document.body.classList.replace("light","dark");
    }else{
        document.body.classList.replace("dark","light");
    }
})
