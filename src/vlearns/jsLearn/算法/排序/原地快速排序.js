/* 
快排，不能用额外数组，只能在原地修改传进来的数组

原理：利用枢轴分区，
思路：
1.两次交换
第一次交换：遍历：一旦发现不符合的元素，就调换位置
第二次交换：将枢轴换到合适的位置，目的让小于的在左边，大于的在右边
2.两次无限循环的终止条件
    2.1 left < right控制递归
    2.2 i <= j
*/

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    
}

//快排算法
function partition(arr, left, right){
    const pivotItem = arr[left];
    let i = left + 1;
    let j = right;
    while(i <= j){
        if(arr[i] < pivotItem){
            i++
        }else if(arr[j] >= pivotItem){
            j--
        }else{
            [arr[i], arr[j]] = [arr[j], arr[i]]; //位置不是左小右大就交换
            i++;
            j--;
        }
    }
    //为何最后还要交换一次?
    [arr[left], arr[j]] = [arr[j], arr[left]];//为何用j指针，因为j的元素>=pivotItem，包含了等于
    return j;
}

const arr = [9, 3, 2, 7, 1, 5, 8, 6, 4];
// const arr = [8, 7, 6, 5, 4, 2, 3, 1];
quickSort(arr)
console.log(arr);