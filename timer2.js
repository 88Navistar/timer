const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf-8')

console.log('Simple Timer');
console.log('Press B for beep. 1-9 to set an alarm in respective seconds');

stdin.on('data', (key) => {
  return key === ('\u0062') ? process.stdout.write('\007')
    : key === '\u0031' && setTimeout(() => { process.stdout.write('\007')}, 1000) ? console.log('Setting alarm from 1 second')
    : key === '\u0032' && setTimeout(() => { process.stdout.write('\007')}, 2000) ? console.log('Setting alarm from 2 second')
    : key === '\u0033' && setTimeout(() => { process.stdout.write('\007')}, 3000) ? console.log('Setting alarm from 3 second')
    : key === '\u0034' && setTimeout(() => { process.stdout.write('\007')}, 4000) ? console.log('Setting alarm from 4 second')
    : key === '\u0035' && setTimeout(() => { process.stdout.write('\007')}, 5000) ? console.log('Setting alarm from 5 second')
    : key === '\u0036' && setTimeout(() => { process.stdout.write('\007')}, 6000) ? console.log('Setting alarm from 6 second')
    : key === '\u0037' && setTimeout(() => { process.stdout.write('\007')}, 7000) ? console.log('Setting alarm from 7 second')
    : key === '\u0038' && setTimeout(() => { process.stdout.write('\007')}, 8000) ? console.log('Setting alarm from 8 second')
    : key === '\u0038' && setTimeout(() => { process.stdout.write('\007')}, 9000) ? console.log('Setting alarm from 9 second')
    : key === ('\u0003') && console.log('Thanks for using me, ciao!') ? process.exit()
    : process.exit();
});