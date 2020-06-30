let args = process.argv.slice(2)

const myFn = (delays) => {

  if (args <= 0 || args === '' || args === []) {
    return;
  }
  for (let delay of delays) {
    setTimeout(() => {
       process.stdout.write('\x07')
    }, 1000 * delay);
  }
};
myFn(args); //delays
