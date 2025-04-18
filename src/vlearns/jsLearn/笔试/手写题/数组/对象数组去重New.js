/*
    定义：对象数组去重：只要对象的所有属性及值相同，则表示相同对象

    思路：
        1. 遍历数组，对每个对象，遍历result数组，判断result数组中的对象是否与当前对象相同
        2. 判断两个对象是否相同，需要判断两个对象的键名和键值是否相同
    注意：
        1. 判断两个非对象类型的值相同，如果要考虑+0,-0及NaN的话，要用Object.is()
*/
const arr = [
    {a: 1, b: 2},
    {b: 2, a: 1},
    {a: 1, b: {c: 3, d: 4}},
    {a: 1, b: {d: 4, c: 3}}
];


const isObject = (val) => typeof val === 'object' && val !== null;

function equal(val1, val2){
    // 原始类型直接比较
    if(!isObject(val1) || !isObject(val2)){
        return Object.is(val1, val2);
    }
    // 对象类型
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);
    // 1.键长度
    if(keys1.length !== keys2.length){
        return false;
    }


    for(const key of keys1){
        // 2. 键名
        if(!keys2.includes(key)){
            return false;
        }
        // 3.键值
        if(!equal(val1[key], val2[key] )){
            return false;
        }
    }
    return true;
}


const result = [];
for(const item of arr){
    let isFind = false;
    for(const r of result){
        if(equal(item, r)){
            isFind = true;
            break;
        }
    }
    if(!isFind){
        result.push(item);
    }
}

console.log(result);
