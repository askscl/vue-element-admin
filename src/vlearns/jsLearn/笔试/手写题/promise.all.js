/* 
思路：
1.all()返回的是一个promise
2.判断参数是空的集合, 通过for of遍历
3.通过Promise.resolve(),将子元素包装成Promise
4.通过索引收集成功的结果
5.终止条件：成功的个数等于集合的长度

思考:
1.为什么不在原型上添加myAll方法？


注意：
1.用什么方法拿到集合的长度---for of,因为有可能是set,set是set.size; [].length

*/
Promise.myAll = function(proms){
    let res, rej;
    const p = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
    });


    let count = 0;
    const result = [];
    let successfulls = 0;
    for( let prom of proms){
        const index = count;
        count++;
        Promise.resolve(prom).then((suc)=>{
            result[index] = suc;
            successfulls++;
            if(successfulls === count){
                res(result);
            }

        //这里用rej和(e) => { rej(e); }都可以？为什么？--因为回调函数被rej覆盖了
        }, rej)
    }
    if(count === 0){
        rej(result);
    }


    return p;
};

Promise.myAll([1,2, Promise.reject(3)]).then((data) =>{
    console.log(data);
}, (error) => {
    console.log(error);
})