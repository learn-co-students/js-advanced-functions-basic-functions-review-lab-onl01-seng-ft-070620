// Your code here
function saturdayFun(verb = 'roller-skate')
{
    return `This Saturday, I want to ${verb}!`
}

function mondayWork(verb = 'go to the office')
{
    return `This Monday, I will ${verb}.`
}

function wrapAdjective(flair = '*')
{
    return function(adj = 'special')
    {
        return `You are ${flair + adj + flair}!`
    }
}

let Calculator = {
    add: function(a, b)
    {
        return a + b
    },

    subtract: function(a, b)
    {
        return a - b
    },

    multiply: function(a, b)
    {
        return a * b
    },

    divide: function(a, b)
    {
        return a / b
    }

}

function actionApplyer(int, actions)
{
    for(let action of actions)
    {
        int = action(int)
    }
    return int
}