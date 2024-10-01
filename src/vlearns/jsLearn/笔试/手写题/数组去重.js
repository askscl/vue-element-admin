const arr = [3, 3, 6, 8, 10, 10];

/**
 * 推荐指数：5星  🌟🌟🌟🌟🌟
 * 方法一：
 * indexOf
 */
function noRepeat11(arr){
    const arr2 = arr.filter((item, index) => {
        return arr.indexOf(item) === index; //因为indexOf 返回的是第一个的索引
    });
    console.log('noRepeatArr1: ', arr2);
}
// noRepeat11(arr);

function noRepeat12(arr){
    const arr2 = [];
    arr.forEach(item =>{
        if(arr2.indexOf(item) == -1){//注意此处是arr2
            arr2.push(item);
        }
    })
    console.log('noRepeat12: ', arr2);
}
// noRepeat12(arr);

//逻辑太绕不推荐
function noRepeat13(arr){
    const arr2 = [];
    for(let i = 0; i < arr.length; i++){
        //注意此处是《原数组》的indexOf方法
        if(arr.indexOf(arr[i]) == i){//因为indexOf 返回的是第一个的索引
            arr2.push(arr[i]);
        }
    }
    console.log('noRepeat13: ', arr2);
}
// noRepeat13(arr);


// ===============================================================================================================
/**
 * 推荐指数：5星  🌟🌟🌟🌟🌟
 * 方法二：
 * Set
 */

function noRepeat2(arr){
    const noRepeatArr2 = [...new Set(arr)];
    console.log('noRepeatArr2: ', noRepeatArr2);
}
// noRepeat2(arr);


// ===============================================================================================================
/**
 * 方法三：
 * 双重循环
 *
 * 注意点：
 * 1.i的边界值为什么是arr.length - 1 ---因为最后一个，后面没数据比较了，不需要比较
 * 2.j从i+1开始？---当前数与，数后面的数字比较
 * 3.j--索引退一格
 */
 function noRepeat3(arr){
    for(let i = 0 ; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                arr.splice(j, 1);
                j--;//删除后，索引退回上一格
            }
        }
    }
    console.log('noRepeat3: ', arr);
}
noRepeat3(arr);
