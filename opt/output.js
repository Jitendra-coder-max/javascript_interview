// let x = 10;
// if (x = 5) { // it will assign
//   console.log(x);
// }  
// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }\

// function greet(name) {
//     console.log("Hello, " + name + "!");
//   }
//   greet("John");

// function double(arr) {
//     arr.forEach(function(val) {
//       val * 2;
//     });
//     return arr;
//   }
//   console.log(double([1, 2, 3]));

// let arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log(arr[i]);
//   }, 1000);
// }

// function outerFunction() {
//     let outerVariable = "Hello";
//     return function() {
//       console.log(outerVariable);
//     }
//   }
  
  
//   outerFunction()


// function multiply(a, b) {
//     let result = a * b;
//     // return result;
//   }
//   console.log(multiply(2, 3));


// let str = "hello doe";
// let reversedString = str.split(' ').map(word => word.split('').reverse().join('')).join(' ');

// console.log(reversedString); // Output: "olleh eod"
            //   let str = "hello doe";
            //   let capital=  str.split('').map((word) =>  word[0].split('').join('')).join('')

            //   console.log(capital)



            // let str = "Hello my name is jit";

            //     let newArr = str.split(' ')


                // let longest = '';


                // for(let i = 0; i< newArr.length;i++){
                //     if(newArr[i].length> longest.length){
                //         longest = newArr[i]
                //     }
                // }

                // console.log(longest)

        //   let  mywords = newArr.sort((a,b) => a.length -b.length)
        //     // console.log(mywords[mywords.length-1])
        //     console.log(mywords.at(1))
                    
                //  let str = "hello world India"

                // //   let myword = str.split(' ').map((elem) => elem.replace(elem[0],elem[0].toUpperCase())).join(' ')
                // //   console.log(myword)

                // let myword = str.split(' ').map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1)).join(' ')
                // console.log(myword)


              //   let str = "hello"

              //   let newStr = str.split('')

              //   let occurance = {}

              // for(let val of newStr){

              //   if(occurance[val]){
              //       occurance[val]++  
              //   }
              //   else{
              //       occurance[val] = 1 
              //   }
              // }

              //   console.log(occurance)

//               function strip(obj,prop){


//                 for(let key in obj){
//                   if(obj[key] === prop){
//                     delete obj[key]
//                   }
//                 }
//                 return obj
//               }


// let person ={
//   name: 'Ram',
//   age: 26
// }
//               console.log(strip(person,26))



// class Emitter {
//   constructor() {
//     this.eventMap = {};
//   }

//   subscribe(eventName, callback) {
//     if (!this.eventMap[eventName]) {
//       this.eventMap[eventName] = [];
//     }

//     // wrap callback in another function to save as different object
//     // in order to support followup #2
//     const cb = (...args) => {callback(...args)};

//     this.eventMap[eventName].push(cb);

//     return {
//       release: () => {
//         const index = this.eventMap[eventName].indexOf(cb);
//         this.eventMap[eventName].splice(index, 1);

//         if (!this.eventMap[eventName].length) {
//           delete this.eventMap[eventName];
//         }
//       }
//     }
//   }

//   emit(eventName, ...args) {
//     if (!this.eventMap[eventName]) {
//       throw new Error("no such event");
//     }

//     this.eventMap[eventName].forEach((callback) => {
//       callback.call(undefined, ...args);
//     });
//   }
// }


// const emitter = new Emitter();
// const foo = function(a, b) {
//   console.log(a + b);
// };
// const sub1 = emitter.subscribe('event 1', foo)
// // A different callback subscribes to the same event
// const sub2 = emitter.subscribe('event 1', function(a, b) {
//   console.log(a * b);
// })
// // Same callback subscribes to the the same event twice
// const sub3 = emitter.subscribe('event 1', foo)
// emitter.emit('event 1', 10, 8); // output 18, 80, 18
// sub1.release();
// emitter.emit('event 1', 10, 8); // output 80, 18
// sub2.release();
// emitter.emit('event 1', 10, 8); // output 18