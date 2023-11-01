/* 
要求: 写一个函数 func()，输入正整数 n，返回的值，即 n*(-l)*(-2)....."2*1。 
*/
function getN(n){
    let result = n;

    if(n === 1){
        return result;
    }else{
        for(let i= 1; i < n; i++){
            result = result*(n - i)
        }
    }
    return result;
}

console.log(getN(1));
console.log(getN(2));
console.log(getN(3));
console.log(getN(4));
console.log(3*2*1)
console.log(4*3*2*1)
