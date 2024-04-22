// console.log("hloo")
// document.write("heyyy")
// document.writeln("hloo")
// document.writeln("meee")
// alert("welcome to the web page")
// console.log()
// console.log(26+"1")


// Day4
//    var resp=confirm("Are you new to this web page")
//    if(resp==true){
//     alert("signup")
//    }else{
//     alert("login")
//    }



// var age=prompt("enter your age")
// if(age>18)
// {
//     alert("welcome to webpage")
// }
// else{
//     alert("not a")
// }



// let str="sindhu";
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(0));
// console.log(str[str.length-1]);



// console.log(String.fromCharCode(65));
// console.log(str.charCodeAt(1));
// console.log(str.indexOf("h"));
// console.log(str.indexOf("i",2));


// let email="mr abc@gmail.com"
// console.log(email.startsWith("mr"));
// console.log(email.startsWith("mrs"));
// console.log(email.endsWith(".com"));
// console.log(email.endsWith("gmail"));


// let name1=" rajesh "
// console.log(name1);
// console.log(name1.length);
//  console.log(name1.trimStart().length);
//  console.log(name1.trimEnd().length)
//  console.log()
 
 
// console.log("start");
// var a="10"
// var b=20
// function add() {
//     var num1=20;
//     var num2=20;
//     var sum= num1+num2
//     console.log(sum);
// }
// function sub() {
//     var num1=20;
//     var num2=20;
//     var res= num1-num2
//     console.log(res);
// }
// console.log(a-b);
// add();

// console.log("end");
// sub()
   

let arr=[1,2,3,4,5]
// let brr=[100,200,300]
// console.log(arr.length);
// arr.push(4,5,6)
// arr.pop()
// arr.unshift(4,5,6)
// arr.shift()

// console.log(arr);
// console.log(arr.includes(2));
// console.log(arr.indexOf(3));
// console.log(arr.toString());
// console.log(arr+brr);
// console.log(arr.concat(brr));
// console.log(arr.join(" "));
// console.log(arr.reverse());
// console.log(arr.slice(1,2));
// console.log(arr.splice(2,0,"hii","hello"));
// console.log(arr.splice(2,2));
// console.log(arr.splice(1,2,200,300));
// console.log(arr);

// var mydate=new Date();
// console.log(mydate);
// console.log(mydate.getDay());
// console.log(mydate.getDate());
// console.log(mydate.getMonth());
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());

// var month1=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
// var days=[ "sun","mon","tue","web","thrus","fri","sat"]
// let year=mydate.getFullYear();
// let month=mydate.getMonth();
// let day=mydate.getDay();
// let date=mydate.getDate();
// let hour=mydate.getHours();
// let min=mydate.getMinutes();
// let sec=mydate.getSeconds();
// console.log(`The current date is ${date}-${month1[month]}-${year} and ${days[day]} time is ${hour-12}:${min}:${sec}`);

// console.log(mydate.setFullYear(2001));
// console.log(mydate.getFullYear());  


// var mydate=new Date(2024,0,30,18,28,50,450);
//  console.log( `The current day is `+mydate);


// var sid=setInterval(()=>{ console.log("hii")},1000)
// // console.log(sid);

// var std=setTimeout(()=>{console.log("hello")},1000)
// // console.log(std);


//  setTimeout(()=>{
// clearInterval(sid)
// clearTimeout(std)},10000)


// console.log(window);
// console.log(window.screen.availHeight);
// console.log(window.screen.height);
//  console.log(window.screen.availWidth);
//  console.log(window.screen.width);
// console.log(navigator);
// navigator.geolocation.getCurrentPosition((e)=>{console.log(e)
//     console.log(e.coords.latitude);
//     console.log(e.coords.longitude);
// })


// // console.log(location); 
// // setTimeout(()=>{
// //     location.reload("https://www.flipkart.com")
// // },1000)

// console.log(location);
// setTimeout(()=>{
//     location.replace("https://www.flipkart.com/  ")
// },5000)


// console.log(window.document);
// console.log(window.document.body);
// console.log(window.document.head);
// console.log(typeof window.document.head);
// console.log();


// var css=document.getElementById("css")
// console.log(css);
// css.style.background="powderblue";

// // GETELEMENTBY CLASSNAME------>

// var ans=document.getElementsByClassName("myclass")
// console.log(ans);
// console.log(Array.isArray(ans));
// var purearray=Array.from(ans)
// purearray.forEach((e,i)=>{
//     i%2==0?e.style.background="deeppink":e.style.background="grey"
// })

// # MouseEvent------------>>

// var btn=document.querySelector("button")
// console.log(btn);
// window.addEventListener("keyup",test)
// window.addEventListener("keydown",test)
// window.addEventListener("mouseover",test)

// function test(){
//     let ran=`#${Math.floor(Math.random()*1000000)}`
//     console.log(ran);
//     document.body.style.background=ran
//     console.log("iam clicked");
// }
// test()

// function test(){
//         let ran=`#${Math.floor(Math.random()*1000000)}`
//     return ran;}

//     function color(){
//         var div=document.querySelectorAll("div")
//         for(let i=0;i<div.length;i++)
//         {
//             setTimeout(()=>{
//                 div[i].style.background=test()
//             },i*1000)
//         }
//     }
    
var btn=document.getElementById("child111")
btn.addEventListener("mouseout",test)

function test(){
    let ran=`#${Math.floor(Math.random()*1000000)}`
    console.log(ran);
    document.body.style.background=ran
    console.log("iam clicked");
}