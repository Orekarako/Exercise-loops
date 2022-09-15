// // --------------------    question 1      ----------------------  
// let odd = 0 ;
// let even = 0;
// for(let i = 3; i <= 50 ; i++){
// if((i % 3) == 0){
// odd++
// } else if ((i % 2) == 0 ){
// even++
// }
// }
// console.log("odd numbers:" + odd);
// console.log("even numbers:" + even);
// // --------------------    question 2      ----------------------  
// let a:number;   let b:number; let mul:number;
// a = 6 ; 
// b = 2 ;
// mul = 0;
// for(let i = 0 ; i < b ; i++){
//     mul +=a
// }
// console.log(mul);
// // --------------------    question 3      ----------------------  
// let num:number;   let pres:number; let sum:number;
// num = 11 ; 
// pres = 2 ;
// sum = 1;
// for(let i = 0 ; i < pres ; i++){
//     sum *= num
// }
// console.log(sum);
// // --------------------    question 4      ----------------------  
var a = 65;
var A = 97;
var letter = "";
for (var i = A; i <= 122; i++) {
    var alf = String.fromCharCode(i);
    letter += alf.toString() + " ";
}
for (var i = a; i <= 90; i++) {
    var alf = String.fromCharCode(i);
    letter += alf.toString() + " ";
}
console.log(letter);
// // ------------------------------------------------------------------  
