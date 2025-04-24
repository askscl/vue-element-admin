const arr = [7, 4, 2, 1, 3, 5, 6];

// 方法一
/* 
思路：
1.每次跟后面的比较，遇到大的就交换（最后一个没有数比较了），因此外层要 -1
*/
function sortArr(arr){
    for(let i = 0; i < arr.length -1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

// console.log(sortArr(arr));

//方法二
/* 
思路：
1.外层每次找到一个最大值，要找几次（比如3个要找两次）
2.内层相邻两两交换，
    2.1已确定的最大值不需要交换，因此  -i
    2.2因为要用到j+1, 因此 -1
*/
function bubbleSort(arr){
    for(let i = 0; i< arr.length -1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));