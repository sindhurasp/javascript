let data=[
    {
    name1:"flower",
    wt:"200 gram",
    image:"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_640.jpg"

    },{
    name1:"White flower",
    wt:"200 gram",
    image:"https://cdn.pixabay.com/photo/2018/03/08/23/40/gerbela-white-3210217_1280.jpg"

    },{
    name1:"Tulip" ,
    wt:"100 gram",
    image:"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729514_640.jpg"

    },{
    name1:"Tulip" ,
    wt:"100 gram",
    image:"https://i.pinimg.com/736x/05/ee/63/05ee63dd07ddc380e63178f16388ebc4.jpg"

    }
]

let img=document.querySelector("img")
// console.log(img);
let h2=document.querySelectorAll("h2")
let btns=document.querySelectorAll("button")
// console.log(btns);
let num=0
btns[0].addEventListener("click",()=>{
    num--
    if(num<0)
    {
        num=data.length-1
    }
    changeContent(num)
})
btns[1].addEventListener("click",()=>{
    num++
    if(num>data.length-1){
        num=0
    }
    changeContent(num)
    console.log("nxt");
})
console.log(data[0].wt);

function changeContent(para){
    img.src=data[para].image
    h2[0].innerText=data[para].name1
    h2[1].innerText=data[para].wt
}
window.addEventListener("DOMContentLoaded",()=>
{
    changeContent(0)
    console.log("after creating dom tree");
})
setInterval(()=>{
    num++
    if(num>data.length-1)
    {
        num=0;
    }
    changeContent(num)
},3000)
