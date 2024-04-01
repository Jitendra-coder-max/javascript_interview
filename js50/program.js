
// const sum = (a,b) => {
// return  a+b;
// }



// console.log(sum(2,4))




// function maxnum(arr){

//     let longest = arr[0]
// let second = arr[0]
//     for(let i = 1; i<arr.length; i++){
//         if(arr[i]>longest){
//              second = longest
//             longest = arr[i]
//         }


//         else if (arr[i]<longest && arr[i]> second){
//              second = arr[i]
//         }
//     }

    

//     return {longest , second}
// }


//  console.log( maxnum([23,34,45,76,43]))


// let arr = [23,45,67,76,54]

//  let largest = Math.max(...arr)
//  console.log(largest)


// let str = 'hello'

// let newStr = ''

// for(let i = str.length-1; i>=0 ; i--){
// newStr += str[i]

// }

// console.log(newStr)

// let str = 'hello'

//   let newStr = str.split("").reverse().join('')
//  console.log(newStr)


// function facto(n){

//     // let fact = 1
// if(n===0 || n === 1){
//     return 1

// }
// else{

//  return  n*facto(n-1)
// }
// }
// console.log(facto(5))

// function sortByKey(array, key) { 
//     return array.sort((a, b) =>  a[key] -b[key] )
// }


// const arrayOfObjects = [
//     { id: 2, name: "Alice" },
//     { id: 1, name: "Bob" },
//     { id: 3, name: "Charlie" }
// ];

// // Sort the array based on the "id" key
// const sortedArrayById = sortByKey(arrayOfObjects, "id");
// console.log(sortedArrayById); 


// let arr = [23,34,56,0,54,0,32,0,23,0,43]


// let result = []
// let count = 0;

// for(let i = 0; i<arr.length; i++){
// if(arr[i] !==0){
//     result.push(arr[i])
// }

// else {
//     count++
// }

// }

// for(let i =0; i<count; i++){
//     result.push(0)
// }

// console.log(result)


// let  strName =  'John Doe' ;


// let newStr = strName.split(' ')

//        let reversed =                  newStr.map((str) => str.split('').reverse().join('')).join(' ')
// console.log(reversed)


 let arr = [4, 5, 6, 7, 8, 9, 7];


 let occurance = {}


 for(let val of arr){

    if(occurance[val]){
        occurance[val]++
    }
    else{
        occurance[val] = 1
    }
 }

let result = []

 for(let key in occurance){
result.push({ value: key, count: occurance[key]})
 }

 console.log(result)

//  console.log(occurance)