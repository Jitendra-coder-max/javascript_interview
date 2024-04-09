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
   

// class Counter {
//     constructor(n){
//         this.n = n;
//     }

//     increment(){
//         return ++this.n;
//     }
// }
      

             
//  const counter = new Counter(10);

//  console.log( counter.increment())
//  console.log( counter.increment())


// class createCounter {

//     constructor(init){
//         this.init = init;
//         this.count = init;
//     }

//     increment(){
//         return ++this.count;
//     }
//     decrement(){
//         return --this.count;
//     }

//     reset(){
//         this.count = this.init
//         return this.count
//     }

    
// }




// const counter = new createCounter(5)
//     console.log( counter.increment()); // 6
//     console.log( counter.reset()); // 5
//     console.log( counter.decrement()); // 4



// function once(fn) {
//     let called = false;
//     let result;
  
//     return function(...args) {
//       if (!called) {
//         called = true;
//         result = fn(...args);
//         return result;
//       } else {
//         return undefined;
//       }
//     };
//   }
  
//   // Example usage
//   const fn = (a, b, c) => (a + b + c);
//   const onceFn = once(fn);
  
//   console.log(onceFn(1, 2, 3)); // Output: 6
//   console.log(onceFn(2, 3, 6)); // Output: undefined
  
// var once = function(fn) {
//     let called = false;
//     let result;
//     return function(...args){
//         if(!called){
//             called = true;
//             result = fn(...args)
//             return result;
//         }

//         else {
//             return undefined
//         }
        
//     }
// };


//  let fn = (a,b,c) => (a + b + c)
//  let onceFn = once(fn)
 
// console.log( onceFn(1,2,3)); // 6
// console.log(  onceFn(2,3,6)); // returns undefined without calling fn



// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// function memoize(fn) {
//     let cache = {}
//     let callCount = 0;

//     return function(...args) {

//     const key = JSON.stringify(args);

//     if(!cache[key]){
//         cache[key] = fn.apply(this,args)
//         callCount++;
//     }  
//        return cache[key];
//     }
// }



//   let callCount = 0;
//   const memoizedFn = memoize(function (a, b) {
//  	 callCount += 1;
//    return a + b;
//  })
//   console.log( memoizedFn(2, 3)) // 5
//    console.log( memoizedFn(2, 3)) // 5
//   console.log(callCount) // 1 
 

// Event Eitter

// class EventEmitter{

//            constructor(){
//                 this.events = {}
//            }

//         subscribe(eventName,callback){
                
//                 if(!this.events[eventName]){
//                         this.events[eventName] = []
//                 }

//                 this.events[eventName].push(callback)

//            return {
//                 unsubscribe: () => {

//                     const indexId =   this.events[eventName].indexOf(callback);
//                     if(indexId !==-1){
//                         this.events[eventName].splice(indexId,1)
//                     }
//                     return undefined

//                 }
//            };

//         };

//         emit(eventName, args = [2]){
              
//                 if(!this.events[eventName]){
//                         return [];
//                 }

//             const callbacks =    this.events[eventName]
         
//                 let result =  callbacks.map((callback) =>  callback(...args))
//                 return result;
//         }


// };




const emitter = new EventEmitter();

function onClickCallback() {
        return 99
}

 const sub = emitter.subscribe('onClick', onClickCallback);

 console.log(  emitter.emit('onClick'));//[99]

 console.log( sub.unsubscribe()); // undefined
 console.log( emitter.emit('onClick')) // []
