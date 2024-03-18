// function myFunction(a, b) {

//    let arr=   b.split('');
//    let count = 0
//    for(let i = 0; i<arr.length; i++){

//     if(arr[i]=== a){
//     count++
//     }
//    }
//   return count;
// }

// let count = myFunction('m', 'how many times does the character occur in this sentence?');

// console.log(count)

// function myFunction(a, b) {
//     return b.split(a).length-1;
//   }

//   console.log(myFunction('m', 'how many times does the character occur in this sentence?'))

// function myFunction(a) {

//     let num = a.toString()
//             let num2 =    num.split('').map(Number)

//     console.log(num2)
// //   return;
// }

// myFunction(10);

// function nextDivisibleNumber(x, y) {
//     if (x % y === 0) {
//         return x;
//     } else {
//         // return Math.ceil(x / y) * y;
//         return Math.ceil(x / y) * y;
//     }
// }

// // Test the function
// console.log(nextDivisibleNumber(10, 3)); // Output: 12 (Next higher number divisible by 3 after 10 is 12)
// console.log(nextDivisibleNumber(15, 5)); // Output: 15 (15 is divisible by 5)
// console.log(nextDivisibleNumber(17, 4)); // Output: 20 (Next higher number divisible by 4 after 17 is 20)

// function myFunction(a) {

//     let count = 0;

//     for(let i = 0; i<a.length; i++){

//         if(a[i]<=0){
//         count++
//     }}
//   return count;
// }

// console.log(myFunction([1, 2, -2, -4,7]));

// function myFunction( arr ) {
//     return arr.sort((a, b) => a - b) // asending
//     // return arr.sort((a, b) => a - b) // decending

//   }

//   console.log(myFunction([1,3,2]))

// function myFunc(a){
//        let sum = 0;
//     for(let i =0; i<a.length; i++){

//         sum += a[i]
//     }

//     // return sum;

//     let avg = sum/a.length;
//     return avg ;
// }

// console.log(myFunc([1,2,3,54,23]))

// function myFunction(arr) {
 

//     let longest = '';

//     for(let i = 0; i<arr.length; i++){
//         if( arr[i].length>longest.length){
//             longest = arr[i];
//         }
//     }

//     return longest
// };
   

// console.log(myFunction(["help", "me", "I"]));


// function myFunction(arr){

// for (let i = 0 ; i<arr.length; i++){
//     if(arr[i] = arr[i]+1){

//     }
// }
// }

// myFunction([true, true, true, true])

// function myFunction(){

// }

// console.log(myFunction())



// function myFunction(arr) {
//     // Sort the array by property b in ascending order
//     arr.sort((a, b) => a.b - a.b);

//     return arr;
// }

// // Test the function
// console.log(myFunction([{a:1, b:8}, {a:5, b:4}])); // Output: [{a:1, b:2}, {a:5, b:4}]


// function sumGreaterThanB(arr,b) {

//              return arr.reduce((sum,cur) => {
//                  return   cur>b ? sum + cur : sum
//               },0)


// }

// console.log(sumGreaterThanB([1, 2, 3, 4, 5], 2));

// function rangeFunc(min,max){
//     let result = [];

//     for(let i = min; i<max; i++){
//         result.push(i)
//     }
//     return result

// }

//  console.log(rangeFunc(1,9))


// Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array, 
// the first element should be either the given number itself. or zero if the number is smaller than 6.
//  The other elements should be the elements of the original array. Try not to mutate the original array.

function newArrayWithNumber( arr,num) {

       let first = num <6 ? 0 : num;

    //    return  [first , ...arr]
    //  let modified = arr.unshift(first);
    return arr
 
}

const originalArray = ['a', 'b', 'c'];
console.log(newArrayWithNumber(originalArray, 8));
