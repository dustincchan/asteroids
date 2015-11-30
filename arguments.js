function mySum(){
  var args = [].slice.call(arguments);
  var sum1 = 0;
  args.forEach(function(num){
    sum1 += num;
  });
  return sum1;
}

// console.log(sum(1, 2, 3, 4, 5));

Function.prototype.myBind = function(ctx) {
  var args = [].slice.call(arguments, 1);
  var that = this;

  return function() {
    args = args.concat([].slice.call(arguments));
    return that.apply(ctx, args);
  };
};

function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      return mySum.apply(null, numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  var args = [];
  var that = this;
  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
var f1 = sumThree.curry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
