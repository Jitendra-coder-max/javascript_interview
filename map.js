let arr = [1,2,3,4,5]
let narr = [];

     narr = arr.map((value,i ,arr) => {
        return value*5+i
     })
     console.log(narr)