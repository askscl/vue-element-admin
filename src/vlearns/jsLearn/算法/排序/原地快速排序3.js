/* 
出处：渡一算法视频：标准的快速排序
备注：未花时间理解消化
*/
const arr = [4,1,6,9,3,2,8,7];

function swap(arr, a, b){
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function quickSort(arr, begin, end){
    if(begin >= end - 1) return;
    let left  = begin;
    let right = end;
    do{
        do left++; while(left < right && arr[left] < arr[begin]);
        do right--; while(right > left && arr[right] > arr[begin]);
        if(left < right) swap(arr, left, right);
    }while(left < right);

    const swapPoint = left == right ? right - 1 : right; //为什么要这样写？--本质是双指针交叉问题产生的边界情况
    swap(arr, begin, swapPoint);
    quickSort(arr, begin, swapPoint);//为啥没有swapPoint - 1?
    quickSort(arr, swapPoint + 1, end );
}

function runSort(arr){
    quickSort(arr, 0, arr.length);
}

runSort(arr);
console.log(arr);