/**
 * 打乱一个数组
 * 输入：[1, 2, 3, 4, 5];
 * 输出：[1, 5, 3, 2, 5];随机排列
 * 
 * 思路：
 * 1.从后往前遍历数组，将后面一位与前面的随机索引位置的数交换位置
 * 2.为啥要从后往前，因为这样可以便于写随机函数
 * 
 * 注意：
 * 1.Math.floor(Math.random()*n):生成的是0到n-1的数
 * 2.例：要生成0-4，取n为5
 * 3.起始索引为length-1
 * 4.结束索引为1
 * 5.边界条件因些为 i > 0
 */

const arr = [1, 2, 3, 4, 5];

function randomArr(arr){
    const newArr = [...arr];
    for(let i = newArr.length - 1; i > 0 ; i--){
        //此处生成的 0 到 i - 1的数
        const j = Math.floor(Math.random()*i);
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

console.log(randomArr(arr));


const arr2 = [];
for(let i = 0 ; i < 20; i++){
    arr2.push(Math.floor(Math.random()*5));
}
console.log(arr2);