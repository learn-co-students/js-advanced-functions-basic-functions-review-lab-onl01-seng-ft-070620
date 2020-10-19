function wrapAdjective(flair = '*') {
    return function (str = 'special') {
        return `You are ${flair}${str}${flair}!`
    }
}

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

const Calculator = {
    add: (num1, num2) => {
        return num1 + num2
    },
    subtract: (num1, num2) => {
        return num1 - num2
    },
    multiply: (num1, num2) => {
        return num1*num2
    },
    divide: (num1, num2) => {
        return num1/num2
    }
}

function actionApplyer(int, fxns = []) {
    let prev = int
    let next
    if (fxns.length != 0) {
        for (const fxn of fxns) {
            next = fxn(prev)
            prev = next
        }
        return next
    } else {
        return int
    }
}