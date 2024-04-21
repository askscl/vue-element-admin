/* 

比较函数接受两个参数 a 和 b，它们是要被比较的两个数组元素。
如果 a 应该排在 b 前面，则比较函数应该返回一个小于 0 的值；
如果 a 应该排在 b 后面，则应该返回一个大于 0 的值；
如果 a 和 b 相等，则返回 0。
*/

let arr = [  
    { name: 'Zoe', age: 30 },  
    { name: 'Bob', age: 20 },  
    { name: 'Alice', age: 25 }  
];  

arr.sort((a, b) => a.age - b.age);  // 按照年龄升序排序

console.log(arr);  // 输出: [{ name: 'Bob', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Zoe', age: 30 }]