
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
} // function defined, hoisted

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  } // function expression, not hoisted

function wrapAdjective(string='*') {
    return function(param='special') {
        return `You are ${string}${param}${string}!`
    }
}

let Calculator = {
    add: function(arg1,arg2) {
        return arg1 + arg2
    },
    subtract: function(arg1,arg2) {
        return arg1 - arg2
    },
    multiply: function(arg1,arg2) {
        return arg1 * arg2
    },
    divide: function(arg1,arg2) {
        return arg1 / arg2
    }
}

let actionApplyer = function(start_int, array_func){
    let upd_int = start_int
    for (let func of array_func) {
        upd_int = func(upd_int)
    }
    return upd_int
}