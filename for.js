// let arr = [1,2,3,4,5]
// let narr = [];

// for(let i = 0;i<arr.length; i++){
//     narr[i]=arr[i]*2
// }
// console.log(narr)
// console.log(arr)


let arr = [1,2,45,34,56,16,90,4,5,78]
let newArr = []

for(let i=0;i<arr.length;i++){
    if(arr[i]<50){
        newArr.push(arr[i])
    }
}

console.log(newArr)
console.log(arr)
