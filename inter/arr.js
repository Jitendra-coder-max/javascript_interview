// let arr = [1,2,3,4,1,2,5,6]

// let duplicate = []

//   let newArr  =   arr.filter((val,index,arr) => arr.indexOf(val) !== index)

// // console.log(duplicate)
// console.log(newArr)
//  console.log( Array.isArray(arr))

// const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8, [9, 10]]];

//   console.log( nestedArray.flat(2))

// let arr = [34,45,34,56,78]
// let arr1 = [34,78,34,56,67,78]

// let mergedArr = [...arr,...arr1]

//    let newArr = [... new Set(mergedArr)]

// let mergedArr = [..]

// let unique = []

// mergedArr.forEach((val,index,arr) =>{
//     if(unique.indexOf(val) == -1){

//         unique.push(val)
//     }
// })

// console.log(unique)
// console.log(newArr)

// function arrayDifference(array1, array2) {
//     return array1.filter(element => !array2.includes(element));
// }

// // Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const differenceArray = arrayDifference(array1, array2);
// console.log("Difference between array1 and array2:", differenceArray);

// let str =    '    Hello how are you'

// console.log(_.isString(str))

// // console.log(str.replaceAll('o','u'))

// console.log(str.substring(1,str.length))

// console.log(str.trim())
// console.log(str)

//  let newStr = str.split('')

//  console.log([...str])
//  console.log(newStr)

// var a = 3;
// var b = {
//   a: 9,
//   b: ++a
// };
// console.log(a + b.a + b.b);

// console.log(b.b)

// const arr = [1, 2, undefined, NaN, null, false, true, "", 'abc', 3];
// console.log(arr.filter(Boolean));

// let str = "helloBrother"
// let str2 = 'mybro'

// let newStr = str.slice(1,str.length)
// let newStr1 = str.slice(1,str2.length)

// let merged = newStr.concat(newStr1)
// console.log(merged)

//  let newStr  =   str.slice(0,(str.length/2))

// let newStr =              str.length>3 ? str.slice(0,3)+str.slice(-3) : str

// console.log(newStr)

// let arr = [12,34,45,67,89,66,34,12]

// let arr= [1,2,3,4]

// let newArr = arr.filter((val) => val%2==0).length

// console.log(newArr)

// let flag = false;
// for(let i = 0; i<arr.length; i++){
//     for(let j =i+1; j<arr.length; j++){

//         if(arr[i]> arr[j])

//           flag = true // not sorted
//            break

//     }
// }

// if(flag)(
//     console.log("not sorted")
// )

// else{
//     console.log("sorted")
// }

// console.log(flag)

// const people = [
//     { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
//     { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
//     { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
//     { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
//     { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
//     { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
//     { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
//     { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
//     { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
//     { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
//     { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
//     { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
// ];

// people.

// ) Get a list of the people's full name (firstName and lastName).

// const sorted = people.sort((a,b) => new Date(a.DOB) - new Date(b.DOB));
// console.log(sorted)

//  let fullName = people.map((person) =>  `  ${person.firstName} ${person.lastName}`)
// let fullName = people.map(({firstName,lastName}) =>  `  ${firstName} ${lastName}`)

//  console.log(fullName)

// Who are the people that are currently older than 30?

// let day = new Date()

// let currentYear =   day.getFullYear()

// // let bday = new Date(people.DOB)
// const dob = new Date(people.DOB);
// console.log(dob)

//   let bornyear=  dob.getFullYear()

//               console.log(bornyear)

//        let newArr = people.filter((person) =>  new Date().getFullYear() - new Date(person.DOB).getFullYear()>30 )

// // console.log(currentYear)
// console.log(newArr)

// console.log(day)

// What is the average income of all the people in the array?

//  total = people.reduce((acc,cur) => acc+ parseInt(cur.salary), 0)

//  console.log(parseInt(total))

// console.log(total/people.length)

// const orders = [
//     { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
//         { productId: '123', price: 55 },
//         { productId: '234', price: 30 },
//     ]},
//     { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
//         { productId: '234', price: 30 },
//     ]},
//     { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
//         { productId: '567', price: 30 },
//         { productId: '678', price: 80 },
//     ]},
//     { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
//         { productId: '789', price: 12 },
//         { productId: '890', price: 90 },
//     ]},
//         { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
//         { productId: '901', price: 43 },
//         { productId: '123', price: 55 },
//     ]},
// ];

// Have any products with an id of 123 been sold?

// let checkProducts = orders.reduce((acc,order) => acc + order.items.reduce((acc,item) => acc + (item.productId ==='123'),0),0);
// let checkProducts = orders.some(e => e.items.find(i => i.productId == '123'));
// console.log(checkProducts)

// Has the customer with ID '123' made any orders?

//  let checkOrder = orders.some((order) => order.customerId==='123');
// let checkOrder = orders.filter((order) => order.customerId==='123')

//  console.log(checkOrder)

// let check =        orders.every((order) => order.delivered);

// console.log(check)

// 3) Have all the orders been delivered?

//  totalPriceperOrder = orders.map((order) =>({ ...order,
//      totalOrder: order.items.reduce((acc,item) => acc+item.price,0)}))

//  console.log(totalPriceperOrder)

// Create a new property on each order with the total price of items ordered.

// Get a list of the orders for the customer with the ID 234 that have not been delivered.

// const listOrder =  orders.filter((order) => order.customerId='234' && !order.delivered )
// console.log(listOrder)

// const users = [
//     { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
//     { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
//     { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
//     { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
//     { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
//     { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
//     { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
//     { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
//     { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
//     { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
// ];

// const comments = [
//     { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
//     { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
//     { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
//     { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
//     { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
//     { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
//     { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
//     { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
//     { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
//     { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
// ];

//  let checkuser =users.filter(user => !comments.find(comment => comment.userId == user.id))

//  console.log(checkuser)

// Get a list of the users who haven't commented

// Which user commented 'OK great thanks'?

//          let finduser =        users.find((user) => user.id === comments.find((comment) => comment.text === 'OK great thanks').userId)
// console.log(finduser)
// // Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

// let firstComment =users.find((user) => user.id === comments[0].userId)
// let firstComment =users.find((user) => user.id === comments[comments.length-1].userId)

// console.log(firstComment)

// Get the last comment
// const lastComment = comments[comments.length - 1];

// Find the user who wrote the last comment
// const userWhoWroteLastComment = users.find(user => user.id === lastComment.userId);

// Output the result
// console.log(`The user who wrote the last comment is ${userWhoWroteLastComment.firstName} ${userWhoWroteLastComment.lastName}.`);

// console.log(userWhoWroteLastComment)

// What is Madison Marshall's user id?

// let solouser = users.find((user) => user.firstName==='Madison' && user.lastName==='Marshall')

// console.log(solouser)

// const users = [{
//     id: "e0aafb31-8ac6-48d4-99ee-12af8ddcbdae",
//     email: "tcasaletto0@soundcloud.com",
//     ip_address: "53.215.156.73"
//   }, {
//     id: "a7b0221d-5228-4992-a964-b5f3e3d7a022",
//     email: "nmoffett1@paginegialle.it",
//     ip_address: "34.81.219.4"
//   }, {
//     id: "1019b52c-db9d-45a2-975f-404455925a6a",
//     email: "rcrampin2@yale.edu",
//     ip_address: "65.181.114.151"
//   }, {
//     id: "e8637c3b-645d-4742-a463-d2006742606f",
//     email: "ddreinan3@smugmug.com",
//     ip_address: "136.171.217.116"
//   }, {
//     id: "a20803f2-c372-4f39-97b1-d8e948151c8c",
//     email: "gdorkin4@taobao.com",
//     ip_address: "220.228.4.97"
//   }, {
//     id: "63f8e789-009d-4e7b-ad6b-cc8c8a1d1248",
//     email: "vhucquart5@typepad.com",
//     ip_address: "101.212.0.49"
//   }, {
//     id: "74120248-03b5-4888-84c0-d1a459c6273b",
//     email: "vsircombe6@marriott.com",
//     ip_address: "28.180.205.167"
//   }, {
//     id: "412a0669-7171-48b4-95eb-e898993ec1dc",
//     email: "kdesouza7@t.co",
//     ip_address: "61.44.195.62"
//   }, {
//     id: "6cd04ecc-8316-4542-9faa-b8438e82b4ad",
//     email: "sbehnke8@booking.com",
//     ip_address: "1.176.238.27"
//   }, {
//     id: "cfdf5009-84d3-4599-88c0-048c4fcae2ed",
//     email: "clindsell9@nymag.com",
//     ip_address: "44.37.119.76"
//   }];

//   Replace all the items in the array with a string value of 'deleted'

//   let duser = users.fill('deleted');

//   console.log(duser)

//  let euser =  users.find((user) => user.email.includes('soundcloud'))
// let euser =  users.filter((user) => user.email.includes('soundcloud'))
// let euser =  users.map((user) =>  user.email.includes('soundcloud') ? user:null)

//  console.log(euser)

//   Find the user object that has the 'soundcloud' email address
//   */

//   Check whether every email address in the list of users is valid (get a true or false value)

// let checkEmail = users.every((user) =>  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email))

// console.log(checkEmail)

// const accounts = [{
//     _id: "5e56d5f5c00d45b8f1125ef4",
//     index: 0,
//     guid: "955310d3-45df-47e7-bc9c-92504d5e92d2",
//     isActive: true,
//     balance: "$3,926",
//     picture: "http://placehold.it/32x32",
//     age: 26,
//     eyeColor: "green",
//     name: "George Bond",
//     gender: "male",
//     company: "GEEKOL",
//     email: "georgebond@geekol.com",
//     phone: "+1 (862) 591-2584",
//     address: "677 Rost Place, Brandermill, Virgin Islands, 854",
//     about: "Est deserunt incididunt incididunt et. Et reprehenderit labore officia fugiat deserunt et non consequat velit et laboris duis. Reprehenderit dolore dolor reprehenderit culpa. Nulla duis do dolore magna cupidatat mollit quis ullamco duis.",
//     registered: "2014-05-31T09:59:01 -01:00",
//     latitude: -30.600915,
//     longitude: -83.795214,
//     tags: ["nostrud", "aliquip", "est", "laboris", "voluptate", "do", "dolor", ["deserunt", "ipsum"], ["consectetur", "quis", "commodo"]],
//     friends: [ {id: 0, name: "Alisa Ford"}, {id: 1, name: "Hess Howell"}, {id: 2, name: "Gwendolyn Hendrix"} ],
//     greeting: "Hello, George Bond! You have 2 unread messages.",
//     favoriteFruit: "banana",
// },
// {
//     _id: "5e56d5f51837c78c32ed16ef",
//     index: 1,
//     guid: "416d3864-dc91-45e3-817c-07562b04b512",
//     isActive: false,
//     balance: "$1,273",
//     picture: "http://placehold.it/32x32",
//     age: 25,
//     eyeColor: "green",
//     name: "Fay Carlson",
//     gender: "female",
//     company: "SIGNIDYNE",
//     email: "faycarlson@signidyne.com",
//     phone: "+1 (922) 529-2437",
//     address: "786 Belvidere Street, Carbonville, South Dakota, 3020",
//     about: "Ullamco deserunt nostrud minim consectetur ad enim ipsum consectetur. Excepteur ad eiusmod ut quis in magna cillum qui commodo ad do eu. Nulla aliquip Lorem excepteur laboris elit.",
//     registered: "2017-04-18T02:00:02 -01:00",
//     latitude: 74.274128,
//     longitude: -119.604152,
//     tags: ["et", "ut", "mollit", "occaecat", "ipsum", "mollit", "pariatur"],
//     friends: [{id: 0, name: "Miranda Little"}, {id: 1, name: "Ellen Burks"}, {id: 2, name: "Shanna Logan"}],
//     greeting: "Hello, Fay Carlson! You have 10 unread messages.",
//     favoriteFruit: "strawberry",
// },
// {
//     _id: "5e56d5f54b9a9491ba37fec9",
//     index: 2,
//     guid: "46839c30-0b7e-4009-98f1-9b8d770a0c88",
//     isActive: false,
//     balance: "$3,455",
//     picture: "http://placehold.it/32x32",
//     age: 35,
//     eyeColor: "blue",
//     name: "French Bennett",
//     gender: "male",
//     company: "PASTURIA",
//     email: "frenchbennett@pasturia.com",
//     phone: "+1 (883) 501-3963",
//     address: "856 Hemlock Street, Alfarata, Nevada, 5261",
//     about: "Nulla sunt ea sunt labore id excepteur elit incididunt et irure. Ut pariatur ad eu ut qui est consectetur labore enim fugiat. Occaecat incididunt ex sunt cillum Lorem in aliquip est voluptate aliquip pariatur reprehenderit ad. Aute nisi et enim enim. In voluptate eu minim duis.",
//     registered: "2015-04-16T11:53:33 -01:00",
//     latitude: 85.491905,
//     longitude: 90.342252,
//     tags: ["laboris", "reprehenderit", "est", "in", "duis", "voluptate", "non"],
//     friends: [{id: 0, name: "Mayer Sullivan"}, {id: 1, name: "Wiggins Hudson"}, {id: 2, name: "Jacqueline Gibbs"}],
//     greeting: "Hello, French Bennett! You have 10 unread messages.",
//     favoriteFruit: "apple",
// },
// {
//     _id: "5e56d5f55dd72bb06144c70c",
//     index: 3,
//     guid: "52b94117-bd93-4d8f-b8e3-f2fd1c3988fc",
//     isActive: false,
//     balance: "$1,733",
//     picture: "http://placehold.it/32x32",
//     age: 30,
//     eyeColor: "blue",
//     name: "Shannon Mitchell",
//     gender: "male",
//     company: "DECRATEX",
//     email: "shannonmitchell@decratex.com",
//     phone: "+1 (876) 447-3381",
//     address: "870 Tillary Street, Aurora, Vermont, 8055",
//     about: "Occaecat adipisicing tempor ut enim consectetur enim sit ea qui consequat sint anim sint. Sint elit occaecat eiusmod consectetur veniam ad do. Voluptate reprehenderit pariatur id deserunt sunt reprehenderit eiusmod. Aute incididunt aliquip ad aliquip. Commodo cupidatat nisi velit eiusmod qui quis tempor eiusmod sit velit ex. Ad tempor cillum incididunt aliqua labore eu voluptate voluptate cillum aute amet veniam. Velit elit occaecat esse fugiat minim deserunt sit amet et non ea sit cupidatat.",
//     registered: "2014-01-29T04:55:04 -00:00",
//     latitude: 77.845921,
//     longitude: -137.754911,
//     tags: ["consequat", "non", "dolore", "cupidatat", "irure", "ipsum", "quis"],
//     friends: [{id: 0, name: "Isabelle Luna"}, {id: 1, name: "Marissa Beach"}, {id: 2, name: "Sarah Simmons"}],
//     greeting: "Hello, Shannon Mitchell! You have 4 unread messages.",
//     favoriteFruit: "banana",
// },
// {
//     _id: "5e56d5f5bb33b3df103cbfb9",
//     index: 4,
//     guid: "2fc0bb48-ad7f-4c91-a655-6fcb761a1e8f",
//     isActive: true,
//     balance: 40000,
//     picture: "http://placehold.it/32x32",
//     age: 35,
//     eyeColor: "brown",
//     name: "Johns Hooper",
//     gender: "male",
//     company: "ZENTHALL",
//     email: "johnshooper@zenthall.com",
//     phone: "+1 (868) 432-2105",
//     address: "446 Emmons Avenue, Tyro, South Carolina, 3627",
//     about: "Ipsum ullamco reprehenderit nulla sint. Deserunt reprehenderit excepteur dolore quis et culpa in. Adipisicing consectetur amet reprehenderit ex velit incididunt quis ipsum reprehenderit in irure. Adipisicing Lorem minim eu laborum ex ullamco nostrud reprehenderit ullamco minim minim non. Magna id fugiat duis officia deserunt ullamco est esse.",
//     registered: "2017-09-06T09:24:11 -01:00",
//     latitude: -33.444624,
//     longitude: 99.697197,
//     tags: ["et", "minim", "sunt", "irure", "et", "esse", "consectetur"],
//     friends: [{id: 0, name: "Cynthia Hays"}, {id: 1, name: "Estela Walton"}, {id: 2, name: "Christy Ball"}],
//     greeting: "Hello, Johns Hooper! You have 1 unread messages.",
//     favoriteFruit: "apple",
// }];

// // * Get a list of all the friends for all users who are younger than 30 AND have a balance more than $1500

//  const userlist = accounts.filter((account) => account.age>30 && account.balance> 1500).map((friend) => friend.name).flat()
// console.log(userlist)
// Get a list of all the friends for all the user's accounts as an array (don't worry about duplicates)

//   listFriends = accounts.map(({friends}) => friends.map(({name}) => name)).flat()

//   console.log(listFriends)

// * Get a list of all the tags for all the accounts and join them together as a string separated by commas.

// let listTag = accounts.map((account) => account.tags.join(','))

// console.log(listTag)

// Check whether the tags for the first account includes the "consectetur" tag

// let checkstr = accounts[0].tags.includes('consectetur');
// let checkstr = accounts[0].tags.flat().includes('consectetur');

// let checkstr = accounts[accounts.length-1].tags.includes('consectetur');

// console.log(checkstr)

// The first account has nested arrays of tags
// in it's tag property.  Get a list of all tags for this account as a one-dimensional array.

//  let taglist = accounts.map((account) =>  account.tags.map((tag) => tag)).flat(2)

//  console.log(taglist)

// let num1 = 10;
// let num2 = 20;

// num1= num1+num2 //30
// num2 = num1-num2// 10
// num1 = num1 - num2 //20
// console.log(num1,num2)
// console.log(Number.isInteger(4.5))

// function revFunc(num){

//     // let newStr = parnum.toString().split('').reverse().join('')
//     // return newStr;
// let rev = 0;
// while(num>0){

//     rev = rev *10 + num%10 ;
//    num = Math.floor( num/10);
// }

// return rev

// }

// console.log(revFunc(123))

// function rangeFunc(start, end){

//     return    start+ Math.floor(  Math.random()*(end-start))
// }

// console.log(rangeFunc(5,50))

// const str = "JavaScript is awesome";

//      let newStr =     str.split(' ').map((val) => val.split('').reverse().join('')).join(' ')

//      console.log(newStr)

// function revWord(str){

//     let sentence = ''

//     for(let i = str.length-1; i>=0; i--){
//         sentence += str[i]
//     }

//     return sentence
// }

// const str = "JavaScript is awesome";

// console.log(revWord(str))

// function revWord(str) {
//   let reversed = '';
//   let word = '';
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if(char !== ' ') {
//       word = char + word ;
//     } else {
//       reversed += word + ' ';
//       word = '';
//     }
   
//   }
//   reversed += word;
//     return reversed;
// }

// const str = "JavaScript is awesome";

// console.log(revWord(str));


// function revWord(str) {
//     let reversed = '';
//     let word = '';
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if(char !== ' ') {
//         word = char + word ;
//       } else {
//         reversed = word + ' ' + reversed; // Prepend the word to the reversed string
//         word = '';
//       }
//     }
//     reversed = word + ' ' + reversed; // Add the last word to the reversed string
//     return reversed.trim(); // Remove any leading/trailing spaces
//   }
  
//   const str = "JavaScript is awesome"; //emosewa si tpircSavaJ
  
//   console.log(revWord(str));
  

// function reverseWords(str) {
//     return str.split(' ').reverse().join(' ');
// }

// const originalString = "JavaScript is awesome";
// const reversedString = reverseWords(originalString);
// console.log(reversedString);


// function revWord(str) {
//     let reversed = '';
//     let word = '';
//     for (let i = str.length-1; i >= 0; i--) {
//       let char = str[i];
//       if(char === ' ') {
      
//         reversed += word + ' '; // Prepend the word to the reversed string // 
//         word = '';
//       } else {
//         word = char + word ; ///  
//       }
//     }
//     reversed += word; // Add the last word to the reversed string
//     return reversed; // Remove any leading/trailing spaces
//   }
  
//   const str = "JavaScript is awesome"; //emosewa si tpircSavaJ
  
//   console.log(revWord(str));
  
// const str = "JavaScript is awesome";

// console.log(str.split(" ").join("_"))





// function calCulator(num1,num2){

//     function sum(){
//         return num1+num2
//     }

//     function diff(){
//         return num1 - num2
//     }

//     function multi(){
//         return num1*num2
//     }

//     function div(){
//         return Math.floor(num1/num2)
//     }


//     return {sum,diff,div,multi}
// }

   
//  const calc =  calCulator(12,5)

//   console.log( calc.sum())
//   console.log( calc.diff())
//  console.log( calc.div())
//  console.log( calc.multi())



 function countNum(){
var count = 0;

return {

    increment: function(val = 1){
        count += val;
    },
    retrieve: function(){
        return count;
    }
}
 }







// const counter = countNum()

// counter.increment()
//   counter.increment();
// console.log( counter.retrieve());             // 2
// counter.increment(5);
// counter.increment();
//   console.log( counter.retrieve());  


// function multiply(num1){
//     return function(num2){
//         return num1*num2
//     }
// }


// console.log(  multiply(2)(4));




// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//    {
//       bar: "hello"
//   };
// }


// console.log("foo1 returns:");
// console.log(foo1());
// console.log("foo2 returns:");
// console.log(foo2());

// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4);
// })();

// var d = {};

// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = undefined;
//     console.log(d[k])
// });


// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);

// console.log(arr1)
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); 5// j
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); 5 // jones
// console.log()



// console.log(1 +  "2" + "2"); //122
// console.log(1 +  +"2" + "2");//32
// console.log(1 +  -"1" + "2"); //2
// console.log(+"1" +  "1" + "2");//112
// console.log( "A" - "B" + "2");//NaN2
// console.log( "A" - "B" + 2);//NaN


// var list = readHugeList();

// var nextListItem = function() {
//     var item = list.pop();

//     if (item) {
//         // process the list item...
//         setTimeout( nextListItem, 0);
//     }
// };

// var list = readHugeList();


// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));

// console.log(0 && 2)

// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);


// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);


// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// var a = [1, 2, 3];
// a[10] = 99;

// console.log(a)

//  console.log( typeof undefined == typeof NULL)


// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;
//         var b = 3;
       
//         console.log(b)
//     }
//     inner();
// }
// outer();

// const name = 'rahul kumar'

// const res = [...new Set(name.split(''))];
// console.log(res)


// let arr = [23,45,56,32,54];



//      arr.forEach((element,index,arr) => {
//        return arr[index] = element * 2;
//      })
//     console.log(arr)



// const person = {

//     age:23,
//     name: 'Jitendra',

//     personInfo: function(){
//              return  this.age + ' ' + this.name
//     }
// }
//     console.log(person.personInfo())

// const user = null;

//           console.log(user?.name)


// function x(){

//     setTimeout(() =>{
// console.log(i)
//     },1000);
//     var i = 1;
// }
// x()


// for(var i = 1; i<=2; i++){
//     setTimeout(function(){ console.log(i)},1000);
// }


// for(var i = 1; i<=2; i++){
// (function(index){
//     setTimeout(function(){ console.log(index)},1000*i);

// })(i);

// }  

// let arr = ['a','b','c','e','f']

// let last = arr[0]

//  console.log(arr[arr.length-2])

// console.log( typeof (3 - "3"))

// console.log(num)
// var num;
// num =5


// function sum( a = 11, b =6){
// return a+b;

// }

// console.log(sum(null,20))
// // console.log(sum(undefined,20))
// const array = [1, 0, 0, 1, 1, 1];

//    const zeroCount =   array.join('').split('1').length-1
//    console.log(zeroCount)
// const array = [1, 0, 0, 1,1, 1, 1];
// const zeroCount = array.join('').split('0').length - 1;
// console.log(zeroCount); // Output: 2





// function facto(n){
//     if(n===0){
//         return 1
//     }
//     else{
//         return n* facto(n-1) // 5*4 = 20 // 20*3
//     }
// }

//  console.log(facto(5))



// function facto(n){

//     let fact = 1;
//     for(let i = 1 ; i<=n; i++){
//         fact= fact*i
//     }
//     return fact
// }

// console.log(facto(5))


// function printNUm(start, end){

//     if(start <= end){
//         console.log(start);
//         printNUm(start + 1, end);
//     }
// }

// console.log(printNUm(1,10))


// const arr = [10,23,46,32,54,98,2,34]


// let sum = 0;
// for(let i =0; i<arr.length; i++){

//     sum = sum+ arr[i]
// }

// let average = sum/arr.length
// console.log(average)


    //    const average = arr.reduce((cur,acc) =>   acc+cur, 0)/arr.length
    //    console.log(Math.floor(average))


// function arrEqual(arr1,arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     // return arr1.every((val,index) => val === arr2[index])


//     for(let i =0; i<arr1.length; i++){
//         if(arr1[i] !== arr2[i]){
//             return false;
//         }
//     }
//     return true;
// }





//     console.log(arrEqual([1,2,3],[1,2,3]))

// function sumDigit(num) {

//    let str=  num.toString().split('')

//           let sum =     str.reduce((acc,cur) => acc+ parseInt(cur), 0)
//    return sum
// }

// function sumDigit(n){
// let sum =0;
// while(n !==0){
//         let rem =   n%10

//         // sum = sum+ rem
                           
        
//         n = Math.floor(n/10)
// }
// return sum
// }


//  console.log( sumDigit(12345))

// function revFunc(n){

//     let rev = 0 ;
//     while(n!==0){
//         let rem = n%10 // 6,5,4

//        rev = rev*10+rem // 650 

//        n = Math.floor( n/10) // 
//     }
//     return rev;
// }



// console.log(revFunc(123456))




// function armFunc(num){
// let  n = num
//    let sum = 0
//    while(n !==0){

//     let rem = n%10;

//     sum = sum + Math.pow(rem,3)
//     // sum = sum + rem**3


//      n = Math.floor(n/10)
//    }
//    return sum == num
// }



// console.log(armFunc(153))

// function paliFunc(num){


//     let n = num // temp variable

//     let sum = 0;

//     while(n!==0){

//         let rem = n%10 // extract last digits
//      sum = sum*10+ rem // 

//      n = Math.floor(n/10)
//     }

//    if(sum ===num){
//     return ` Number is palindrome number`
//    }

//    else{
//     return ` Not palindrome number`
//    }
// }

//     console.log(paliFunc(123212))

// let msg = "hello";

// function cap(str){
//     let newStr = str.toUpperCase();
//    return newStr;
// }
//   console.log( cap((msg)))
//   console.log(cap('mymsg'))
// return   str.replaceAll(' ', ' 😱 ')
// function panic(str){

      
// let newStr = str.split(' ')
//     console.log(newStr)
//     let result = [];
//     for(let i = 0; i<newStr.length; i++){
//         if(newStr[i] === ''){
//             result.push('😱')
//         }
        
//         else {
//             result.push(newStr[i])
          
//         }
//     }
//     return result.join()
    
// }


// console.log(panic("I'm almost out of coffee"));


// function panic(str) {
//     let newStr = str.split('');
//     console.log(newStr)
//     let result = [];
//     for (let i = 0; i < newStr.length; i++) {
//         if (newStr[i] === ' ') {
//             result.push(' 😱 ');
//         } else {
//             result.push(newStr[i]);
//         }
//     }
//     return result.join('');
// }

// console.log(panic("I'm almost out of coffee"));


// function whisper(str){


//     let newStr =      'shh...'+ str.toLowerCase()
//     return newStr

// }




// console.log(whisper("PLEASE STOP SHOUTING."));