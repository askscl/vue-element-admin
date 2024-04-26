/* 
选择排序：
特点：类似于冒泡排序
思想：
1.每一圈中找出一个最大的数，与最后一个交换
与冒泡的区别：
1.比较时，不直接交换，而是先存着索引，比较完一轮后，才交换（减少交换次数）

*/

const arr = [7, 4, 2, 1, 3, 5, 6];

//比较
function compare(a, b){
    if(a < b) return true;
    else return false;
}

//交换
function exchange(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
}


//排序
function arrSort(arr){
    if(arr == null) return;
    for(let i = 0; i < arr.length - 1; i ++){
        let maxIndex = 0;
        for(let j = 0; j < arr.length - i; j ++){
            if(compare( arr[maxIndex] , arr[j])){
                maxIndex = j;
            }
        }
        exchange(arr, maxIndex, arr.length - 1 - i);//为什么是arr.length - 1 - i, -1表示索引最后一个， -i 表示第几轮（每轮扣掉一个）
    }
    return arr;
}

console.log(arrSort(arr));

