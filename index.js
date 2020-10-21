const Calculator = { 
  add: function(x, y) { return x + y }, 
  subtract: function(x, y) { return x - y },
  multiply: function(x, y) { return x * y },
  divide: function(x, y) { return x / y }
}

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
  return function(something="special") {
    return `You are ${flair}${something}${flair}!`
  }
}

// function actionApplyer(int, arr) {
//   if (!Array.isArray(arr) || !arr.length) {
//     return int;
//   }
//   else {
//     let x = int
    
//     for(let i = 0; i < arr.length; i++) {
//       x = arr[i](x)
//     }
//   }
//   return x
// }

let actionApplyer = function(int, arr) {
  let a = int

  for (let instance of arr){
    a = instance(a)
  }
  return a
}