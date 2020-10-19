function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function(word="*") {
    return function(adj="special") {
        return `You are ${word}${adj}${word}!`;
    }
}

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b;
    },
    multiply: function(a,b) {
      return a * b;
    },
    divide: function(a,b) {
      return a / b;
    }
}

const actionApplyer = function(int, arr) {
    let a = int;
    for (let i=0; i<arr.length; i++) {
        a = arr[i](a);
    }
    return a;
}