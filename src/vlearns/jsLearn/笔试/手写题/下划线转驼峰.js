/* 
题目：将对象的key转化为驼峰格式（嵌套有数组对象，有对象

注意事项：
1.正则代表范围的要加个[];
2.单词拼写： 
    2.1 hasOwnProperty hasOwnProperty hasOwnProperty hasOwnProperty hasOwnProperty hasOwnProperty hasOwnProperty
    2.2 toUpperCase toUpperCase toUpperCase toUpperCase toUpperCase toUpperCase toUpperCase toUpperCase toUpperCase
    2.3 toCamelCase toCamelCase toCamelCase toCamelCase toCamelCase toCamelCase toCamelCase toCamelCase toCamelCase
*/
function toCamelCase(obj){
    const newObj= {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            const value = obj[key];
            if(typeof value === 'object'){
                if(Array.isArray(value)){
                    newObj[key] = value.map(function(item){
                        return toCamelCase(item);
                    })
                }else{
                    newObj[key] = toCamelCase(value);
                }
            }else{
                newObj[key.replace(/_([a-zA-Z])/g, (match, p1) =>{
                    return p1.toUpperCase();
                })] = value;
            }
        }
    }
    return newObj;
}


// const obj = { abc_abc: 1};
const obj = {
    a_abc: 1,
    b_Bcd: 2,
    c: [
        {
            d_abc: 3
        }
    ]
}

console.log(toCamelCase(obj));

