// let nums = [23,45,67,89,34,36,76,54,32]


//  let numArr = nums.filter((num) => num%2==0);
//  console.log(numArr)



Array.prototype.myFilter = function (cb) {
    let temp = [] 

    for(let i = 0; i< this.length; i++){
        if(cb(this[i],i,this)){
            temp.push(this[i])
        }
    }
    return temp;
}




let nums = [23,45,67,89,34,36,76,54,32]


 let numArr = nums.myFilter((num) => num%2==0);
 console.log(numArr)