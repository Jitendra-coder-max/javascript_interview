// // console.log("hello")

// // let createHelloWorld = function(){
// //     return function(...args){
// //         return 'Hello world'
// //     }
// // }

// // const helloWorldFunction = createHelloWorld();
// // console.log(helloWorldFunction())

// // const createCounter = function (n){

// //     return function (){
// //         return n++
// //     }
// // }

// //   const counter = createCounter(10)

// // var  createCounter= (n) =>{

// //     let count = n;
// //     return () =>{

// //         const currentValue = count
// //         count++
// //            return currentValue
// //     }

// // }

// // const counter = createCounter(10)
// //   console.log(counter()) // 10
// //   console.log(counter())  // 11
// //   console.log(counter())  // 12

// // let expect = function (val) {
// //   return {
// //     toBe: (val2) => {
// //       if (val === val2) {
// //         return true;
// //       } else {
// //         throw new Error("Not Equal");
// //       }
// //     },

// //     // notToBe: (val2) => {
// //     //   if (val !== val2) {
// //     //     return true;
// //     //   }
// //     //    else {
// //     //     throw new Error("Equal");
// //     //   }
// //     // },


// //     notToBe: (val2) => {
// //         if (val !== val2) {
// //         //   return true;
// //           throw new Error("Equal");
// //         }
// //          else {
// //             return true;
// //         }
// //       },
// //   };
// // };

// // console.log(expect(5).toBe(5));
// // console.log(expect(5).notToBe(5));


// // let expect = function (val) {
    
// //      const  toBe= (val2) => {
// //         if (val === val2) {
// //           return true;
// //         } else {
// //           throw new Error("Not Equal");
// //         }
// //       };
  
     
  
  
// //    const notToBe= (val2) => {
// //           if (val !== val2) {
// //           //   return true;
// //             throw new Error("Equal");
// //           }
// //            else {
// //               return true;
// //           }
// //         };

// //         return { toBe,notToBe}
    
// //   };
  
// //   console.log(expect(5).toBe(5));
// //   console.log(expect(5).notToBe(5));
  


// // var createCounter = function(init) {
// //     let count = init;
// //       return {
          
// //           increment: function() {
// //                 return ++count;
   
// //           },
  
// //           decrement:  function() {
// //              return --count
// //           },
  
// //         reset: function(){
//         //   return (count = init)
//         //let count = init
//         // return count
// //         }
  
  
         
// //       }
      
// //   }
  
  
// //     const counter = createCounter(5)
// //     console.log( counter.increment()); // 6
// //     console.log( counter.reset()); // 5
// //     console.log( counter.decrement()); // 4
   

// // class Counter {
// //     constructor(n){
// //         this.n = n;
// //     }

// //     increment(){
// //         return ++this.n;
// //     }
// // }
      

             
// //  const counter = new Counter(10);

// //  console.log( counter.increment())
// //  console.log( counter.increment())


// // class createCounter {

// //     constructor(init){
// //         this.init = init;
// //         this.count = init;
// //     }

// //     increment(){
// //         return ++this.count;
// //     }
// //     decrement(){
// //         return --this.count;
// //     }

// //     reset(){
// //         this.count = this.init
// //         return this.count
// //     }

    
// // }




// // const counter = new createCounter(5)
// //     console.log( counter.increment()); // 6
// //     console.log( counter.reset()); // 5
// //     console.log( counter.decrement()); // 4



// // function once(fn) {
// //     let called = false;
// //     let result;
  
// //     return function(...args) {
// //       if (!called) {
// //         called = true;
// //         result = fn(...args);
// //         return result;
// //       } else {
// //         return undefined;
// //       }
// //     };
// //   }
  
// //   // Example usage
// //   const fn = (a, b, c) => (a + b + c);
// //   const onceFn = once(fn);
  
// //   console.log(onceFn(1, 2, 3)); // Output: 6
// //   console.log(onceFn(2, 3, 6)); // Output: undefined
  
// // var once = function(fn) {
// //     let called = false;
// //     let result;
// //     return function(...args){
// //         if(!called){
// //             called = true;
// //             result = fn(...args)
// //             return result;
// //         }

// //         else {
// //             return undefined
// //         }
        
// //     }
// // };


// //  let fn = (a,b,c) => (a + b + c)
// //  let onceFn = once(fn)
 
// // console.log( onceFn(1,2,3)); // 6
// // console.log(  onceFn(2,3,6)); // returns undefined without calling fn



// // /**
// //  * @param {Function} fn
// //  * @return {Function}
// //  */
// // function memoize(fn) {
// //     let cache = {}
// //     let callCount = 0;

// //     return function(...args) {

// //     const key = JSON.stringify(args);

// //     if(!cache[key]){
// //         cache[key] = fn.apply(this,args)
// //         callCount++;
// //     }  
// //        return cache[key];
// //     }
// // }



// //   let callCount = 0;
// //   const memoizedFn = memoize(function (a, b) {
// //  	 callCount += 1;
// //    return a + b;
// //  })
// //   console.log( memoizedFn(2, 3)) // 5
// //    console.log( memoizedFn(2, 3)) // 5
// //   console.log(callCount) // 1 
 

// // Event Eitter

// // class EventEmitter{

// //            constructor(){
// //                 this.events = {}
// //            }

// //         subscribe(eventName,callback){
                
// //                 if(!this.events[eventName]){
// //                         this.events[eventName] = []
// //                 }

// //                 this.events[eventName].push(callback)

// //            return {
// //                 unsubscribe: () => {

// //                     const indexId =   this.events[eventName].indexOf(callback);
// //                     if(indexId !==-1){
// //                         this.events[eventName].splice(indexId,1)
// //                     }
// //                     return undefined

// //                 }
// //            };

// //         };

// //         emit(eventName, args = [2]){
              
// //                 if(!this.events[eventName]){
// //                         return [];
// //                 }

// //             const callbacks =    this.events[eventName]
         
// //                 let result =  callbacks.map((callback) =>  callback(...args))
// //                 return result;
// //         }




// // let promise = new Promise((resolve,reject) => {


// //         const x = 'xyz';
// //         const y = 'xyz'


// //         if(x===y){
// //                 resolve()
// //         }
// //         else{
// //                 reject()
// //         }
// // })

// // promise.then(() => {
// //         console.log(" x and y are equal")
// // }).catch(() =>
// // console.log("Not equal"))


// // const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
// // const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));


               
// //            const promiseSum = Promise.all([promise1,promise2])
// //            .then(([result1,result2]) => {
// //                 return result1+result2;
// //            })

// //            promiseSum.then((sum) => {
// //                 console.log(sum)
// //            })







// // const sumPromise = Promise.all([promise1, promise2])
// //         .then(([result1, result2]) => {
// //                 return result1 + result2;
// //         });

// // // Testing
// // sumPromise.then(sum => {
// //         console.log('Sum:', sum); // Expected output: 2 + 5 = 7
// // });




// // var foo = "Lion"
// // function ShowName(){
// //         foo = 'panda'
// //         return;
// //         function foo(){}
// // }

// // ShowName()
// // console.log(foo)



// // var TimeLimitedCache = function () {
// //         this.cache = new Map();
// // };

// // /** 
// //  * @param {number} key
// //  * @param {number} value
// //  * @param {number} duration time until expiration in ms
// //  * @return {boolean} if un-expired key already existed
// //  */
// // TimeLimitedCache.prototype.set = function (key, value, duration) {
// //         const now = Date.now();
// //         if (this.cache.has(key)) {
// //                 this.cache.set(key, [value, now + duration]);
// //                 return true;
// //         }
// //         this.cache.set(key, [value, now + duration]);
// //         return false;
// // };

// // /** 
// //  * @param {number} key
// //  * @return {number} value associated with key
// //  */
// // TimeLimitedCache.prototype.get = function (key) {
// //         const now = Date.now();
// //         if (this.cache.has(key)) {
// //                 const [value, expiry] = this.cache.get(key);
// //                 if (now < expiry) {
// //                         return value;
// //                 } else {
// //                         this.cache.delete(key);
// //                 }
// //         }
// //         return -1;
// // };

// // /** 
// //  * @return {number} count of non-expired keys
// //  */
// // TimeLimitedCache.prototype.count = function () {
// //         const now = Date.now();
// //         let count = 0;
// //         for (const [key, [_, expiry]] of this.cache) {
// //                 if (now < expiry) {
// //                         count++;
// //                 } else {
// //                         this.cache.delete(key);
// //                 }
// //         }
// //         return count;
// // };




// const emitter = new EventEmitter();

// function onClickCallback() {
//         return 99
// }

//  const sub = emitter.subscribe('onClick', onClickCallback);

//  console.log(  emitter.emit('onClick'));//[99]

//  console.log( sub.unsubscribe()); // undefined
//  console.log( emitter.emit('onClick')) // []

// //  const timeLimitedCache = new TimeLimitedCache()
// //  console.log( timeLimitedCache.set(1, 42, 1000)); // false
// //  console.log( timeLimitedCache.get(1)) // 42
// //  console.log( timeLimitedCache.count()) // 1


// // let arr = [23,34,56,78,97,54,32];


// // let largest = arr[0];
// // let second = -Infinity;

// // for(let i = 1; i<arr.length; i++){

// //         if(arr[i]>largest){
// //         second = largest
// //       largest =   arr[i]
// //         }

// //         else if(arr[i]<largest && arr[i]>second) {
// //      second = arr[i]
// //         }
// // }

// // console.log(second)


// // let arr = [1,2,4,5,6,7,8];

// // let size = 1

// // let res = [];


// // for(let i = 0 ;i<arr.length; i +=size){

// //           res.push( arr.slice(i, i+size))
// // }

// // console.log(res)




// // let arr = [23,45,78,43,65]
// // const size = 1;

// // let res = []
// // let subArr = []

// // for(let i = 0; i<arr.length; i++){
 
// //         subArr.push(arr[i])
// //         if(subArr.length === size)
// //         {
// //                 res.push(subArr)
// //                 subArr = [];
// //         }

// //       if(subArr.length>0){
// //         res.push(subArr)
// //       }
// // }

// // console.log(res)










// // /**
// //  * @param {Function} fn
// //  * @return {Object}
// //  */
// // Array.prototype.groupBy = function (fn) {

// //         const grouped = {}

// //         for (let i = 0; i< this.length; i++) {

// //         }
// // };


// //  [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 


 
// var compactObject = function (obj) {
//         if (Array.isArray(obj)) {
//                 for (let i = 0; i < obj.length; i++) {
//                         if (obj[i] === null || obj[i] === 0 || obj[i] === false || obj[i] === "") {
//                                 obj.splice(i, 1);
//                                i--;
//                         }
//                         if (typeof obj[i] === 'object') {
//                                 compactObject(obj[i]);
//                         }
//                 }
//         }
//         else {
//                 for (const key in obj) {
//                         if (obj[key] === null || obj[key] === 0 || obj[key] === false || obj[key] === "") {
//                                 delete obj[key];
//                         }
//                         if (typeof obj[key] === 'object') {
//                                 compactObject(obj[key]);
//                         }
//                 }

//         }
//         return obj;

// };



//  console.log( compactObject({ "a": null, "b": [false, 1] }))
// console.log(compactObject([null, 0, 5, [0], [false, 16]]))
