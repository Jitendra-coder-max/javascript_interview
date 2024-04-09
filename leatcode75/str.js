// var mergeAlternately = function(word1, word2) {
//     let merged = [];
// let len1 = word1.length;
// let len2 = word2.length;

// let maxLength = Math.max(len1,len2)


// for(let i = 0; i< maxLength; i++){
//     if(i<len1){
//         merged.push(word1[i])
//     }

//     if(i<len2){
//         merged.push(word2[i])
//     }

// }

// return merged.join('')
// };


//  console.log( mergeAlternately("abc","pqr"))

//  let mergeedi = mergeAlternately("abc","pqr")

//  console.log(mergeedi)




// function chunkArray(array, chunkSize) {
//     const chunkedArray = [];
    
//     for (let i = 0; i < array.length; i += chunkSize) {
//       chunkedArray.push(array.slice(i, i + chunkSize)); 
//     }
  
//     return chunkedArray;
//   }
  
//   // Example usage:
//   const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const chunkSize = 3;
//   const chunkedArray = chunkArray(originalArray, chunkSize);
//   console.log(chunkedArray);
  


// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
    
//   let k = 0; // Pointer for indicating the position to place non-val elements
  
//   // Iterate through the array
//   for (let i = 0; i < nums.length; i++) {
//       // If the current element is not equal to val, place it at position indicated by k
//       if (nums[i] !== val) {
//           nums[k] = nums[i];
//           k++;
//       }
//   }
  
//   return nums; // Return the count of non-val elements
// };

// let nums = [3, 2, 2, 3];
// let val = 3;

// let result = removeElement(nums, val);
// console.log(result)
// console.log(nums.slice(0, 2));



// var removeDuplicates = function(nums) {
//   let unique = []

//   for(let i =0; i<nums.length; i++){
//       if(unique.indexOf(nums[i]) == -1){
//           unique.push(nums[i])
//       }
//   }
//   return unique
// };


// let arr = [3,2,3];

// let occurance = {}

// for(let i =0; i<arr.length; i++){

//   occurance[arr[i]] = (occurance[arr[i]] || 0) +1
// }

// console.log(occurance)
// let max = 0;
// let maxCount 
// // let maxCount
// for(let key in occurance){
//   if(occurance[key]> max){
//     max = occurance[key]
//        maxCount = key
//   }
// }

// console.log(max)
// console.log(maxCount)



// function myFunc(nums,k){

//   let part1 =  nums.slice(0,nums.length-k) //
//   let part2 = nums.slice(nums.length-k,nums.length)
    
//          let final =      [...part2,...part1]
//          return final
// }


//  let nums = [1,2,3,4,5,6,7]
//  let k  = 3
// console.log(myFunc(nums,k))



//  function myFunc(prices) {
//   let profit = 0
//   let min = prices[0]
//   for(let i = 1; i < prices.length; i++){
//       // The day we should buy at
     
//       min = Math.min(min, prices[i-1]) //  3
//       // Check if selling at the current day gives us the most profit
      
//       profit = Math.max(prices[i]-min, profit) // 1 6-1
//   }
//   return profit
// };
// let prices = [7,5,3,6,4]
// console.log(myFunc(prices))
// // myFunc(prices)


// function myFunc(s){

//               let str = s.trim().split(' ')

//               for(let i = 0 ; i<str.length; i++){

//                 return     str[str.length-1].length
//               }
// }


// let s = "Hello World"

// console.log(myFunc(s))