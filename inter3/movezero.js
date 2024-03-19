let nums = [8,5,4,67,0,34,0,56,0,34];

// move zero into last
         let temp = [];
         let count = 0
for(let i = 0 ;i <nums.length; i++){

if(nums[i] == 0){
    count++
}
else if (nums[i] !==0){
    temp.push(nums[i])
}
}


// for(let i =0; i<nums.length;i++)
// {
//     if(nums[i] !==0){
//         temp.push(nums[i])
//     }
// }

for(let i=0; i<count; i++){
    temp.push(0)
}
console.log(temp)

// let leftArr = nums.filter((num) => num !==0);
// let rightArr = nums.filter((num) => num ==0)

// console.log(leftArr);

// console.log(rightArr)

// let newArr = [...leftArr,...rightArr]

// console.log(newArr)