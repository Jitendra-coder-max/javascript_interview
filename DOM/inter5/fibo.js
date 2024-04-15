// let str = "The KITTENS are SLEEPING!"

// // console.log('ssh ...' +str.toLowerCase())
// console.log(str.slice(0,-1))

// let str = 'hello my name is jittu nishad';

// let newStr = ''

// for(let i =0; i<str.length; i++){
//     if(i%2 !== 0){
//         newStr += str[i].toUpperCase()
//     }
//     else{
//         newStr += str[i]
//     }
// }

// console.log(newStr)


// function func(str){

//   let newStr =   str[0].toUpperCase()+ str.slice(1)
// return newStr
// }




// console.log(func("scrimba"))




// let str = ['apple','banana', 'bapaya']

//   let newStr =str.map((word) => word[0].toUpperCase() + word.slice(1))
//   console.log(newStr)

// let str = ['apple','banana', 'bapaya']

//   let newStr =str.map((word) => word.split('').reverse().join(''))
//   console.log(newStr)



// function fb(){

//     for(let i =1; i<=100; i++){

//         if(i%3 === 0 && i%5 ===0){
//             console.log('jackpot')
//         }

//         else if( i%3 === 0){
//             console.log('fizz')
//         }

//         else if(i%5 === 0){
//             console.log('buzz')
//         }

//         else{
//             console.log('invaid')
//         }

//     }

// }


// fb()



// function Mystr(str1,str2){


//        return str1.sort() 

// }

// let str1 = 'Hello bro'
// let str2 = 'heoll'

 

// console.log(Mystr(str1,str2))


// function flatten(ary) {
//     var res = [];
//     for(var i = 0; i < ary.length; i++) {
//         if(Array.isArray(ary[i])) {
//             res = res.concat(flatten(ary[i]));
//         } else {
//             res.push(ary[i]);
//         }
//     }
//     return res;
// }

// console.log( flatten([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]))










// function flatten(arr){

// let res = []

// for(let i =0; i<arr.length; i++){
//     if(Array.isArray(arr[i])){

//         res = res.concat(flatten(arr[i]))
//     }
//     else{

//         res.push(arr[i])
//     }
// }
// return res;
// }






// console.log( flatten([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]))


// let arr = [1,2,3,4,5,6]
// let sum = 0;

//      arr.forEach((val) =>  sum+=val)

//      console.log(sum)



// const gameNightFood = {
//     "🍕 pizza": 3, 
//     "🌮 tacos": 10, 
//     "🥗 salads": 7,
//     "🍝 pasta": 5
// }

// function findTheWinner(obj){

//      let highestVotes = 0;

//      let winningItem = '';

//      for(let food in obj){    // food is key

//         if(obj[food] > highestVotes){ /// obj[food is value]
//             highestVotes = obj[food];
//             winningItem = food;
//         }
//      }

//     //  return { winningItem,highestVotes}
//     return `The winner is ${winningItem} with ${highestVotes}`


// }

// console.log(findTheWinner(gameNightFood));



// let person = {
//     Name: "Jitendra",
//     Age: 25,
//     add: 'Amrai parisar 1555'
// }

// for(let  key in person){

//     console.log(` key is ${key} and value is ${person[key]}`)
// }






// const userData =  [
//     {
//        "name":{
//           "title":"Mr",
//           "first":"Levent",
//           "last":"Busser"
//        },
//        "dob":{
//           "date":"1971-08-21T01:08:00.099Z",
//           "age":51
//        }
//     },
//     {
//        "name":{
//           "title":"Mr",
//           "first":"Kornelius",
//           "last":"Hamnes"
//        },
//        "dob":{
//           "date":"1961-09-23T13:13:49.283Z",
//           "age":61
//        }
//     },
//     {
//        "name":{
//           "title":"Mademoiselle",
//           "first":"Ute",
//           "last":"Henry"
//        },
//        "dob":{
//           "date":"1956-06-30T11:33:42.549Z",
//           "age":66
//        }
//     },
//     {
//        "name":{
//           "title":"Mr",
//           "first":"Estéfano",
//           "last":"Monteiro"
//        },
//        "dob":{
//           "date":"1945-07-16T19:48:22.796Z",
//           "age":77
//        }
//     },
//     {
//        "name":{
//           "title":"Mr",
//           "first":"Oğuzhan",
//           "last":"Beşerler"
//        },
//        "dob":{
//           "date":"1947-09-28T10:12:30.102Z",
//           "age":75
//        }
//     },
//     {
//        "name":{
//           "title":"Mrs",
//           "first":"Susanna",
//           "last":"Burke"
//        },
//        "dob":{
//           "date":"1961-06-13T21:41:24.455Z",
//           "age":61
//        }
//     },
//     {
//        "name":{
//           "title":"Mrs",
//           "first":"Haritya",
//           "last":"Starickiy"
//        },
//        "dob":{
//           "date":"1945-12-14T21:29:22.822Z",
//           "age":76
//        }
//     },
//     {
//        "name":{
//           "title":"Miss",
//           "first":"Nadja",
//           "last":"Branković"
//        },
//        "dob":{
//           "date":"1993-05-24T11:22:50.967Z",
//           "age":29
//        }
//     },
//     {
//        "name":{
//           "title":"Ms",
//           "first":"Sonja",
//           "last":"Lenzen"
//        },
//        "dob":{
//           "date":"1945-03-21T04:33:04.759Z",
//           "age":77
//        }
//     },
//     {
//        "name":{
//           "title":"Ms",
//           "first":"Shubhangi",
//           "last":"Chatterjee"
//        },
//        "dob":{
//           "date":"1956-12-25T18:50:29.484Z",
//           "age":65
//        }
//     }
//  ]






//   const newUserData = userData.map((user) => {

//     const full = `${user.name.first}  ${user.name.last}`;

//     const formattedDate = new Date(user.dob.date).toDateString()
          
//             //  let day =       formattedDate.getDay()
//             //  let month = formattedDate.getMonth()
//             //  let year = formattedDate.getFullYear()
//     return {
//         fullName: full,
//         // birthday: `${day}/${month}/${year}`
//         birthday: formattedDate
//     }
    
//  })

//  console.log(newUserData)


// const podcasts = [
//     {
//         id: 1,
//         title: "Scrimba Podcast", 
//         duration: 50, 
//         tags: ["education", "jobs", "technology"], 
//         hosts: ["Alex Booker"], 
//         rating: 10,
//         genre: "education",
//         paid: false
//     },
//     {
//         id: 2,
//         title: "Crime Fan", 
//         duration: 150, 
//         tags: ["crime", "entertainment", "mature"], 
//         hosts: ["Bob Smith", "Camilla Lambert"], 
//         genre: "true crime",
//         rating: 5, 
//         paid: true
//     },
//     {
//         id: 3,
//         title: "Mythical Creatures", 
//         duration: 99, 
//         tags: ["entertainment", "general", "unicorns"], 
//         hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
//         genre: "fantasy",
//         rating: 8,
//         paid: true
//     },
//     {
//         title: "Crime Crime Crime", 
//         duration: 70, 
//         tags: ["crime", "entertainment", "mature"], 
//         hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
//         genre: "true crime",
//         rating: 6, 
//         paid: true
//     },
//     {
//         title: "Something about Witches", 
//         duration: 35, 
//         tags: ["fantasy", "entertainment"], 
//         hosts: ["Frewin Wyrm", "Evanora Highmore"], 
//         genre: "fantasy",
//         rating: 8,
//         paid: false
//     },
//     {
//         title: "Coding Corner", 
//         duration: 55, 
//         tags: ["education", "jobs", "technology"], 
//         hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
//         genre: "education",
//         rating: 9,
//         paid: false
//     },
// ]







// function getFreePodcasts(podcasts){

// let filteredArr =  podcasts.filter((podcast) => podcast.paid === false).map((data) => {
//     // return ` title: ${data.title}  rating: ${data.rating}   paid:${data.paid}`

//     return {
//         title:data.title,
//         rating: data.rating,
//         paid: data.paid

//     }
// })

// return filteredArr
   


// }

// console.log(getFreePodcasts(podcasts))



// const candies =  [
//     {
//         item: "🍭",
//         price: 2.99,
//         type: "sweet",
//     },
//     {
//         item: "🍫",
//         price: 1.99, 
//         type: "sweet",
//     },
//     {
//         item: "🥫",
//         price: 1.99, 
//         type: "savory",
//     },
//     {
//         item: "🍬",
//         price: .89, 
//         type: "sweet",
//     },
//     {
//         item: "🥦",
//         price: 3.99,
//         type: "savory",
//     }, 
//     {
//         item: "🍖",
//         price: 3.99, 
//         type: "savory",
//     }, 
// ]

// function candiFunc(candies){

//   const shoppingCart =   candies.filter((candy) => candy.type === 'sweet').map((data) => {
//     return{
//         item:data.item,
//         price:data.price
//     }
//   })
//   return shoppingCart;
// }



// console.log(candiFunc(candies))



// const shoppingCart = [
//     {
//         item: "🍭",
//         price: 2.99,
//         type: "sweet",
//         onSale: true
//     },
//     {
//         item: "🍫",
//         price: 1.99, 
//         type: "sweet",
//         onSale: true
//     },
//     {
//         item: "🥫",
//         price: 1.99, 
//         type: "savory",
//         onSale: false
//     },
//     {
//         item: "🍬",
//         price: .89, 
//         type: "sweet",
//         onSale: false
//     },
//     {
//         item: "🥦",
//         price: 3.99,
//         type: "savory",
//         onSale: false
//     }, 
//     {
//         item: "🍖",
//         price: 3.99, 
//         type: "savory",
//         onSale: true
//     }, 
// ]




// function total(arr){

//                   let totalSum =    arr.reduce((acc,cur) => acc + cur.price , 0)
//                     return totalSum.toFixed(2)
// }

// console.log(total(shoppingCart));


// const shoppingCart =  [
//     {
//         item: "🍭",
//         price: 2.99,
//         type: "sweet",
//         onSale: true
//     },
//     {
//         item: "🍫",
//         price: 1.99, 
//         type: "sweet",
//         onSale: true
//     },
//     {
//         item: "🥫",
//         price: 1.99, 
//         type: "savory",
//         onSale: false
//     },
//     {
//         item: "🍬",
//         price: .89, 
//         type: "sweet",
//         onSale: false
//     },
//     {
//         item: "🥦",
//         price: 3.99,
//         type: "savory",
//         onSale: false
//     }, 
//     {
//         item: "🍖",
//         price: 3.99, 
//         type: "savory",
//         onSale: true
//     }, 
// ]



// function totalSavory(arr){

// //    const  saveryTotal = arr.filter((savory) =>  savory.type ==='savory').reduce((acc,cur) => acc+cur.price,0) with filter


// // without filter 

//   const saveryTotal = arr.reduce((acc,cur) => {
//     if(cur.type ==='savory') return  acc += cur.price
//     return acc
// },0)

         
//     return saveryTotal;
// }


// console.log(totalSavory(shoppingCart))


// const products =[
//     {
//         product: "🍭",
//         price: 2.99,
//     },
//     {
//         product: "🍫",
//         price: .99, 
//     },
//     {
//         product: "🏡",
//         price: 40000000
//     },
//     {
//         product: "🧁",
//         price: .99, 
//     },
//     {
//         product: "📚",
//         price: .99, 
//     },
//     {
//         product: "⏰",
//         price: 13.99, 
//     }, 
//     {
//         product: "🍬",
//         price: .89, 
//     },
//     {
//         product: "🥎",
//         price: 3.99,
//     }, 
//     {
//         product: "🎸",
//         price: 13.99, 
//     }, 
//     {
//         product: "🎨",
//         price: 23.99, 
//     }, 
//     {
//         product: "💕",
//         price: 0, 
//     }, 
// ]





// function sortProducts(data){


// //  products.sort((a,b) =>  a.price - b.price).map((data) => console.log(data.product,data.price))
// products.sort((a,b) =>  a.price - b.price).map((data) => {data.product, data.price})
// return products
    
// }

// const listByCheapest = sortProducts(products);
// console.log(listByCheapest);


// const mediaData = [
//     {
//         id: 1,
//         title: "Stranger Scrims", 
//         duration: 40, 
//         tags: ["supernatural", "horror", "drama"], 
//     },
//     {
//         id: 2,
//         title: "The Scrim of the Dragon", 
//         duration: 60, 
//         tags: ["drama", "fantasy"], 
//     },
//     {
//         id: 3,
//         title: "Scrim Hunters", 
//         duration: 22, 
//         tags: ["reality", "home improvement"], 
//     },
//     {
//         id: 4,
//         title: "This Old Scrim", 
//         duration: 30, 
//         tags: ["reality", "home improvement"], 
//     },
//     {
//         id: 5,
//         title: "What We Do in the Scrim", 
//         duration: 55, 
//         tags: ["drama", "comedy", "supernatural"], 
//     },
//     {
//         id: 6,
//         title: "The Scrimdalorian", 
//         duration: 58, 
//         tags: ["fantasy", "sci-fi", "adventure"], 
//     },
// ]





// function getUniqueTags(data){
 
//      const tag = data.map((podcast) => podcast.tags)
//      return [ ...new Set( tag.flat())]
// }

// console.log(getUniqueTags(mediaData));

// const podcasts = [
//     {
//         id: 1,
//         title: "Scrimba Podcast", 
//         duration: 50, 
//         tags: ["education", "jobs", "technology"], 
//         hosts: ["Alex Booker"], 
//         rating: 10,
//         genre: "education",
//         paid: false
//     },
//     {
//         id: 2,
//         title: "Crime Fan", 
//         duration: 150, 
//         tags: ["crime", "entertainment", "mature"], 
//         hosts: ["Bob Smith", "Camilla Lambert"], 
//         genre: "true crime",
//         rating: 5, 
//         paid: true
//     },
//     {
//         id: 3,
//         title: "Mythical Creatures", 
//         duration: 99, 
//         tags: ["entertainment", "general", "unicorns"], 
//         hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
//         genre: "fantasy",
//         rating: 8,
//         paid: true
//     },
//     {
//         title: "Crime Crime Crime", 
//         duration: 70, 
//         tags: ["crime", "entertainment", "mature"], 
//         hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
//         genre: "true crime",
//         rating: 6, 
//         paid: true
//     },
//     {
//         title: "Something about Witches", 
//         duration: 35, 
//         tags: ["fantasy", "entertainment"], 
//         hosts: ["Frewin Wyrm", "Evanora Highmore"], 
//         genre: "fantasy",
//         rating: 8,
//         paid: false
//     },
//     {
//         title: "Coding Corner", 
//         duration: 55, 
//         tags: ["education", "jobs", "technology"], 
//         hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
//         genre: "education",
//         rating: 9,
//         paid: false
//     },
// ]




// function sortByDuration(data, flightLength){
//   if(flightLength >60){

//     data.sort((a,b) => b.duration - a.duration)
//     // console.log(data)
//   }
//   else {
//     data.sort((a,b) => a.duration - b.duration)
//     // console.log(data)

//   }

//  let newPodcast = data.forEach((val,index) => console.log( `${index+1}.  ${val.title}, ${val.duration} minutes`))

// }

// sortByDuration(podcasts, 60);


// const postData = [
//     {
//        post: "A lot of you have asked about my morning skin care routine...",
//        likes: 348
//     },
//     {
//        post: "New Year, new me. #blessed",
//        likes: 102
//     },
//     {
//        post: "Sunday by the pool 🌴 #vibes #mood #hotdoglegs",
//        likes: 544
//     },
//     {
//        post: "Here are my top 5 #notsponsored unbiased dry shampoo recs...",
//        likes: 745
//     },
//     {
//        post: "Last day in Hawaii! The tans will fade but the memories will last forever #holidays #foreverhawaii #blessed #followme",
//        likes: 412
//     },
//     {
//        post: "Leg day #summerbody2022 #gymshark #beachworkout",
//        likes: 275
//     },
// ]
  





// function calcAverageLikes(data){
  

//    let total = data.reduce((acc,cur) => acc+ cur.likes,0)
//    let average = total/data.length;
//    return Math.floor(average);
// } 


// console.log(calcAverageLikes(postData))


// const podcasts = [
//     {
//         id: 1,
//         title: "Scrimba Podcast", 
//         duration: 50, 
//         tags: ["education", "jobs", "technology"], 
//         hosts: ["Alex Booker"], 
//         rating: 10,
//         genre: "education",
//         paid: false
//     },
//     {
//         id: 2,
//         title: "Crime Fan", 
//         duration: 150, 
//         tags: ["crime", "entertainment", "mature"], 
//         hosts: ["Bob Smith", "Camilla Lambert"], 
//         genre: "true crime",
//         rating: 5, 
//         paid: true
//     },
//     {
//         id: 3,
//         title: "Mythical Creatures", 
//         duration: 99, 
//         tags: ["entertainment", "general", "unicorns"], 
//         hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
//         genre: "fantasy",
//         rating: 8,
//         paid: true
//     },
//     {
//         title: "Crime Crime Crime", 
//         duration: 70, 
//         tags: ["crime", "entertainment", "mature"], 
//         hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
//         genre: "true crime",
//         rating: 6, 
//         paid: true
//     },
//     {
//         title: "Something about Witches", 
//         duration: 35, 
//         tags: ["fantasy", "entertainment"], 
//         hosts: ["Frewin Wyrm", "Evanora Highmore"], 
//         genre: "fantasy",
//         rating: 8,
//         paid: false
//     },
//     {
//         title: "Coding Corner", 
//         duration: 55, 
//         tags: ["education", "jobs", "technology"], 
//         hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
//         genre: "education",
//         rating: 9,
//         paid: false
//     },
// ]






// const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

// function getHosts(data){
   
// //    let hostlist =  data.map((podcast) => podcast.hosts).flat(); with map
// //    return hostlist;

//    return data.reduce((acc,cur) =>  { 
//      return acc.concat(cur.hosts)
//     // return [...acc,...cur.hosts] 
//     }, [])
 
  
// }

// function assignAwards(data){
//    const hosts =  getHosts(data);

//     return hosts.map(host => {

//  const randIndex = Math.floor(Math.random() * awards.length);
// //  console.log(randIndex)
//          return `${awards[randIndex]} ${host}`
//    })
 
// }


// console.log(getHosts(podcasts));
// console.log(assignAwards(podcasts));



// const podcasts = [
//     {
//         id: 1,
//         title: "Scrimba Podcast", 
//         duration: 50, 
//         tags: ["education", "jobs", "technology"], 
//         hosts: ["Alex Booker"], 
//         rating: 10,
//         genre: "education",
//         paid: false
//     },
//     {
//         id: 2,
//         title: "Crime Fan", 
//         duration: 150, 
//         tags: ["crime", "entertainment", "mature"], 
//         hosts: ["Bob Smith", "Camilla Lambert"], 
//         genre: "true crime",
//         rating: 5, 
//         paid: true
//     },
//     {
//         id: 3,
//         title: "Mythical Creatures", 
//         duration: 99, 
//         tags: ["entertainment", "general", "unicorns"], 
//         hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
//         genre: "fantasy",
//         rating: 8,
//         paid: true
//     },
//     {   
//         id: 4,
//         title: "Crime Crime Crime", 
//         duration: 70, 
//         tags: ["crime", "entertainment", "mature"], 
//         hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
//         genre: "true crime",
//         rating: 6, 
//         paid: true
//     },
//     {
//         id: 5,
//         title: "Something about Witches", 
//         duration: 35, 
//         tags: ["fantasy", "entertainment"], 
//         hosts: ["Frewin Wyrm", "Evanora Highmore"], 
//         genre: "fantasy",
//         rating: 8,
//         paid: false
//     },
//     {
//         id: 6,
//         title: "Coding Corner", 
//         duration: 55, 
//         tags: ["education", "jobs", "technology"], 
//         hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
//         genre: "education",
//         rating: 9,
//         paid: false
//     },
// ]





// function createDescriptionsFor(data){
   
// }

// console.log(createDescriptionsFor(podcasts))

//  const podcasts = [
//     {
//         id: 1,
//         title: "Scrimba Podcast", 
//         duration: 50, 
//         tags: ["education", "jobs", "technology"], 
//         hosts: ["Alex Booker"], 
//         rating: 10,
//         genre: "education",
//         paid: false
//     },
//     {
//         id: 2,
//         title: "Crime Fan", 
//         duration: 150, 
//         tags: ["crime", "entertainment", "mature"], 
//         hosts: ["Bob Smith", "Camilla Lambert"], 
//         genre: "true crime",
//         rating: 5, 
//         paid: true
//     },
//     {
//         id: 3,
//         title: "Mythical Creatures", 
//         duration: 99, 
//         tags: ["entertainment", "general", "unicorns"], 
//         hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
//         genre: "fantasy",
//         rating: 8,
//         paid: true
//     },
//     {   
//         id: 4,
//         title: "Crime Crime Crime", 
//         duration: 70, 
//         tags: ["crime", "entertainment", "mature"], 
//         hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
//         genre: "true crime",
//         rating: 6, 
//         paid: true
//     },
//     {
//         id: 5,
//         title: "Something about Witches", 
//         duration: 35, 
//         tags: ["fantasy", "entertainment"], 
//         hosts: ["Frewin Wyrm", "Evanora Highmore"], 
//         genre: "fantasy",
//         rating: 8,
//         paid: false
//     },
//     {
//         id: 6,
//         title: "Coding Corner", 
//         duration: 55, 
//         tags: ["education", "jobs", "technology"], 
//         hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
//         genre: "education",
//         rating: 9,
//         paid: false
//     },
// ]



// function createDescriptionsFor(data){
//     // map through the data
//     return data.map(podcast => {
//         // use title, duration, genre and host data to make description
//         return {
//             ...podcast,
//             description: `${podcast.title} is a ${podcast.duration} minutes ${podcast.genre} podcast hosted by ${podcast.hosts[0]}`
//         };
//     })
//         // for each podcast object, add description prop
        
// }

// console.log(createDescriptionsFor(podcasts))




// const anagrams = [
//     "moz biblical torchbearers",  
//     "it's razorbill beachcomber", 
//     "och mcrobbie trailblazers", 
//     "bib chorizo cellarmaster", 
//     "thor scribble carbimazole", 
//     "zilla borscht abercrombie", 
//     "brazil scorcher batmobile", 
//     "dame shelburne characterizing", 
//     "uber englishman characterized", 
//     "agnes rhumbline characterized", 
//     "rehab scrutinized charlemagne", 
//     "dreams zurich interchangeable", 
//     "bam hamster technocratic", 
//     "mechatronic masterbatch", 
//     "bam ratchet mechatronics"
// ]

// function isAnagramInArray(anagram, arr){
  
//      anagram.toLowerCase().split('').sort(),join('').trim()
// }

// console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));



// const url = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';
// const flowerBed = document.querySelector('.emoji-flower-bed');

// function clearTheGarden(arr){
//     // filter by group property - "animal bug" && "plant flower"
//     return arr.filter(emoji => emoji.group === "animal bug" || emoji.group === "plant flower");
// }


// fetch(url) 
//     .then(response => response.json())
//     .then(result => clearTheGarden(result) )
//     .then((data) => {
//         data.forEach(emoji => {
//             flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
//         });    
//     })
//     .catch(err => console.log(err));


const slotMachine = document.querySelector('.emoji-slots-game'); 
const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';

function makeFruitArray(arr){
   // filter by group prop, looking for a str that includes the word "fruit"
   return arr.filter(emoji => emoji.group.includes("fruit"));
}

function getRandomFruits(arr){
    // initialize a new arr to hold 9 random fruits
    const randomFruits = [];
    // create a loop 0 - 9
    for(let i = 0; i < 9; i++){
        // generate a random num
        // use the random number as an index to choose a random fruit from the fruit arr
        // push the random fruit into new arr 
        let randNum = Math.floor(Math.random() * arr.length);
        randomFruits.push(arr[randNum]);
    }
    console.log(randomFruits.length)
    return randomFruits
}

// write your fetch request here 
fetch(food)
    .then(response => response.json())
    .then(result => makeFruitArray(result))
    .then(fruits => getRandomFruits(fruits))
    .then(fruit => {
        fruit.forEach(fruit => {
            slotMachine.innerHTML += `
                <li>
                    ${fruit.htmlCode}
                </li>
            `
        })
    })
    .catch(err => console.log(err))