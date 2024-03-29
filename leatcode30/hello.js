// console.log("hello")

// let createHelloWorld = function(){
//     return function(...args){
//         return 'Hello world'
//     }
// }

// const helloWorldFunction = createHelloWorld();
// console.log(helloWorldFunction())

// const createCounter = function (n){

//     return function (){
//         return n++
//     }
// }

//   const counter = createCounter(10)

// var  createCounter= (n) =>{

//     let count = n;
//     return () =>{

//         const currentValue = count
//         count++
//            return currentValue
//     }

// }

// const counter = createCounter(10)
//   console.log(counter()) // 10
//   console.log(counter())  // 11
//   console.log(counter())  // 12

// let expect = function (val) {
//   return {
//     toBe: (val2) => {
//       if (val === val2) {
//         return true;
//       } else {
//         throw new Error("Not Equal");
//       }
//     },

//     // notToBe: (val2) => {
//     //   if (val !== val2) {
//     //     return true;
//     //   }
//     //    else {
//     //     throw new Error("Equal");
//     //   }
//     // },


//     notToBe: (val2) => {
//         if (val !== val2) {
//         //   return true;
//           throw new Error("Equal");
//         }
//          else {
//             return true;
//         }
//       },
//   };
// };

// console.log(expect(5).toBe(5));
// console.log(expect(5).notToBe(5));


// let expect = function (val) {
    
//      const  toBe= (val2) => {
//         if (val === val2) {
//           return true;
//         } else {
//           throw new Error("Not Equal");
//         }
//       };
  
     
  
  
//    const notToBe= (val2) => {
//           if (val !== val2) {
//           //   return true;
//             throw new Error("Equal");
//           }
//            else {
//               return true;
//           }
//         };

//         return { toBe,notToBe}
    
//   };
  
//   console.log(expect(5).toBe(5));
//   console.log(expect(5).notToBe(5));
  


// var createCounter = function(init) {
//     let count = init;
//       return {
          
//           increment: function() {
//                 return ++count;
   
//           },
  
//           decrement:  function() {
//              return --count
//           },
  
//         reset: function(){
        //   return (count = init)
        //let count = init
        // return count
//         }
  
  
         
//       }
      
//   }
  
  
//     const counter = createCounter(5)
//     console.log( counter.increment()); // 6
//     console.log( counter.reset()); // 5
//     console.log( counter.decrement()); // 4
   

class Counter {
    constructor(n){
        this.n = n;
    }

    increment(){
        return ++this.n;
    }
}
      

             
 const counter = new Counter(10);

 console.log( counter.increment())
 console.log( counter.increment())
