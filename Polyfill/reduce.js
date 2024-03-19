// let nums = [1,2,3,4,5,6];

//  let mynum = nums.reduce((acc,cur) =>  acc+cur , 0)

// arr.reduce((acc,cur,i,arr) => {}, initialvalue)
//  console.log(mynum)


Array.prototype.myReduce = function ( cb, initialValue) {
    var accumulator = initialValue;

    for(let i =0;i< this.length; i++){
        accumulator = accumulator? cb(accumulator,this[i],i,this):this[i];
    }

    return accumulator;
}



let nums = [1,2,3,4,5,6];

 let mynum = nums.myReduce((acc,cur) =>  acc+cur , 0)

 console.log(mynum)