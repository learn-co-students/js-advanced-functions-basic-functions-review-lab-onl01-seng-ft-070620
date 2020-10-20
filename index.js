// pry = require('pryjs')

// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*") {
    return function(adj = "special") {
        return `You are ${string}${adj}${string}!`
    }
}

const Calculator = {
    add: function() {
        return 1 + 3
    },
    subtract: function() {
        return 1 - 3
    },
    multiply: function() {
        return 1 * 3
    },
    divide: function() {
        return 10 / 5
    }
}

function actionApplyer(int, array) {
    let answer = int
    for (let i = 0; i < array.length; i++) {
        answer = array[i](answer)
    }
    return answer
}

arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

actionApplyer(13, arrayOfTransforms)