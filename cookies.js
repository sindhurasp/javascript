// localStorage.setItem("name1","sindhu");
// localStorage.setItem("email1","sindhu@gmail.com");
// localStorage.setItem("pass1","raj.com");
// console.log(localStorage.getItem("pass"));
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("name1"));


let inputs=document.querySelectorAll(`input[type="text"]`)
let submit=document.querySelector(`input[type="submit"]`)



let nameError=document.querySelector(`[id="nameError"]`)
let emailError=document.querySelector(`[id="emailError"]`)
let phoneError=document.querySelector(`[id="phonenoError"]`)
let passError=document.querySelector(`[id="passError"]`)
let cpassError=document.querySelector(`[id="cpassError"]`)


// submit.onclick=()=>{
//     console.log("hi");
// }

submit.addEventListener('click',(e)=>{
    let name=inputs[0].value
    let email=inputs[1].value
    let phone=inputs[2].value
    let pass=inputs[3].value
    let cpass=inputs[4].value
    
    e.preventDefault();  //To avoid the refresh of webpage
    console.log(name);
    evaluteName(name);
    evaluteEmail(email)
    evalutePhone(phone)

})

function evaluteName(para)
{
    if(para.length<3){
        nameError.innerText="name length should not be less than 3"
    }  
    else if(para.length>3)
    {
        for(let i=0;i<para.length;i++){
            let asci=para.charCodeAt(i)
            let char=para[i]
            if(!((asci>=65 && asci<=90) || (asci<=97 && asci>=122))){
                nameError.innerText=`Invalid name character ${char}`
                // console.log(false);
                break;
            }
            else{
                nameError.innerText="valid name"
            }
        }
    }
}

function evaluteEmail(str)
{
    if(!(str.endsWith(".com") || str.endsWith(".in")))
    {
        emailError.innerText="email is not ending with .com or .in"
    }
    else if(!(str.includes("@"))){
        emailError.innerText="email is not include @ "

    }else if(!str.includes("gmail"))
    {
        emailError.innerText="email is not include gmail "


    }else{
        emailError.innerText="valid email "

    }

}

function evalutePhone(num){
    if(!num.length===10){
        phoneError.innerText=`length should be 10`
    }
    else if(!(num[0]<=9 && num[0]>=6))
    {
        phoneError.innerText='Invalid number'
    }else{
        phoneError.innerText='valid number'
    }
}

//swipper.js

function evalutePass(){
     let str="Abc@1234";
     let uc=0;
     let lc=0;
     let sc=0;
     let nc=0;
     for(let char of str)
     {
        let asci=char.charCodeAt()
        if(asci>=65&&asci<=90){
            uc++
        }
        else if(asci=>97&&asci<=122)
        {
            lc++
        }
        else if(asci>=48 &&asci<=57){
            nc++
        }
     }

     }

   
































































































































































































































































3