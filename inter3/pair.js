let arr = [2,1,3,6];


// check pair sum is 3
const pair = (arr,sum) => {

for(let i =0; i< arr.length;i++){
    for(j=i+1; j<arr.length; j++){

        if(arr[i]+ arr[j] ===sum){
            return true
        }
    }
}
return false
}


console.log(pair([1,2,3,6],3))