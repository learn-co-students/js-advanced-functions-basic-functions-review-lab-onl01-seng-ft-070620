// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = "*") {
    return function (adjective = "special") {
        return `You are ${symbol+adjective+symbol}!`
    }
}

const Calculator = {
    add: () => {return 1+3},
    subtract: () => {return 1-3},
    multiply: () => {return 1*3},
    divide: () => {return 10/5}
}

function actionApplyer (int, arr) {
    if (arr.length > 0) {
        return arr.reduce(function(current, f) {
            return f(current)
        }, int)
    } else {
        return int
    }
}