// let nums = [1,2,3,4]

// const multyplyThree = nums.map((num,i,arr) => {
//     return num*3
// })

// console.log(multyplyThree)


Array.prototype.myMap = function (cb) {

    let temp = []
    for(let i = 0; i< this.length; i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}



let nums = [1,2,3,4]

const multyplyThree = nums.myMap((num,i,arr) => {
    return num*3
})

console.log(multyplyThree)