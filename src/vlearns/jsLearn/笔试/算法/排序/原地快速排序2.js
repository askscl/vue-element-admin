/* 
    在这个例子中，quickSort 函数是主要的排序函数，它接收一个数组 arr 和两个可选参数 low 和 high，分别表示排序范围的起始和结束索引。
    函数首先检查 low 是否小于 high，如果是，就选择一个基准值（这里我们选择最后一个元素作为基准值），
    然后将数组划分为两部分：一部分包含所有小于基准值的元素，另一部分包含所有大于或等于基准值的元素。
    这个过程由 partition 函数完成。然后，quickSort 函数递归地对这两部分进行排序。最后，返回排序后的数组。

    partition 函数用于划分数组。它接收一个数组 arr 和两个索引 low 和 high，并将数组划分为两部分。
    在函数内部，我们首先选择 arr[high] 作为基准值，然后遍历数组，
    =============将所有小于基准值的元素与 arr[i + 1] 交换位置（其中 i 是小于基准值的元素的索引）。==================
    1.将小的元素放在指针i上
    2.将大的元素放在指针j上
    最后，将基准值与 arr[i + 1] 交换位置，并返回 i + 1，即基准值的最终位置。

    备注：未花时间理解消化
*/

function quickSort(arr, low = 0, high = arr.length - 1) {  
    if (low < high) {  
        let pivotIndex = partition(arr, low, high);  
        console.log(pivotIndex);
        quickSort(arr, low, pivotIndex - 1);  
        quickSort(arr, pivotIndex + 1, high);  
    }  
    return arr;  
}  


// 以high为基准值，将数组划分为两部分
function partition(arr, low, high) {  
    let pivot = arr[high];  
    let i = low - 1;  //作用：记录小于基准值的元素的索引
    // 遍历数组，将小于基准值的元素与 arr[i + 1] 交换位置
    for (let j = low; j < high; j++) {  
        if (arr[j] < pivot) {  
            i++;  
            [arr[i], arr[j]] = [arr[j], arr[i]];  
        }  
    }  
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // i+1是基准值的最终位置
    return i + 1;  
}  
  
// 示例  
// const arr = [3,6,8,10,1,2,1];  
const arr = [5, 1, 2, 3, 4, 6, 7, 8, 9];
console.log(quickSort(arr));  // 输出: [1, 1, 2, 3, 6, 8, 10]
