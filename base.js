// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// let today = new Date();

// let dd = today.getDate();

// let mm = today.getMonth()+1

// // console.log(dd)
// // console.log(mm)
// let yyyy = today.getFullYear();

// console.log(yyyy)


// if(dd<10){
//     dd = '0'+dd;
// }

// if(dd<mm){
//     mm = '0'+mm;

// }

// today = mm + '-'+dd+'-'+yyyy;
// console.log(today)

// today = mm+ '/'+dd+'/'+yyyy
// console.log(today)

// today = dd+ '-'+mm+ '-'+yyyy;
// console.log(today)
// today = dd+ '/'+ mm +'/'+ yyyy
// console.log(today)


// let test;


// if (true) {
//    test = 'test';
// //    console.log(test)
// }

// console.log(test);

// function myFunction(){
//     console.log('Hello brother')
// }

// const  myFunction2 = function(){
//     console.log('Hello brother2')
// }

// const  myFunction3 = ()=>{
//     console.log("Hi buddy")
// }
// myFunction()
// myFunction2()
// myFunction3()


// function myFunc(){
//     console.log("no run")
//     return 5;
   
// }

//  let result = myFunc();
//  console.log(result)



// let arr = [2,3]

//  arr.push(3)
//  console.log(arr.length === 3)

// let arr = [1,2,3]
// console.log(arr[arr.length-1]) // last element

// console.log(arr[0])
// console.log(arr.slice(1,2))


// function myFunc(arr){
// return arr
// }

// let myArr = [1,2,3,4];

// let result = myFunc(myArr)

// console.log(result)

// let arr = [1,2,3,[4,5],6]

// let str = "Hello"

//         //   arr.splice(3,0,str)
//         // arr[3]=str;
//         arr.push(str)

//           console.log(arr)
//           console.log(arr.includes(str))


// let arr = ['a','b','c','d','e'];

//   let alpha = 'a';

//     let  index =   arr.indexOf(alpha)

//     // console.log(index)

//     console.log(arr !== -1 && arr[index] == alpha)


// let animal = {
//     lifespan:23

// }


// console.log(animal.lifespan)

// let car = {
//     year:2024,
//     value:2020

// }

// console.log(car.year + ' ' + car.value)


// let person = {};

// person.age= 25;
// person.name = "jitendra"

// person.age =24

//  delete person.age

// console.log(person)


// let result = 0;

// for(let i = 0; i<=3;i++){
//     result +=i
// }

// console.log(result ===6)

// let arr = [23,'a',34,'gh',56,44,56,'yh'] // number nikalo // ya string nikalo

// let unique = [];

// for(let i = 0; i<arr.length-1; i++)
// {
//     if(typeof arr[i] === 'string'){
//         unique.push(arr[i])
//     }
// }
// console.log(unique)


// let arr = ['my','name','is','jitendra']


// let temp = arr['name'];
// arr['name'] = arr['is']
// arr['is'] = temp;

// console.log()


 

//   console.log(arr)


// let arr = ['my', 'name', 'is', 'jitendra'];

// let a = arr.indexOf('my');
// let b = arr.indexOf('is');

// [arr[a],arr[b]] = [arr[b],arr[a]]

// console.log(arr)

// let a = arr.indexOf('name'); //index 
// let b = arr.indexOf('is')


// let temp = arr[a]; // index postion ki value
// arr[a]= arr[b];
// arr[b] = temp;


// console.log(arr)


// console.log(arr); // Output: ['my', 'is', 'name', 'jitendra']


// let arr = ['my', 'is', 'name', 'jitendra',45,56,78];

// let unique = [];

// for(let i = 0; i<arr.length; i++){

//     if(typeof arr[i] =='number')
//     {
       
//         break;
//     }
//     unique.push(arr[i]);


// }

// console.log(unique)

// let num = 0;
// let i = 0;

// while(num<=60){
//     num+=2
//     i++
// }

// console.log(num)
// console.log(i)


// const calculate =  function(price,quantity){
//     return price*quantity

// }


// let total = calculate(5000,6)
// console.log(total)


// function multiply(){
//     return 5
// }

//  let multi = multiply(5)
//  console.log(multi)


// let x = 10;
// let result;

// {
//     let y = 20;
//     x = 15
//     result = x +y
// }

// console.log(result)

// function outerFunction(){


//     let outer = "out";

//     function innerFunction(){

//         let inner = "in";

//         console.log(inner);
//         console.log(outer);
//     };

//     innerFunction()
// };


// outerFunction()



// function myFunc(...args){
//     let result = args.length
//     return result

// }


// console.log(myFunc(2,3,4,5))

// const sum = (a,b) => {
//     return a+b
// }


// console.log(sum(3,4))



