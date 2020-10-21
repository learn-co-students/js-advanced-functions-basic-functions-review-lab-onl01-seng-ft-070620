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

let actionApplyer = function(int, arr) {
  let a = int

  for (let instance of arr){
    a = instance(a)
  }
  return a
}