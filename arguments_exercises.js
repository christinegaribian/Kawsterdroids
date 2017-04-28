function sum() {
  let args = Array.from(arguments);
  let currSum = 0;
  args.forEach((arg) => {
    currSum += arg;
  });
  return sum;
}

console.log(sum(1,32,4))
