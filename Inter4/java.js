// let x ;

// console.log(x);


// console.log(  x)

// console.log((x <= 100) )


// if (!(x > 100)) 


// var globalVar = "abc"; //Global variable

// // Parent self-invoking function
// (function outerFunction(outerArg) { // start of outerFunction's scope

//     var outerFuncVar = 'x'; // Variable declared in outerFunction's function scope   

//     // Closure self-invoking function
//     (function innerFunction(innerArg) { // start of innerFunction's scope

//         var innerFuncVar = "y"; // variable declared in innerFunction's function scope
//         console.log(
//             "outerArg = " + outerArg + "\n" + //7
//             "outerFuncVar = " + outerFuncVar + "\n" + // x
//             "innerArg = " + innerArg + "\n" + // 5
//             "innerFuncVar = " + innerFuncVar + "\n" + //y
//             "globalVar = " + globalVar); //abc

//         // end of innerFunction's scope

//     })(5); // Pass 5 as parameter to our Closure

//     // end of outerFunction's scope

// })(7); // Pass 7 as parameter to the Parent function


// function mul(x){

//     return function(y){
//         return function(z){
//             return(x*y*z)
//         }
//     }
// }




// console.log(mul(2)(3)(4)); // output : 24


// console.log(mul(4)(3)(4)); // output : 48


// function add(a){

//     return function(b){
//         if (b) return add(a+b);
//         return a;
//     }
// }

// // console.log(add(5)(2)(4)(5)());
//  let addCur = add(5)(2)(4)(5)();
//  console.log(addCur)


// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// // arr = []


// for (let i = arr.length - 1 ;   i >=0; i--) {
//      arr.pop()
// };


// // for (let i = arr.length - 1; i >= 0; i--) {
// //     arr.pop();
// // }

// console.log(arr)

// arr.length = 0;

// console.log(arr)

// arr.splice(0,arr.length)

// let arr = {
//     name : "jit"
// }

// let check = Array.isArray(arr)
// console.log(check)

// console.log(arr)

// var output = (function (x) {
//     delete x; //n JavaScript, the delete keyword is used to remove a property from an object.
//     return x;
// })(0);

// console.log(output);


// let x = 5;

// console.log(delete x)

// var x = 1;
// var output = (function () {
//     delete x;
//     return x;
// })();

// console.log(output);


// var x = { foo: 1 };
// var output = (function () {
//     delete x.foo;
//     return x.foo;
// })();

// console.log(output);

// var Employee = {
//     company: 'xyz'
// }
// var emp1 = Object.create(Employee); // employee got compay as prototype property
// delete emp1.company // wil not delete
// //   console.log(emp1.hasOwnProperty(emp1))
// delete  emp1.__proto__.company // to delete this use __ptoto__

  
// // console.log()
// console.log(emp1.company);


// console.log()


// var trees = ["redwood", "bay", "cedar", "oak", "maple"];
// delete trees[3];

// console.log(trees)

// var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
// delete trees[3];
// console.log(trees[3])
// console.log(trees.length);


// var bar = true;
// console.log(bar + 0); //1
// console.log(bar + "xyz");//truexyz
// console.log(bar + true);//2
// console.log(bar + false); 1


// NFE (Named Function Expression)
// var foo = function bar() { return 12; };
// // typeof bar();

// console.log(typeof bar())

// var foo = function bar() {
//     // foo is visible here
//     // bar is visible here
//     console.log(typeof bar()); // Works here :)
// };
// // foo is visible here
// // bar is undefined here
// foo()

// var foo = function bar() {
//     // foo is visible here
//     // bar is visible here
//     console.log(typeof foo()); // Calling foo instead of bar
// };

// foo(); // Call foo to avoid infinite recursion


// Run-Time function declaration
// foo(); // Call foo function here, It will give an error
// var foo = function () {
//     console.log("Hi I am inside Foo");
// };


// Parse-Time function declaration
// bar(); // Call bar function here, It will not give an Error
// function bar() {
//     console.log("Hi I am inside Foo");
// }


// bar();
// (function abc() { console.log('something') })();
// function bar() { console.log('bar got called') };


// bar();
// (function abc() { console.log('something') })();
// function bar() { console.log('bar got called') };


// var salary = "1000$";

// (function () {
//     console.log("Original salary was " + salary);

//     var salary = "5000$";

//     console.log("My New Salary " + salary);
// })();

// var counterArray = {
//     A: 3,
//     B: 4
// };
// // counterArray["C"] = 1;
// counterArray['C'] =1;

// console.log(Object.keys(counterArray).length)

// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
// }

// var emp1 = new Employee('John Doe', 28);
//   emp1.name; // "John Doe"
// emp1.age; // 28

// function User(name) {
//     this.name = name || "JsGeeks";
// }

// var person = new User("xyz")["location"] = "USA";
// console.log(person);

// (function(){
//     console.log("IIFE")
// })();



// let person = {
//     name: "Jit",
//     age: 25
// }


// function Person(fname,lname,age){
//     this.firstName = fname;
//     this.lastName = lname;
//     this.age = age;

// }

// let p1 = new Person( "Jit", "Nishad",25)

// console.log(p1)


// var employee = new Object(); // Created employee object using new keywords and Object()
// employee.name = 'Nishant';
// employee.getName = function () {
//     return this.name;
// }
// console.log(employee)


// var obj = Object.create(null);
// obj.property = 'value';
// console.log(obj)

// var person = {
//     name: 'Nishant',
//     age: 24
// }
// if( typeof person.salary === 'undefined'){
//     console.log("undefined")
// }
// else{
//     console.log(person)
// }

// var person = {
//     name: 'Nishant',
//     age: 24
// }

// // console.log( 'name' in person) // to check key
// console.log(person.hasOwnProperty('name'))

// var arr = [10, 32, 65, 2];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function (j) {
//   return   function(){
//  console.log("index"+ j)
// }
//     }(i), 3000);
// }

// var arr = [10, 32, 65, 2];
// arr.forEach(function (ele, i) {
//     setTimeout(function () {
//         console.log('The index of this number is: ' + i);
//     }, 3000);
// })


// var employee = {
//     name: "Nishant"
// };

// // lock the object 
// // Object.preventExtensions(employee);
// Object.seal(employee)

// // Now try to change the employee object property name
// employee.name = "John"; // work fine 
// delete employee.name // fails silently unless it's in strict mode
// //Now try to add some new property to the object
// employee.age = 24; // fails silently unless it's inside the strict mode
// console.log(employee)

// var employee = {
//     name: "Nishant"
// };

// //Freeze the object
// Object.freeze(employee);

// // Seal the object 
// Object.seal(employee);
// employee.name = "raja"

// console.log(employee.name)
// console.log(Object.isExtensible(employee)); // false
// console.log(Object.isSealed(employee));     // true
// console.log(Object.isFrozen(employee));     // true


// employee.name = "xyz"; // fails silently unless in strict mode
// employee.age = 30;     // fails silently unless in strict mode
// delete employee.name   // fails silently unless it's in strict mode

// "use strict";

// var employee = {
//     name: "Nishant"
// };

// //Freeze the object
// Object.freeze(employee);

// // Seal the object 
// Object.seal(employee);

// console.log(Object.isExtensible(employee)); // false
// console.log(Object.isSealed(employee));     // true
// console.log(Object.isFrozen(employee));     // true


// employee.name = "xyz"; // fails silently unless in strict mode
// employee.age = 30;     // fails silently unless in strict mode
// delete employee.name;  // fails silently unless it's in strict mode



// function sendEmail(configuration, provider = "Gmail") {
//     // Set default value if user has not passed value for provider

//     // Value of provider can be accessed directly
//     console.log(`Provider: ${provider}`);
// }

// // In this call we are not passing provider parameter value
// sentEmail({
//     from: 'xyz@gmail.com',
//     subject: 'Test Email'
// });
// // Here we are passing Yahoo Mail as a provider value
// sentEmail({
//     from: 'xyz@gmail.com',
//     subject: 'Test Email'
// }, 'Yahoo Mail');



// var strA = "hi there";
// var strB = strA;
// // strB = "bye there!";
// console.log(strA) // strings are passed by value

// console.log(strB)


// var objA = { prop1: 42 };
// var objB = objA;
// objB = {};
// console.log(objA)
// console.log(objB)


// var arrA = [0, 1, 2, 3, 4, 5];
// var arrB = arrA;
// // arrB[0] = 42; will change arrA because it is passe by reference
// arrB = []; // WONT' CHNAGE arrA
// console.log(arrA)


// var arrA = [0, 1, 2, 3, 4, 5];
// var arrB = arrA.slice();
// arrB[0] = 42;
// console.log(arrA)
// console.log(arrB)


// var arrA = [{ prop1: "value of array A!!" }, { someProp: "also value of array A!" }, 3, 4, 5];
// var arrB = arrA;
// arrB[0].prop1 = 42;
// console.log(arrA);

// var arrA = [{ prop1: "value of array A!!" }, { someProp: "also value of array A!" }, 3, 4, 5];
// var arrB = arrA.slice();
// arrB[0].prop1 = 43;
// arrB[3] = 20;
// console.log(arrA);


// var employeeId = '1234abe';
// (function () {
//     console.log(employeeId);
//     var employeeId = '122345';
//     (function () {
//         var employeeId = 'abc1234';
//     }());
// }());


// (function () {
//     console.log(typeof displayFunc);
//     var displayFunc = function () {
//         console.log("Hi I am inside displayFunc");
//     }
    
// }());


// var employeeId = 'abc123';
// function foo() {
//     employeeId = '123bcd';
//     return;
// }
// foo();
// console.log(employeeId);



// var employeeId = 'abc123';

// function foo() {
//     employeeId = '123bcd';
//     return;

//     function employeeId() { }
// }
// foo();
// console.log(employeeId);


// var employeeId = 'abc123';

// function foo() {
//     employeeId();
//     return;

//     function employeeId() {
//         console.log(typeof employeeId);
//     }
// }
// foo();


// function foo() {
//     employeeId();
//     var product = 'Car';
//     return;

//     function employeeId() {
//         console.log(product);
//     }
// }
// foo();

// (function foo() {
//     bar();

//     function bar() {
//         abc();
//         console.log(typeof abc);
//     }

//     function abc() {
//         console.log(typeof bar);
//     }
// }());


// (function () {
//     'use strict';

//     var person = {
//         name: 'John'
//     };
//     person.salary = '10000$';
//     person['country'] = 'USA';

//     Object.defineProperty(person, 'phoneNo', {
//         value: '8888888888',
//         enumerable: true
//     })

//     // console.log(Object.keys(person));
//     console.log(Object.values(person))
// })();
// (function () {
//     // 'use strict';

//     var person = {
//         name: 'John'
//     };
//     person.salary = '10000$';
//     person['country'] = 'USA';

//     Object.defineProperty(person, 'phoneNo', {
//         value: '8888888888',
//         enumerable: false
//     })

//     console.log(Object.keys(person));
// })();

// (function () {
//     var objA = {
//         foo: 'foo',
//         bar: 'bar'
//     };
//     var objB = {
//         foo: 'foo',
//         bar: 'bar'
//     };
//     console.log(objA == objB);
//     console.log(objA === objB);
// }());



// (function () {
//     var objA = new Object({ foo: "foo" });
//     var objB = new Object({ foo: "foo" });
//     console.log(objA == objB);
//     console.log(objA === objB);
// }());

// (function () {
//     var objA = Object.create({
//         foo: 'foo'
//     });
//     var objB = Object.create({
//         foo: 'foo'
//     });
//     console.log(objA == objB);
//     console.log(objA === objB);
// }());

// (function () {
//     var objA = Object.create({
//         foo: 'foo'
//     });
//     var objB = Object.create(objA);
//     console.log(objA.toString() == objB.toString());
//     console.log(objA.toString() === objB.toString());
// }());

// (function () {
//     var objA = Object.create({
//         foo: 'foo'
//     });
//     var objB = objA;
//     console.log(objA == objB);
//     console.log(objA === objB);
//     console.log(objA.toString() == objB.toString());
//     console.log(objA.toString() === objB.toString());
// }());

// (function () {
//     var objA = Object.create({
//         foo: 'foo'
//     });
//     var objB = objA;
//     objB.foo = 'bar';
//     console.log(objA.foo);
//     console.log(objB.foo);
// }());

// (function () {
//     var objA = Object.create({
//         foo: 'foo'
//     });
//     var objB = objA;
//     objB.foo = 'bar';
//     console.log(objA.foo);
//     console.log(objB.foo);
// }());


// (function () {
//     var objA = Object.create({
//         foo: 'foo'
//     });
//     var objB = objA;
//     objB.foo = 'bar';

//     delete objA.foo;
//     console.log(objA.foo);
//     console.log(objB.foo);
// }());

// (function () {
//     var array1 = [];
//     var array2 = new Array(100);
//     var array3 = new Array(['1', 2, '3', 4, 5.6]);
//     console.log(array1);
//     console.log(array2);
//     console.log(array3);
//     console.log(array3.length);
// }());

// (function () {
//     var array = new Array('a', 'b', 'c', 'd', 'e');
//     array[10] = 'f';
//     delete array[10];
//     console.log(array.length);
//     console.log(array)

// }());


// (function () {
//     var array = [1, 2, 3, 4, 5];
//     console.log(array.indexOf(2));
//     console.log([{ name: 'John' }, { name: 'John' }].indexOf({ name: 'John' }));
//     console.log([[1], [2], [3], [4]].indexOf([3]));
//     console.log("abcdefgh".indexOf('e'));
// })();


// (function () {
//     var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
//     console.log(array.indexOf(2));
//     console.log(array.indexOf(2, 3));
//     console.log(array.indexOf(2, 10));
// })();


// (function () {
//     var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
//     console.log(array.indexOf(2));   // Output: 1 (the first occurrence of 2 in the array)
//     console.log(array.indexOf(2, 3)); // Output: 6 (the first occurrence of 2 after index 3)
//     console.log(array.indexOf(2, 10)); // Output: -1 (no occurrence of 2 after index 10)
// })();

// indexOf(element, index)
// (function () {
//     var containers = [2, 0, false, "", '12', true];
//     var containers = containers.filter(Boolean);
//     console.log(containers);
//     var containers = containers.filter(Number);
//     console.log(containers);
//     var containers = containers.filter(String);
//     console.log(containers);
//     var containers = containers.filter(Object);
//     console.log(containers);
// })();

// (function () {
//     var list = ['foo', 'bar', 'john', 'ritz'];
//     console.log(list.slice(1));
//     console.log(list.slice(1, 3));
//     console.log(list.slice());
//     console.log(list.slice(2, 2));
//     console.log(list);
// })();


// (function () {
//     var list = ['foo', 'bar', 'john'];
//     console.log(list.splice(1));
//     console.log(list.splice(1, 2)); //Splice modified the orih=ginal array
//     console.log(list);
// })();

// (function () {
//     var arrayNumb = [2, 8, 15, 16, 23, 42];
//     arrayNumb.sort();
//     console.log(arrayNumb);
// })();

// function funcA() {
//     console.log("funcA ", this);
//     (function innerFuncA1() {
//         console.log("innerFunc1", this);
//         (function innerFunA11() {
//             console.log("innerFunA11", this);
//         })();
//     })();
// }

// console.log(funcA());



// var obj = {
//     message: "Hello",
//     innerMessage: !(function () {
//         console.log(this.message);
//     })()
// };

// console.log(obj.innerMessage);

// var obj = {
//     message: 'Hello',
//     innerMessage: function () {
//         (function () {
//             console.log(this.message);
//         }());
//     }
// };
// console.log(obj.innerMessage());


// var obj = {
//     message: 'Hello',
//     innerMessage: function () {
//         var self = this;
//         (function () {
//             console.log(self.message);
//         }());
//     }
// };
// console.log(obj.innerMessage());
// let message = "Hi John";

// function myFunc() {
   
//     console.log(this.message);// refers to global object
// }
// myFunc.message = "Hi John";

// console.log(myFunc());

// function myFunc() {
//     console.log(myFunc.message);
// }
// myFunc.message = "Hi John";

// console.log(myFunc());


// function myFunc(param1, param2) {
//     // console.log(myFunc.length); //2 2 2
//     console.log(arguments.length)
// }
// console.log(myFunc());
// console.log(myFunc("a", "b"));
// console.log(myFunc("a", "b", "c", "d"));



// function Person(name, age) {
//     this.name = name || "John";
//     this.age = age || 24;
//     this.displayName = function () {
//         console.log(this.name);
//     }
// }

// Person.name = "John";
// Person.displayName = function () {
//     console.log(this.name);
// }

// var person1 = new Person('John');
// person1.displayName();
// Person.displayName();


// function passWordMngr() {
//     var password = '12345678';
//     this.userName = 'John';
//     return {
//         pwd: password,
     
//     };
// }
// // Block End
// var userInfo = passWordMngr();
// console.log(userInfo.pwd);
// console.log(userInfo.userName);


// var employeeId = 'aq123';
// function Employee() {
//      this.employeeId = 'bq1uy';
// }
// console.log(Employee.employeeId);


// var employeeId = 'aq123';

// function Employee() {
//     this.employeeId = 'bq1uy';
// }
// console.log(new Employee().employeeId);
// Employee.prototype.employeeId = 'kj182';
// Employee.prototype.JobId = '1BJKSJ';
// console.log(new Employee().JobId);
// console.log(new Employee().employeeId);


// var employeeId = 'aq123';
// (function Employee() {
//     try {
//         throw 'foo123';
//     } catch (employeeId) {
//         console.log(employeeId);
//     }
//     console.log(employeeId);
// }());




// (function () {
//     var greet = 'Hello World';
//     var toGreet = [].filter.call(greet, function (element, index) {
//         return index > 5;
//     });
//     console.log(toGreet);
// }());


// (function () {
//     function sayHello() {
//         var name = "Hi John";
//         return {
//             fullName: name
//         }
//     }
//     console.log(sayHello().fullName);
// })();


// function getNumber() {
//     return (2, 4, 5);
// }

// var numb = getNumber();
// console.log(numb);


// function mul(x) {
//     return function (y) {
//         return [x * y, function (z) {
//             return x * y + z;
//         }];
//     }
// }

// console.log(mul(2)(3)[0]);
// console.log(mul(2)(3)[1](4));



// let c = 0;

// let id = setInterval(() => {
//     console.log(c++)
// }, 200)

// setTimeout(() => {
//     clearInterval(id)
// }, 2000)



// function foo() {
//     let x = y = 0;
//     x++;
//     y++;
//     return x;
// }

// console.log(foo(), typeof x, typeof y)





// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     constructor(width) {
//         this.width = width;
//     }
//     // Getter
//     get area() {
//         return this.calcArea();
//     }
//     // Method
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(20, 30);

// console.log(square.area); // Uncaught Syn


// function main() {
//     console.log('A');
//     setTimeout(
//         function print() { console.log('B'); }
//         , 0);
//     console.log('C');
// }
// main(); // A,C and B

















