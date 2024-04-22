let btn=document.querySelectorAll("button")
let h2=document.querySelector("span")
console.log(h2);
btn[0].addEventListener("click",()=>{
    let val=Number(h2.innerText)
    val--   
    h2.innerText=val                                        

})

btn[1].addEventListener("click",()=>
{
    let val=Number(h2.innerText)
    val++
    h2.innerText=val
})
