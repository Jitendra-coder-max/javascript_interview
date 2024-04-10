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


function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

console.log( flatten([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]))
