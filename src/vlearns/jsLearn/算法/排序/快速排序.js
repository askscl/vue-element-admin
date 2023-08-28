/* 
思考：
1.采用递归
    1.1递归起始点是什么？
    1.2递归的终止条件是什么？

注意事项：
1.需要考虑数组为空的时候 ，所以长度为0要判断

*/

const arr = [7, 4, 2, 1, 3, 5, 6];

function sortArr(arr){
    if(arr.length === 1 || arr.length === 0 ) {return arr;}
    const arrLeft = [];
    const arrRight = [];
    const midValue = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < midValue){
            arrLeft.push(arr[i]);
        }else{
            arrRight.push(arr[i])
        }
    }

    return [...sortArr(arrLeft), midValue, ...sortArr(arrRight)];
}

console.log(sortArr(arr));