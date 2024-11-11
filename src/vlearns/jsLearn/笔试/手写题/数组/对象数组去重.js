const arr = [
    { id: 1, name: "张三" },
    { id: 3, name: "李四" },
    { id: 3, name: "xaa" },
    { id: 3, name: "ss" },
    { id: 3, name: "王五" },
    { id: 6, name: "小明" },
    { id: 7, name: "小红" },
    { id: 7, name: "小红" },
];


/**
 * 推荐指数：5星  🌟🌟🌟🌟🌟
 * 方法4：使用Map
 * @param {*} arr
 * @returns
 */

 const noRepeatArr4 = function (arr) {
    const map = new Map();
    for(let i of arr){
        if(!map.has(i.id)){
            map.set(i.id, i);
        }
    }
    return [...map.values()];
}

// console.log('noRepeatArr4:', noRepeatArr4(arr));


// ===============================================================================================================

/**
 * 方法1：双层for循环
 *
 * 注意点：
 * 1.i 的边界值是arr.length - 1？---因为最后一个，后面没数据比较了，不需要比较
 * 2.j的起始索引是i + 1？---当前数与，数后面的数字比较
 * 3.j--索引退一格
 *
 */
const noRepeatArr1 = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].id == arr[j].id) {
                arr.splice(j, 1);
                j--; //删掉了一个元素，索引要退一格
            }
        }
    }
    return arr;
}

// console.log('noRepeatArr1:', noRepeatArr1(arr));


// ===============================================================================================================
/**
 * 方法2：indexOf()
 * @param {*} arr
 * @returns
 */
const noRepeatArr2 = function (arr) {
    const idList = [];
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (idList.indexOf(arr[i].id) === -1) {
            idList.push(arr[i].id);
            arr2.push(arr[i]);
        }
    }
    return arr2;

}

// console.log('noRepeatArr2:', noRepeatArr2(arr));


// ===============================================================================================================
/**
 * 方法3：for循环，利用对象属性唯一性
 * @param {*} arr
 * @returns
 */

 const noRepeatArr31 = function (arr) {
    const obj = {}
    const arr2 = [];
    for(let i = 0; i < arr.length; i++){
        obj[arr[i].id] = arr [i];
    }
    console.log(obj);
    for(let  i in  obj){
        arr2.push(obj[i])
    }
    return arr2;
}
// console.log('noRepeatArr31:', noRepeatArr31(arr));


const noRepeatArr32 = function(arr){
    const obj = {};
    const arr2 = [];
    for(let i=0; i < arr.length; i++){
        if(!obj[arr[i].id]){
            arr2.push(arr[i]);
            obj[arr[i].id]= true;//将对象里该 属性的值设为布尔值，用于判断
        }
    }
    return arr2;
}
// console.log('noRepeatArr32:', noRepeatArr32(arr));


//数组的reduce方法，归并？
const noRepeatArr33 = function(arr){
    const obj = {}
    const arr2=arr.reduce((a, b) => {
        // console.log(a);
        obj[b.id] ? '' : obj[b.id] = true && a.push(b);
        return a;//非常关键的一步，容易漏掉************************************
    }, []);
    return arr2;
}
// console.log('noRepeatArr33:', noRepeatArr33(arr));


// ===============================================================================================================

/**
 * 方法5：every()都满足返回true，否则 false
 * 点评：逻辑有点绕，不方便记忆
 * @param {*} arr
 * @returns
 */

 const noRepeatArr5 = function (arr) {
    const arr2 = [];

    arr.forEach(a => {
        let check = arr2.every(b => {
            return  a.id != b.id;
        }); //every()都满足返回true，否则 false，a的每一项都与b的每一项不相同
        check ? arr2.push(a) : '';
    })
    return arr2;
}

console.log('noRepeatArr5:', noRepeatArr5(arr));
