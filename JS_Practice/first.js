
// let a=window.prompt("Enter a number:")

// let sum=0
// for(let i=1;i<a;i++){
//     sum+=i
// }

// alert("Sum of "+ a + "numbers is : "+sum)


// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";


// document.querySelector("h1").addEventListener("click", function () {
//    let a=window.prompt("Enter a number:")
//    let sum=0
//    for(let i=1;i<a;i++){
//     sum+=i
//     }
//     alert("Sum of "+ a + "numbers is : "+sum)

//   });

const h=document.querySelector("h1");
// h.addEventListener("click",function () {
//     h.textContent="Hello World!"
// });

const b=document.querySelector("button");
b.onclick = () => {
        b.textContent="Change Name"
        let name=window.prompt("Write your name:");
        h.textContent="Hello! "+name;
    
}