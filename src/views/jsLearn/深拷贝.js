function deepClone(obj) {

    if (typeof obj !== 'object') return obj;

    const newObj = Array.isArray(obj) ? [] : {};
    for (let i in obj) {
        //for in遍历包括原型链，所以要加hasOwnProperty()是否是自有的属性
        if(obj.hasOwnProperty(i)){
            newObj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    }

    return newObj;
}

const a = {
    id: 1,
    name: '你好',
    list: [1, 2, 3],
    school: {
        schoolName: 'aaa',
        age: 20
    }
}

const b = deepClone(a);
b.list[0]=100,
b.school.age = 99;
console.log('a:', a);
console.log('b:', b);