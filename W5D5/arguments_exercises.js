// function sum(...args) {
//   let currSum = 0;
//   args.forEach((arg) => {
//     currSum += arg;
//   });
//   return currSum;
// }

// console.log(sum(1,32,4));





Function.prototype.myBind = function (context, ...args) {
  // let args = Array.from(arguments).slice(1);
  let that = this;
  return function(...args2) {
    // let args2 = Array.from(arguments);
    return that.apply(context, args.concat(args2));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true
// //
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true


function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num){
    numbers.push(num);
    if (numbers.length === numArgs){
      let sum = 0;
      numbers.forEach((el) => sum+=el);
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}
// const sum1 = curriedSum(4);
// // console.log(sum1);
// console.log(sum1(5)(30)(20)(1)); // => 56




Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  function _curry(arg){
    args.push(arg);
    if (args.length === numArgs){

      return that.apply(that, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]

f1 = f1(20); // [Function]

f1 = f1(6); // = 30
console.log(f1);
// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
