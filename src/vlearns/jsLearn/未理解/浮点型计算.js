/* 
原因：
    1. js 中的浮点型计算，会存在误差
    2. 0.1 + 0.2 !== 0.3
    3. 0.1 + 0.2 = 0.300000000000000000000001
    4. 0.2 - 0.1 = 0.19999999999999999999999999
    5. 0.3 - 0.2 = 0.19999999999999999999999999
    6. 0.3在计算机存储是无限循环小数
    7. 0.2在计算机存储是无限循环小数
    8. 0.1在计算机存储是无限循环小数
*/

const one = 0.1;
const two = 0.2;
const three = 0.3;
console.log([two - one == one, three - two == one]);
console.log( one.toString(2) ); //转成2进制
console.log( two.toString(2) );
console.log( three.toString(2) );