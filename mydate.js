// function myFunction(a, b){

// return a.getDate()== b.getDate();

// }
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));


// function myFunction(a, b) {
//     // Convert both dates to milliseconds
//     const date1Ms = a.getTime();
//     const date2Ms = b.getTime();

//     // Calculate the difference in milliseconds
//     const differenceMs = Math.abs(date1Ms - date2Ms);

//     // Convert the difference to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
//     const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

//     return differenceDays;
// }


// function myFunction(a, b) {
//     const dif = Math.abs(a - b);
//     return dif / (1000*60*60*24)
//  }

// console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01')))


// function myFunction(a, b)
// {

// return a.getDate() === b.getDate() && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
// }

// console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/01')))


// function addDaysAndGetMilliseconds(date, daysToAdd) {
//     // Get the number of milliseconds since January 1, 1970, 00:00:00 UTC
//     const millisecondsSinceEpoch = date.getTime();

//     // Calculate the number of milliseconds to add for the given number of days
//     const millisecondsToAdd = daysToAdd * 24 * 60 * 60 * 1000;

//     // Add the milliseconds to the original date
//     const newMilliseconds = millisecondsSinceEpoch + millisecondsToAdd;

//     return newMilliseconds;
// }



// const date = new Date('2024-03-04');
// const daysToAdd = 5;
// const resultMilliseconds = addDaysAndGetMilliseconds(date, daysToAdd);
// console.log(resultMilliseconds);



// function timeDifference(date1, date2) {
//     // Calculate the absolute difference in milliseconds

//     let dobj = { }
//     const differenceMs = Math.abs(date1 - date2);

//     // Convert milliseconds to hours, minutes, and seconds
//     const hours = Math.floor(differenceMs / (1000 * 60 * 60));
//     const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);
 
//         dobj.hrs = hours;
//         dobj.minutes = minutes;
//         dobj.seconds = seconds;
//     // Return an object with the time difference properties
//     return dobj
//     // return {
//     //     hrs: hours,
//     //     min: minutes,
//     //     sec: seconds
//     // };
// }

// const date1 = new Date('2024-03-04T12:00:00');
// const date2 = new Date('2024-03-04T09:30:15');
// console.log(timeDifference(date1, date2));


function
myFunction(set)
{

return [...set]
}

console.log(myFunction(new Set([1, 2, 3])))