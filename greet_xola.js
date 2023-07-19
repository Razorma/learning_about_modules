// import greet from './greet.js'
// console.log(greet('Xola'))


import chalk from 'chalk';

import figlet from 'figlet';

import greet from './greet.js'

const myMessage = figlet.textSync(greet('Xola'));
const styledMessage = chalk.bgRed.black(myMessage);
console.log(styledMessage)