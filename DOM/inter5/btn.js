 
//  function selectBtn(){
//     document.getElementById('btn').innerHTML = 'clicked here'
//  }
 
 
 
 
 
//  let crossId =document.getElementById('cross');
//  crossId.addEventListener('click', selectBtn)



// function selectFunc(){
//     document.querySelector('.btn').innerHTML = 'clciked here'
// }

// // let crossId = document.querySelector('.cross')
//  let crossId = document.getElementsByClassName(' cross')[0]
// crossId.addEventListener('click', selectFunc)




function selectFunc(){
    document.querySelector('.cross').innerHTML = 'Y'
}

let crossId = document.querySelector('.btn')
crossId.addEventListener('click', selectFunc)