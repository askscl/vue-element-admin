/**
 * 题目：
 * 1.如何比较两个对象相同
 * 2.何为对象相同：只要对象的所有属性值相同
 * 
 * 思路：
 * 1.找到不同时返回false,结束比较
 * 2.判断是否为对象
 * 3.比较两个对象是否相同
 *      3.1比较引用地址
 *      3.2比较属性个数
 *      3.3遍历属性
 *      3.4递归比较
 * 
 * 
 * 注意：
 * 1. 判断两个非对象类型的值相同，如果要考虑+0,-0及NaN的话，要用Object.is()
 * 2. 记得比较两个对象的引用地址是否相同，==============个人感觉很容易忘掉这个点
 * 3. Object.keys()的用法
 * 4. 递归比较时，找到结果是false时，才return
 * 5. 所有比较都完成时，return true==============个人觉得也是个遗忘点
 */
const arr = [
    {a: 1, b: 2},
    {b: 2, a: 1},
    {a: 1, b: {c: 3, d: 4}},
    {a: 1, b: {d: 4, c: 3}}
];

let isObject = (val) => typeof val === 'object' && val !== null;

let newArr = [...arr];
function noRepeatArr(arr){
    for(let i=0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(isSame(arr[i], arr[j])){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

function isSame(val1, val2){
    
    //不是对象
    if(!isObject(val1) || !isObject(val2)) return Object.is(val1, val2);
    
    //都是对象
    //1.先比较引用地址是否相同
    if(val1 === val2) return true;
    //2.再比较长度
    const val1Keys = Object.keys(val1);
    const val2Keys = Object.keys(val2);
    if(val1Keys.length !== val2Keys.length) return false
    
    

    //3.遍历属性比较
    for(const key of val1Keys){
        if(!val2Keys.includes(key)){
            //一个对象不含有这个属性
            return false
        }else{
            //拥有相同的属性
            // 不能直接返回递归的比较结果，因为如果相等的时候，直接返回true，会打断for of遍历，
            //所以要当返回false时候才去打断for of的遍历
            // return isSame(val1[key], val2[key]);  ---不能直接这样返回，因为比较相同时，就打断了for of遍历，会导致遍历总次数变少 ，不足
            const res = isSame(val1[key], val2[key]);
            // console.log(`${key} :`, res);---可用来检查遍历的次数
            if(!res) return false;
        }
    }

    return true;

}
noRepeatArr(newArr);

console.log(newArr);


//3.遍历属性比较
    /* for(const key of val1Keys){
        if(!val2Keys.includes(key)) return false;
        const res = isSame(val1[key], val2[key]);
        if (!res) return false;
    }
    return true; */