// console.log(1);
// console.log(2);
// confirm("Hello")
// console.log(3);
// console.log(4);


// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     confirm("Hello")
// },2000)
// console.log(3);
// console.log(4);





//Promise--->It is a Object .It is used to make aschycronous operation in javascript by using then and catch


console.log(1);
console.log(2);

let myPromise=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("i am a resolve");
        // rej(" i am rejection")
    },2000)
}).then((e)=>{              //it is executed when the status change from pending to fulfilled
    console.log(e);             
    console.log("i am then");
}).catch((err)=>{               //it is executed when the status change from fulfilled to rejected
    console.log(err);
    console.log("i am a catch");
})

// console.log(myPromise);    status-->1.Pending  2.Fulfilled 3.Rejected

console.log(3);
console.log(4);
