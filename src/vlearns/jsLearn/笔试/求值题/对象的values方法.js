/* 
原因：
    1.对象的values执行时，会对对象的键进行按索引大小排序（从小到大），然后再进行遍历
*/

const scrambled = { 
    2: "e",
    5: 'o',
    1: 'h',
    4: 'l',
    3: 'l'
}
const result = Object.values(scrambled).reduce((agg, el) => agg + el, '');
console.log(result);