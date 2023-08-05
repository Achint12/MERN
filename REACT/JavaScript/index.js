
const timeout1= ()=>{
    console.log('timed out !');
}
const timeout2 = () =>{
    console.log("again timed out!"); 
};
setTimeout(timeout1, 2000);
setTimeout(timeout2, 3000);
//another way is to use arrow function which is more shorter 
setTimeout(() =>{
    console.log("More timing out...");
}, 4000);