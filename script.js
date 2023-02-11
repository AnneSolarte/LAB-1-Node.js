const random = require('number-random');
let num = random(31)
console.log(num)

const dayjs = require('dayjs')

let age = random(2000,2022);
let month = random(1,12);
let day = random(1,31);

let date = age + "-" + month + "-" + day

console.log(date);

console.log(dayjs(date).format('{YYYY} MM-DD THH:mm:ss SSS [Z] A'));


