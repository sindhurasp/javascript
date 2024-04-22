let div=document.querySelector("div")
let aside=document.querySelector("aside")
let section=document.querySelector("section")

div.addEventListener("click",()=>{div.style.background="black"
console.log("div......parent");
},false)

aside.addEventListener("click",()=>{aside.style.background="lightgreen"
console.log("aside......child");
},false)

section.addEventListener("click",()=>{section.style.background="powderblue"
console.log("section......gchild");
},false)