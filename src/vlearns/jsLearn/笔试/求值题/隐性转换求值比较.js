/* 
原因：
    1. 隐性转换
    2. "9"的Ascall码是57，"10"的Ascall码是48
*/

var a = [9];
var b = [10];
console.log(a == 9);
console.log(b == 10);
console.log(a < b);

console.log( '9' < '10' );