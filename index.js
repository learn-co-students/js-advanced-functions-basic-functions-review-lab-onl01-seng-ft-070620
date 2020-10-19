function saturdayFun(str='roller-skate') {
  return `This Saturday, I want to ${str}!`
}

function mondayWork(str="go to the office") {
  return `This Monday, I will ${str}.`
}

// example of using a closure
function wrapAdjective(char="*") {
  return function(adj) {
    return `You are ${char}${adj}${char}!`
  }
}

// defining an object that has functions defined within
const Calculator = {
  add: function(num1, num2) {return num1 + num2},
  subtract: function(x, y) {return x - y},
  multiply: function(a, b) {return a * b},
  divide: function(num1, num2) {return num1 / num2}
}

function actionApplyer(int, arr) {
  let counter = int

  if (arr.length === 0) {
    return int
  } else {
    for (let i = 0; i < arr.length; i++) {
      counter = arr[i](counter)
    }
  }

  return counter
}
