/* 
数字格式化问题:1234567890-->1,234,567,890
1 234  567  890
0 123  456  789

思路：
从后往前遍历，每次遍历三位，双指针，一个记录索引，一个记录截取次数
1.通过总长度/3，向上取整，得要要遍历的次数
2.当达到最后一次时，因为有可能只有一个，所以通过计算得到最后一次剩下的个数，作为最后一次截取的索引
3.以头插入方式收集进数组unshift
4.以join转换数组

toString toString toString toString toString
ceil ceil ceil ceil ceil ceil
floor floor floor floor floor
slice slice slice slice slice(【包含】起始索引，【不包含】末索引)--产生新数组
unshift unshift unshift unshift unshift
join join join join join
*/

function numberFormat(num){
    const numStr = num.toString();
    const len = numStr.length;
    const times = Math.ceil(len/3);
    const arr = [];

    for(let i = len - 3, j = 0; j<times; i = i - 3, j++){
        if(j <times - 1){
            
            arr.unshift(numStr.slice(i, i+3));
        }else{
            //==times
            const endIndex = len - 3*j;
            arr.unshift(numStr.slice(0, endIndex))
        }
        // console.log(arr);
    }
    return arr.join(',')   

}
console.log(numberFormat(1234567890));
// console.log(numberFormat(90));
// console.log(numberFormat(7890));



/* const i = num%1000;
    console.log(i)
    if(i != 0){
        arr.unshift(i);
    } */
// const num = '1234567890';
// num.slice(6);
// console.log(num)
