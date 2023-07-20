/**
 * 归并查找相同的数组元素,
 * 数组1，有id，
 * 归并思想: 
 * 前提：两个升序的数组
 * 设置两个指针，在相同的时候，同时位移，如果不相同，则谁小谁++，
 * @param {} arr1 
 * @param {*} arr2 
 * @returns Array
 */
function findSameItem(arr1, arr2){
    let arr = [];
    let arrIn1 = getSort([...arr1]);
    let arrIn2 = getSort([...arr2]);
    console.log(arrIn1);
    console.log(arrIn2);
    let i = 0, j = 0;
    while(i < arrIn1.length && j < arrIn2.length){//边界条件！
        if(arrIn1[i].id == arrIn2[j].id){
            arr.push(arrIn1[i]);
            arr.push(arrIn2[j]);
            i++;
            j++;
        }else if(arrIn1[i].id < arrIn2[j].id){
            i++;
        }else{
            j++;
        }
    }
    return arr;
}

/**
 * 通过id升序排序
 * @param {} arr 
 * @returns Array
 */
function getSort(arr){
    return arr.sort((a,b) => {
        return a.id - b.id
    });
}

let arr1 = [
    {
        id: 1,
        data:'你好的'
    },
    {
        id: 3,
        data:'你好的'
    },
    {
        id: 4,
        data:'你好的'
    },
    {
        id: 5,
        data:'我在数组1'
    },
    {
        id: 2,
        data:'我在数组1'
    }
];

let arr2 = [
    {
        id: 9,
        data:'你好的'
    },
    {
        id: 8,
        data:'你好的'
    },
    {
        id: 7,
        data:'你好的'
    },
    {
        id: 5,
        data:'我在数组2'
    },
    {
        id: 2,
        data:'我在数组2'
    }
];

console.log(findSameItem(arr1, arr2));


/**
 * 运行方式： 
 * cd src\views\jsLearn
 * node findSameItem.js
 */


