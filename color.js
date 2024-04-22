let inp=document.querySelector("input")
let btn=document.querySelector("button")
btn.addEventListener("click",()=>
{
    let dataValue=inp.value.trim()
    console.log(dataValue);
    document.body.style.background=dataValue
})
let iEven=document.querySelector("#even")
let ebtn=document.querySelector("#evenBtn")
let h2=document.querySelector("h2")
ebtn.addEventListener("click",()=>{
    let val=iEven.value.trim()
    if(val%2===0)
    {
h2.innerText=`${val}is a even number`
speak1(`${val}is a even number`)
    }
    else{
        h2.innerText=`${val}is not even num`
    }
})

function speak1(talk){
    let speech=new SpeechSynthesisUtterance(talk)
    window.speechSynthesis.speak(speech)
}
speak1("hi hello")

