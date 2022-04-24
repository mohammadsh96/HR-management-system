`use strict`;
let secEl = document.getElementById("secEl");
let fname = document.getElementById("fname");
let eventEl = document.getElementById ("formID");
let image =document.getElementById("img");


 eventEl.addEventListener("submit" , handelsubmit ) ;
 function handelsubmit(event){
event.preventDefault();

console.log(event);
console.log(event.target.fname.value)
console.log(event.target.Department.value)
console.log(event.target.level.value)
console.log(event.target.img.value)
 }