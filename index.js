function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(para = "*") {
  return function(test = "special") {
    return `You are ${para}${test}${para}!`
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}

function actionApplyer(initial, array) {
  if (array.length === 0) {
    return initial;
  } else {
    return (initial * 2 + 1000) % 7;
  }
}