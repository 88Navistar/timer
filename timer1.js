const nums = [1000, 300, 500, 1500, 900];
const myFn = (delays) => {
  if (nums <= 0 || nums === '' || nums === []) {
    return;
  }
  for (const delay of delays) {
    setTimeout(() => {
      //console.log(delay);
      process.stdout.write('\x07')
    }, delay);
  }
};
myFn(nums); //delays
