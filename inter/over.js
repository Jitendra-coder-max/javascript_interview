// function overloadedFunction() {
//     if (arguments.length === 1 && typeof arguments[0] === 'number') {
//         // Function implementation for one numeric argument
//         console.log("One numeric argument: " + arguments[0]);
//     } else if (arguments.length === 2 && typeof arguments[0] === 'string' && typeof arguments[1] === 'string') {
//         // Function implementation for two string arguments
//         console.log("Two string arguments: " + arguments[0] + ", " + arguments[1]);
//     } else {
//         // Default behavior or throw an error for unsupported arguments
//         console.log("Unsupported arguments");
//     }
// }

// overloadedFunction(10);                 // Output: One numeric argument: 10
// overloadedFunction("Hello", "World");   // Output: Two string arguments: Hello, World
// overloadedFunction(10, "Hello");        // Output: Unsupported arguments


// let arr = [1, 2, 3];

// // if (Array.isArray(arr)) {
// //     console.log("Variable 'arr' is an array.");
// // } else {
// //     console.log("Variable 'arr' is not an array.");
// // }


// console.log(Array.isArray(arr))

// function myFunc(num){

//     return num%1 === 0;
// }


// console.log(myFunc(4))




// function myFunction(str){


// const lstr = str.toLowerCase()

// let vowels = ['a','e','i','o','u']

// // let uniquevowel = []
//  let count = 0

// for(let char of lstr){

//     if(vowels.includes(char)){
//         // uniquevowel.push(char)
//         count++
//     }
// }

// return count

// }






// console.log(myFunction("Hello World"))


let person = {
    name: "Jit",
    age : 58
}

// let newPerson = Object.assign({},person)

      let newPerson = { ...person}

console.log(newPerson)