const obj1 = {
    a:1,
    b:{
        c:2,
    }
}

const obj2 = {
    d:3,
    e:{
        f: {
            g: 4
        },
    }
}

const obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3);
obj3.a = 777;
obj3.b.c = 999;
obj3.e.f.g = 888;
console.log(obj3)
console.log(obj1)
console.log(obj2)