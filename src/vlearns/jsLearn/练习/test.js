// 将对象的key转化为驼峰格式（嵌套有数组对象，有对象）
function toCamelCase(obj) {
    var newObj = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var value = obj[key];
            if (typeof value === 'object') {
                if (Array.isArray(value)) {
                    newObj[key] = value.map(function(val) {
                        return toCamelCase(val);
                    });
                } else {
                    newObj[key] = toCamelCase(value);
                }
            } else {
                newObj[key.replace(/_([a-zA-Z])/g, function(match, char) { 
                    return char.toUpperCase(); 
                })] = value;
            }
        }
    }
    return newObj;
}

// const obj = { abc_abc: 1};
// const obj = { abc_abc: 1, b: [{aaa_bbb: 2}]};

// console.log(toCamelCase(obj));

const obj2 = {
    a_abc: 1,
    b_Bcd: 2,
    c: [
        {
            d_abc: 3
        }
    ]
}
console.log(toCamelCase(obj2));