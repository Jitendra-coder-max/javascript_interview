// const removeWhitespaces = (string) =>
// {

//    let sentence = ' '
//    for(let i = 0; i<string.length; i++){
//     if(string[i]  !== ' ')

//     sentence +=  string[i]
//    }
// return sentence;
// }

//  console.log( removeWhitespaces('Hello,   World! my name is sagar'));

// function removeWhitespaces(string) {
//     return string.replace(/\s/g,'')
// }

// console.log( removeWhitespaces('Hello,   World! my name is sagar'));

//  function rmVovel(str){
// const vovel = ['a','e','i','o','u'];
//       const conj = []
//                for(let i = 0; i<str.length; i++){
//                 const char = str[i].toLowerCase();
//                 if(!vovel.includes(char)){
//                     conj.push(str[i])
//                 }
//                }

//                return conj.join('');
//  }

// console.log(rmVovel("Hello, guys"))

// function removeVowels(word){

//     let vowels = ['a','e','i','o','u'];
//      let string = '';

//        for(let i = 0; i < word.length; i++){
//          if(!vowels.includes(word[i])){
//             string += word[i]
//            };
//           };
//     return string
//     };

//      console.log(removeVowels('Hello bro my name'))

// const sumOfEvens = (arr) => {
//   // Write your code here

//  return   arr.filter((val) => val%2 == 0).reduce((acc,cur) => acc+ cur, 0);
// }

// console.log( sumOfEvens([1, 1, 1, 2, 2, 2, 3, 3, 3]));

//  const sumOfThirds = (arr) => {
//   // Write your code here
// let sum = 0
//   for(let i =1; i<arr.length; i += 3){

//   sum = sum + arr[i]
//   }
//   return sum
// }

// console.log(sumOfThirds([1, 1, 1, 2, 2, 2, 3, 3, 3]));

//  const findCharacter = (str) => {
//   // Write your code here

//  let strArr =    str.split('')

//  for(let i =0 ; i<strArr; i++){

//    if(strArr.indexOf(strArr[i] == strArr.lastIndexOf(strArr[i]))){

//      return strArr[i].join('')
//    }
//  }

//  return null
// }

// console.log(  findCharacter("hello"));

// const findCharacter = (str) => {
//   let strArr = str.split('');

//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr.indexOf(strArr[i]) === strArr.lastIndexOf(strArr[i])) {
//       return strArr[i];
//     }
//   }

//   return null;
// }

// console.log(findCharacter("hello")); // Output: 'h'

//  const findLongest = (arr) => {

//   // Write your code here
// let longest = arr[0]
//    for(let i =1; i< arr.length; i++){

//      if(arr[i].length> longest.length){

//          longest= arr[i]
//      }
//    }
//    return longest
// }
// console.log( findLongest(['cat', 'dog', 'elephant']));

//  const sumNumbers = (str) => {
//   // Write your code here

// let newArr =  str.split(',')

//     let sum =  newArr.reduce((acc,cur) => acc+ parseInt(cur) ,0)
// return sum

// }

// console.log( sumNumbers("1,2,3,4,5"));

// const maxCharacters = (str) => {
//   // Write your code here
//  const occurance = {}

//  for(let val of str){
//   occurance[val] = ( occurance[val] || 0 ) +1
//  }
// //  return occurance

//  let maxChar = '';
//  let maxCount = 0

//  for(let key in occurance){
//   if(occurance[key]>maxCount){
//     maxCount = occurance[key]
//     maxChar = key;
//   }
//  }

//  return {maxChar,maxCount}
// }

// console.log(  maxCharacters(''));

//  const removeValues = (arr1, arr2) => {
//   // Write your code here
// let unique = []

//   for(let i = 0; i< arr1.length; i++){

//      if(!arr2.includes(arr1[i])){
//       unique.push(arr1[i])
//      }
//   }

//   return unique
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 6];
// const remaining = removeValues(arr1, arr2);
// console.log(remaining); // [1, 2, 5]

// const rotateArray = (arr, n) => {
//   // Write your code here

//  let firstPart =  arr.splice(0,n)
// //  console.log(firstPart)s
//  arr.push(...firstPart)
//  console.log(arr)
// }

// console.log( rotateArray([1, 2, 3, 4, 5], 2));

// const removeDuplicates = (str) => {
  
//    let unique = '';
//   for(let i = 0; i < str.length; i++) {
//     if (unique.indexOf(str[i]) === -1) {
//       unique += str[i];
//     }
   
//   }

//   return unique;
// };

// console.log(removeDuplicates("hello"));


// const invertObject = (obj) => {
//   // Write your code here
//  const inverted = {};
//  for( let key in obj) {

//   inverted[obj[key]] = key;
//  }

//  return inverted;

  
// };



// const originalObj = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// const invertedObj = invertObject(originalObj);
// console.log(invertedObj); // Output: { John: 'name', '30': 'age', 'New York': 'city' }
