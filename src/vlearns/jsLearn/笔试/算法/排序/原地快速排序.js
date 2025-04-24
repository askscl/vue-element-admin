/* 
快排，不能用额外数组，只能在原地修改传进来的数组

原理：利用枢轴分区

难点：
    1.如何确定边界值？
        1.1.双指针确定边界值
        1.2.什么时候要等号？

思路：
    1.两次交换
        第一次交换：遍历：一旦发现不符合的元素，就调换位置
        第二次交换：将枢轴换到合适的位置，目的让小于的在左边，大于的在右边
    2.两次无限循环的终止条件
        2.1 left < right控制递归====================>特别注意，写的时候 就要考虑
        2.2 i <= j=================================》为啥要等号？
    3.靠j来找枢轴，不用i,是因为循环体来用来加1了，有可能超出索引

思考：
    1.为什么最后left和j交换而不是与i交换？
        1.代码试过得不到正确排序，为什么？
    2.边界值如何确定？
        2.1抖音上很多说while条件是i< j,即i==j时退出循环，很有可能是错的，因为只有动画演示，没有代码运行演示
        2.2为什么每次i都会比j大一位？
        2.3本质是双指针交叉问题产生的边界情况
    3.为啥要等号，没法理解
    4.时间复杂度是多少？
    5.空间复杂度是多少？

动画：有ppt动画演示

pivot：枢轴
partition: 分治

*/

function quickSort(arr, left = 0, right = arr.length - 1){
    if(arr == null || arr.length === 0) return;
    if(left < right){
        const pivotIndex = partition(arr, left, right);
        // console.log(arr);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    
}

//快排算法
//以left为基准，将数组分为两部分，小于基准的放在左边，大于基准的放在右边
function partition(arr, left, right){
    const pivotItem = arr[left];
    let i = left + 1;
    let j = right;
    while(i <= j){    //为啥要等号？--本质是双指针交叉问题产生的边界情况，这边i已经是left+1了，当i==j时，j--会与left值一样，进而保证升序的数字不被乱动
        if(arr[i] < pivotItem){
            i++
        }else if(arr[j] > pivotItem){ 
            j--
        }else{
            // console.log(`i:${i}, j:${j}`);
            // 当i找到数比枢轴大的时候（停下不动），j找到数比枢轴小的（停下不动），交换位置，让小于的都在左边，大于的都在右边
            [arr[i], arr[j]] = [arr[j], arr[i]]; //位置不是左小右大就交换，目的让小于的都在左边（连续），大于的都在右边（连续）,
            i++;
            j--;
        }
        
    }
    // console.log(`i:${i}, j:${j}`);
    // console.log(`left:${left}, j:${j}`);
    //为何最后还要交换一次?，把枢轴放中间，让左边连续小，右边连续大
    [arr[left], arr[j]] = [arr[j], arr[left]];

    // [arr[left], arr[i]] = [arr[i], arr[left]];//不能i指针来交换，i指针的交换效果导致，左不是连续小，右边不是连续大(现象逆推)

    return j;
}



// const arr = [9, 3, 2, 7, 1, 5, 8, 6, 4];
// const arr = [8, 7, 6, 5, 4, 2, 3, 1, 9];
// const arr = [5, 1, 2, 3, 4, 6, 7, 8, 9];
// const arr = [5, 1, 2, 3, 4, 6, 7, 8];
const arr = [5, 1, 2, 3, 4, 6, 7, 8, 9, 1, 5];
// const arr = [3,2,1];

quickSort(arr)
console.log(arr);