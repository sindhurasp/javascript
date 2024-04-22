// var ele= document.querySelectorAll(".child")
// console.log(ele);
// for(var i=0;i<ele.length;i++){
//     ele[i].style.background=test()
//     window.addEventListener("mouseover",test)
// }

// var ele= document.querySelectorAll(".child1")
// console.log(ele);
// for(var i=0;i<ele.length;i++){
//     ele[i].style.background=test()
// }
// var btn=document.getElementById("a")

// document.querySelectorAll("button").addEventListener("click",()=>{
// btn.style.background=test()
// })
// btn.addEventListener("click",()=>{

// })

// var btn=document.getElementById("b")

// document.querySelectorAll("div").addEventListener("mouseover",()=>{
// btn.style.background=test()
// })
// btn.addEventListener("mouseover",()=>{

// })

// var btn=document.getElementById("3")

// document.querySelectorAll("div").addEventListener("mouseout",()=>{
// btn.style.background=test()
// })
// btn.addEventListener("mouseout",()=>{

// })


// // window.addEventListener("keyup",test)
// // window.addEventListener("keydown",test)
// // window.addEventListener("mouseover",test)

//     function test(){
//         let ran=`#${Math.floor(Math.random()*1000000)}`
//         console.log(ran);
//         return ran;
    
//     }

let btn=document.querySelectorAll("button")
let h2=document.querySelector("h2")
console.log(typeof h2.innerText);
btn[0].addEventListener("click",()=>{
    let val=Number(h2.innerText)
    val--
    if(val<0){
        document.body.style.background="green"
    }
    if(val==0){
        document.body.style.background="blue"
    }
    h2.innerText=val
})
btn[1].addEventListener("click",()=>
{
    let val=Number(h2.innerText)
    val++
    if(val>0){
        document.body.style.background="red"
    }
    if(val==0){
        document.body.style.background="blue"
    }
    h2.innerText=val

})


