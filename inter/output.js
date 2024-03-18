// let a = [];
// let b = [];
// console.log(a ==b) // false // compare memeory location
// console.log(a ==b) // false

// let data = 10 - - 10 // 20
// console.log(data)

// let data = {name: "Anil"};

// console.log(delete data.name) // true

//  let data = {name: "Anil"};

// console.log(  delete data.name)

// let num = 10;

// for(let i = 1; i<=num; i++){
//      console.log(i)
// }

// let num = 100;

// for(let i = 1; i<100; i++){
//     if(i%2 !== 0){
//         console.log(i)
//     }
//     }

// let num = 10;

// for(let i = 1; i<=num; i++){
//     console.log(7*i)
//     }

// let num = 10;

// let sum = 0

// for(let i = 1; i<=num; i++){
// sum += i
//     }

//     console.log(sum)

// let num = 10;

// let sum = 0

// for(let i = 1; i<=num; i++){
// sum += i
//     }

//     console.log(sum)

// let num = 30;

// let sum = 0;

// for(let i = 1; i<=num; i++){

//     if(i>10) {
//         sum += i;
//     }
//     }

//     console.log(sum)

// const myarr = (arr) => {

//     let sum = 0;

//     for(let i = 0;  i<arr.length; i++)

//     {
//         sum +=arr[i]
//     }
//     return sum;
// }

// console.log(myarr([2, 3, -1, 5, 7, 9, 10, 15, 95]))

// const myarr = (arr) => {

//     let sum = 0;
//     let avr

//     for(let i = 0;  i<arr.length; i++)

//     {
//         sum +=arr[i]
//     }

//      avr = sum/arr.length
//     return avr;
// }

// console.log(myarr([2, 3, -1, 5, 7, 9, 10, 15, 95,1]))

// const myarr = (arr) => {

// let newArr =[]

//     arr.forEach((val,index,arr) => {
//       val>0 ? newArr.push(val) : null
//     })

//     return newArr;
//     }

// console.log(myarr([2, 3, -1, 5, 7, 9, 10, 15, 95,1]))

// function myarr(arr){
//  let max =arr[0]

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>max){
//                  max=  arr[i];
//         }
//     }
//     return max
// }

// console.log(myarr([2, 3, -1, 5, 7, 9, 10, 15, 95,1]))

// let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95,1];

//         let firstElement =  arr.shift()

//         arr.push(firstElement)
//         // console.log(firstElement)
//         console.log(arr)

// let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95,1];

//         let firstElement =  arr.pop()

//         arr.unshift(firstElement)
//         // console.log(firstElement)
//         console.log(arr)

// let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95,1];
// let newArr = [];

// for(let i = arr.length-1 ; i>=0; i--){

//     newArr.push(arr[i])
// }

// console.log(newArr);

// let str = "Javascript"

// let newStr = "";

// for(let i = str.length-1 ; i >=0 ; i--){

//     // newStr.push(str[i]) push will not work in string
//     newStr += str[i]
// }

// console.log(newStr)

// let arr1 = []
// let n =100
// let sum = 0
// let count = 0
// for(let n = 2; n<=100 ; n++){
// for(let i = 2 ; i<=n/2; i++){

//     if( n%i===0 ){
//         // console.log("Not prime")
//         count++
//         // break;
//     }

// }

// if(count == 0 ){
//     // console.log("prime")

//     sum += n
//     console.log(n)
// }
// }

// let sum = 0;

// // Loop through numbers from 2 to 100
// for (let n = 2; n <= 100; n++) {
//     let isPrime = true;

//     // Check if n is prime
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     // If n is prime, add it to the sum
//     if (isPrime) {
//         sum += n;
//     }
// }

// console.log("Sum of prime numbers up to 100:", sum);
// console.log( typeof ("1" + 2))

// let num = 12;

// let str = num.toString()
//  console.log(  typeof str )

// let str = "12"

// //   let newStr =   parseInt(str);
// // let newStr =   Number(str);
//   console.log( typeof newStr);

// console.log(isNaN("text"))

// console.log(0.1 + 0.2 - 0.3 )

// let str = "Hello"

// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
//   }

// for (let index in str) {
//     console.log(str[index]);
//   }

// for (let index in str) {
//     console.log(str[index]);
//   }

// let str = "Hello";

//      [...str].forEach((value) => console.log(value));

// let num1 = 10;
// let num2 = 20;

// console.log(`the sum of ${num1} and ${num2} is ${num1+num2}`) // template literal

// function hireorderFunction(){

//              function displayFunc(){
//                 console.log("Hii dev")
//              }

//     return displayFunc()
// }

// (function myFunc(){
//     console.log("Hello")
// })();

// +(function IIFE() {
//     console.log("I am an Immediately invoked function");
//   })();

// hireorderFunction()

// (function IIFE(param1, param2) {
//     console.log("I am an Immediately invoked function");
//     console.log("Parameter 1: " + param1);
//     console.log("Parameter 2: " + typeof param2);
//     console.log("Parameter 2 output: " + param2());
//   })("hello", function () {
//     return "I am a string from a function passed to IIFE";
//   });

// mixin using Object.assign

// function mixin(sourceObj, targetObj) {
//     // copy properties of source object to target object
//     return Object.assign(targetObj, sourceObj);
//   }

//   // driver code
//   const obj1 = {
//     task1() {
//       console.log("Task1");
//     },
//   };

//   const obj2 = {
//     task2() {
//       console.log("Task2");
//     },
//   };

//   let mixinObj = mixin(obj1, {});
//   mixinObj = mixin(obj2, mixinObj);
//   mixinObj.task1(); // Task1
//   mixinObj.task2(); // Task2

// const arr = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArr = arr.filter((value) => true);

// console.log(uniqueArr)

// function asyncFunc() {
//     console.log("Started asyncFunc1");
//     //Async1 code
//     setTimeout(() => {
//       console.log("Completed asyncFunc1");
//       console.log("Started asyncFunc2");
//       //Async2 code
//       setTimeout(() => {
//         console.log("Completed asyncFunc2");
//         console.log("Started asyncFunc3");
//         //Async3 function code
//         setTimeout(() => {
//           console.log("Completed asyncFunc3");
//         }, 1000);
//       }, 2000);
//     }, 3000);
//   }
//   asyncFunc();

// let a = 5;
// let b = 6;

// a = a+b // 11
// b = a-b // 5
// a = a-b //6

// console.log(a,b)
// [a,b] = [b,a]
// console.log(a,b)

// let temp;

// temp = a;  // 5
//   a = b;  //6
//   b = temp //5

//   console.log(a,b)

// let n = 6.5;

// if(n%1==0){
//     console.log("Integer")
// }
// else{
//     console.log("Not")
// }

// function randomGenerate(x,y){

//     return x +Math.round( Math.random()*(y-x))
// }

// console.log(randomGenerate(10,50))

//   let str = "hello";

//         //    let newStr =   str.split('').reverse().join('');
//         //    console.log(newStr)
// // let newStr = '';
// let newStr = [];
//         for(let i =str.length-1; i>=0; i--){
//             // console.log(str.charAt(i))
//             // newStr += str.charAt(i)
//             newStr += str[i]
//         }

// console.log(newStr)

// let str = "Hello you are welcome"

//    console.log(str.replaceAll(' ','_'))

//   console.log(str.split(' ').join('_'))

// const str = "ABCXDEFXGHI"

// let firstIndex =  str.indexOf('X');
// let lastIndex = str.lastIndexOf('X')

// let count =lastIndex-firstIndex-1
//        console.log(  count>=0 ? count : 0)
// console.log(lastIndex)

// console.log(count)

// function getTheGapX(str) {
//     if (!str.includes("X")) {
//       return -1;
//     }

//     const firstIndex = str.indexOf("X");
//     const lastIndex = str.lastIndexOf("X");
//     return firstIndex === lastIndex ? -1 : lastIndex - firstIndex-1;
//   }
//   const str = "ABCXDEFXGHI"
//   console.log(getTheGapX(str))

// function truncateString(str,num){

//     return str.substring(0,num)
// };

//    console.log( truncateString("JavaScript", 7));

// function truncateString(str, num) {
//     // Check if the string length is greater than the specified number
//     if (str.length > num) {
//         // Truncate the string to the specified number of characters and append ellipsis
//         return str.substring(0, num) + "..."; // Return the truncated string with ellipsis
//     } else {
//         // Return the original string if its length is less than or equal to the specified number
//         return str;
//     }
// }

// // Example usage:
// console.log(truncateString("JavaScript", 7)); // Output: "Java..."

// function truncateString(str, charCount) {
//     if (str.length > charCount) {
//       return str.substr(0, charCount - 3) + "...";
//     } else {
//       return str;
//     }
//   }

//   console.log( truncateString("JavaScript", 7))

// const str = "JavaScript is simple but not easy to master";

// let limit = 3

//         let newStr =      str.split(" ").slice(0,limit).join(" ")
//         console.log(newStr)

// function multiply(num1){

//   return function(num2){
//      return num1+num2
//   }
// }

//  console.log(multiply(3)(4));

// const obj = { a: 1, b: 2, c: 3 };

// const entry =  Object.entries(obj)

// // console.log(entry)

//  entry.forEach(([key,value]) => {
//   console.log(`${key} and ${value}`)
//  })

// let newOb = Object.values(obj);

// console.log(newOb)

//  let newOb = Object.keys(obj)

//  console.log(newOb)

// function myFunc(arr1,arr2=arr1){

//   // let mergedArr = [...arr1,...arr2]
//   //  arr1.push(...arr2);
//   // return arr1
// let mergedArr = arr1.concat(...arr2)
// return mergedArr;

// }

// console.log(  myFunc([2,3,4,5,7,8]))
// function myFunc(arr1,arr2){
//   let newArr = [];

//      arr1 = arr1 || [];
//      arr2 = arr2 || []
// if(arr1?.length ==0 && arr2.length>0){

//   newArr  = [...arr2,...arr2]

// }

// else if(arr2?.length == 0 && arr1.length>0){

//   newArr = [...arr1,...arr1]
// }

// else{
//   newArr = [...arr1,...arr2]
// }

// return newArr
// }

// console.log(  myFunc([2,3,4,5,7,8]))

// let arr  = [2,3,4,5,51,8]

// for(let i =0;i<arr.length; i++){

//   for(let j = i+1; j<arr.length; j++){

//     let temp

//          if(arr[i]>arr[j]){

//           temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp
//          }
//   }
// }

// // arr.push(arr[0])
// arr.splice(3,0,89,78)
// // arr.shift()

// console.log(arr)

//  arr.sort((a,b) => a-b)
// arr.sort((a,b) => b-a)

//  console.log(arr)

// let arr = [
//   { name: 'John', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 20 }
// ];

// // arr.sort((a,b) => a.age - b.age)
// arr.sort((a,b) => a.name - b.name)

// console.log(arr)

// Example
// const books = [
//   { name: "Harry Potter", author: "Joanne Rowling" },
//   { name: "Warcross", author: "Marie Lu" },
//   { name: "The Hunger Games", author: "Suzanne Collins" },
// ];

// books.sort((book1, book2) => {
//   const authorLastName1 = book1.author.split(" ")[1];
//   const authorLastName2 = book2.author.split(" ")[1];
//   return authorLastName2 > authorLastName1 ? -1 : 1;
// });

// console.log(books)

// const numbers = [-2, 3, -4, 5, -6, 7];

//  let squaredArr =numbers.filter((val) => val>0).map((val) => val*val);

//  console.log(squaredArr)

// const person = {
//   name:'jit',
//   age:35
// }

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "John", age: 35 },
//   { name: "Doe", age: 40 }
// ];

//     let check =      users.some((val) => val.name ==='John') // true or false
// console.log(check)

// let check = users.find(user => user.name ==='John'); // user object

//        let userExist =  check ? true : false;

//        console.log(userExist);

// let check =    users.findIndex(user => user.name === 'John'); // if not find then -1 output

//    let userExist =      check>0 ? true : false
// console.log(userExist)

// Generate an array of objects with properties id
//  and full name from an array of objects where
//  each object will have id, firstname and lastname

//   let users = [
//     {id:1,firstName:"Jit",lastname:"bhoplai"},
//     {id:2,firstName:"Roshan",lastname:"Nishad"},
//     {id:3,firstName:"Guddu",lastname:"Sagar"},
//   ]

// let modifiedUser =   users.map((user) => {
//     // return { id : user.id, fullName: user.firstName + " "+ user.lastname}
//     return { id:user.id, fullName: user.firstName + " " + user.lastname };

//    })

//    console.log(modifiedUser)

// let arr =  [23,45,56,33,12,89,12,34];

//  let maxnum =     Math.max(...arr)
// //  console.log(maxnum)

//  let ind = arr.indexOf(maxnum);

//  console.log(ind)

//   const min = Math.min(...arr);
// minArr = arr.filter((value) => value === min);
// minArr.length; // count of minimum value occurences

// let arr =  [23,45,56,33,12,89,12,34];

// let min = arr[0];
// let count = 0

// for(let i = 1; i<arr.length; i++){

//   if(arr[i]<min){

//         min =  arr[i]
//          count = 1
//   }

//   else if (arr[i] ===min){
//     count++
//   }
// }

// console.log(count)

// //  let minval = Math.min(...arr)
// //     let occurArr =         arr.filter((val) => val ===minval)

// //    console.log( occurArr.length)

// const n = 5;
// const arr = new Array(n);
// arr.fill(10);

// console.log(arr)

let arr = [12, 23, 45, 45, 67, 78, 89];

// count the ocuurance

// let occur = {}

//                 for(let i =0; i<arr.length; i++){

//                   //  occur[arr[i]] = (occur[arr[i]] || 0) +1

//                   if(occur[arr[i]]){
//                     occur[arr[i]]++
//                   }

//                   else{
//                     occur[arr[i]] = 1
//                   }
//                 }
// console.log(occur)

// let newArr =     arr.filter((val,index,arr) =>   arr.indexOf(arr[index]) === index )

// console.log(newArr)

//   let unique = []

//   for(let i = 0; i<arr.length; i++){

//     // if(unique.indexOf(arr[i]) == -1){
//     //         unique.push(arr[i])
//     // }

//     if(!unique.includes(arr[i])){
//       unique.push(arr[i])
// }

//   }

//   console.log(unique)

// const marks1 = [50, 60, 70, 80, 90,40];

//        const passornot =           marks1.every((mark) => mark>=50)

//        console.log(passornot)

// . Get the average of all the salaries which is greater than 10000
//  from the department of "IT" from the array of objects)

// const employees = [
//   { name: 'John', department: 'IT', salary: 12000 },
//   { name: 'Alice', department: 'HR', salary: 9000 },
//   { name: 'Bob', department: 'IT', salary: 11000 },
//   { name: 'Jane', department: 'IT', salary: 13000 }
// ];

//                         let filteredEmp =       employees.filter((employee) => {
//                               return employee.salary >10000 && employee.department === 'IT'
//                              })

//                              console.log(filteredEmp)

//                    let total =          filteredEmp.reduce((sum, employee) => sum + employee.salary,0  )

//                    console.log(total)

//                    let avg = total/ filteredEmp.length

//                    console.log(avg)

// setTimeout(() =>{

//   console.log("Hello World")
// },3000)

// setInterval(() =>{
//   console.log("Hello")
// }, 2000)

// function executeFunc( callback){

//   setTimeout(() => {
//     callback()
//   }, 2000);
// }

// function myFunction(){

//   console.log("execute after every two seconds")
// }

// executeFunc(myFunction)

// for(let i =1; i<10; i++){
//   setTimeout(() => {console.log(i)},i*2000,i)
// }

// let count = 0
// const intervalID =  setInterval(() => {

//   count++;
//   console.log(count)
//   if(count>10){
//     clearInterval(intervalID)
//   }
// },2000)

// const person = { name: 'Alice' };

//  function greet(greeting) {
//    console.log(`${greeting}, ${this.name}!`);
//  }

//  greet.call(person, 'Hello'); // Output: Hello, Alice!
//  greet.apply(person, ['Hi']); // Output: Hi, Alice!

//  const greetBound = greet.bind(person);
//  greetBound('Hey'); // Output: Hey, Alice!

// (() => {
//   var x = y =10;
//   var z = 3;
// })();

// {
// let x = y =10;
//   var z = x;
// }

// console.log(typeof y)

// function func1(){
//   setTimeout(()=>{
//     console.log(x);
//     console.log(y);
//   },3000);

//   var x = 2;
//   let y = 12;
// }
//  console.log(func1());

// function func2(){
//   for(var i = 0; i < 3; i++){
//     setTimeout(()=> console.log(i),2000);
// }
// }
// console.log(func2());

// (function(){
//   setTimeout(()=> console.log(1),2000);
//   console.log(2);
//   setTimeout(()=> console.log(3),0);
//   console.log(4);
// })();

// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

// function random(){
//   var x; // x is hoisted
//   x++; // x is not a number since it is not initialized yet
//   console.log(x); // Outputs NaN
//   x = 21; // Initialization of x
// }
// random()

// let hero = {
//   powerLevel: 99,
//   getPower:  function(){
//     return this.powerLevel;
//   }
// }

// let getPower = hero.getPower;

// let hero2 = {powerLevel:42};
// console.log(getPower()); //99
// console.log(getPower.apply(hero2)); //42

// const a = function () {
//   console.log(this);
//   // console.log(1)

//   const b = {
//     func1: function () {
//       console.log(this);
//       // console.log(2)
//     },
//   };

//   const c = {
//     func2: () => {
//       console.log(this);
//       // console.log(3)
//     },
//   };

//   b.func1();
//   c.func2();
// };

// a();


// const b = {
//   name:"Vivek",
//   f: function(){
//     var self = this;
//     console.log(this.name);
//     (function(){
//       console.log(this.name);
//       console.log(self.name);
//     })();
//   }
// }
// b.f();




// (function(a){
//   return (function(){
//     console.log(a);
//     a = 23;
//   })()
// })(45);



// function randomFunc(){
//   for(let i = 0; i < 2; i++){
//     setTimeout(()=> console.log(i),1000);
//   }
// }
// randomFunc();



// function bigFunc(element){
//   let newArray = new Array(element).fill('♥');
//   return newArray;
// }

// console.log(bigFunc(599)); // Array is created
// console.log(bigFunc(670)); // Array is created again

// function bigFunc(){
//   let newArray = new Array(700).fill('♥');
//   return (element) => newArray[element];
// }

// let getElement = bigFunc(); // Array is created only once
// console.log( getElement(599));
//  console.log( getElement(670));  





// function rightRotateArray(a, r) {
//   // Ensure that r is within the range of array length to avoid unnecessary rotations
//   // r = r % a.length;
  
//   // Slice the array into two parts: the portion to be rotated and the remaining part
//   const rotatedPart = a.slice(-r);

//   // console.log(rotatedPart)
//   const remainingPart = a.slice(0, a.length - r);
  
//   // Concatenate the rotated part with the remaining part
//   return rotatedPart.concat(remainingPart);
// }


// function rightRotateArray(arr,r){

//       let rotatepart =  arr.slice(-r);

//       let remainingpart = arr.slice(0,arr.length-r)

//       console.log(rotatepart)
//       console.log(remainingpart)

//       let rotateArr = rotatepart.concat(remainingpart)
//       return rotateArr
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5];
// const rotations = 2;

// console.log(rightRotateArray(array, rotations)); // Output: [4, 5, 1, 2, 3]


// function leftRotateArray(arr,r){

//   let rotatepart =  arr.slice(r);
   

//   let remainingpart = arr.slice(0,arr.length-r-1)

//   console.log(rotatepart)
//   console.log(remainingpart)

//   let rotateArr = rotatepart.concat(remainingpart)
//   return rotateArr
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5];
// const rotations = 2;

// console.log(leftRotateArray(array, rotations)); // Output: [4, 5, 1, 2, 3]


let arri  = [23,34,56,66,78,98,34];
// remove 35

// let newArr = []
      
    let index=   arri.indexOf(35)
      
arri.splice(index,1)

console.log(arri)
  

//   let neArr = arri.filter((a) => a!=35)
// arri.forEach((val,index,arri) => {
//     if(val!==35){
//          newArr.push(val)
//     }
// })

//   console.log(newArr)

