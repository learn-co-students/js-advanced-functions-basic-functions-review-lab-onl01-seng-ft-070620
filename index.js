// Your code here
function saturdayFun(string="roller-skate") {
  return `This Saturday, I want to ${string}!`;
}

function mondayWork(string="go to the office"){
  return `This Monday, I will ${string}.`
}

function wrapAdjective(char='*'){
  return function(param1='special'){
    return `You are ${char}${param1}${char}!`
  }
}


const Calculator = {
  add: function(){
    return 1 + 3
  },
  subtract: function(){
    return 1 - 3
  },
  multiply: function(){
    return 1 * 3
  },
  divide: function(){
    return 10 / 5
  }
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}
