/* 
输入ab12c23d4，输出最大值23
*/
const str = 'ab12c23d4';
function findMaxNumber(str){
    // 1. 去除字母
    let numStr=str.replace(/[a-z]+/g, ',');
    console.log(numStr);
    // 2. 去除逗号
    if(numStr[0] === ','){
        numStr=numStr.replace(',', '');
    }
    console.log(numStr);
    // 3. 字符串转数组
    const arr = numStr.split(',');
    console.log(arr);
    // 4. 找最大值
    /* let max = 0;
    arr.forEach(item =>{
        max = Math.max(max, item);
    }); */
    let max = Math.max(...arr);
    console.log(max);
    return max;

}

findMaxNumber(str);
