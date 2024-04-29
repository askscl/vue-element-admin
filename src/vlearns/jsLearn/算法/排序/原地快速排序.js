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
        2.1 left < right控制递归
        2.2 i <= j

思考：
    1.为什么最后left和j交换而不是与i交换？
        1.代码试过得不到正确排序，为什么？
    2.边界值如何确定？
    3.为啥要等号，没法理解



*/

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        const pivotIndex = partition(arr, left, right);
        // console.log(arr);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    
}

//快排算法
function partition(arr, left, right){
    const pivotItem = arr[left];
    let i = left + 1;
    let j = right;
    while(i <= j){    //为啥要等号？
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

    //为何最后还要交换一次?
    [arr[left], arr[j]] = [arr[j], arr[left]];

    // [arr[left], arr[i]] = [arr[i], arr[left]];//不能i指针来交换

    return j;
}



// const arr = [9, 3, 2, 7, 1, 5, 8, 6, 4];
// const arr = [8, 7, 6, 5, 4, 2, 3, 1, 9];
// const arr = [5, 1, 2, 3, 4, 6, 7, 8, 9];
const arr = [5, 1, 2, 3, 4, 6, 7, 8];
// const arr = [5, 1, 2, 3, 4, 6, 7, 8, 9, 1, 5];
quickSort(arr)
console.log(arr);