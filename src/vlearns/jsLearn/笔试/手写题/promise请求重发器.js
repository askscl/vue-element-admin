/* 
思路：
1.设计一个闭包，并立即执行
2.return一个函数，函数内返回一个promise
3.setTimeout模拟异步请求
4.假设失败了，次数小于3递归发起请求

思考：
1.setTimeout(()=>{ request(config).then(resolve, reject), 1000})为什么要这样写？
    1.1这个问题是由于请求函数request在达到第三次失败后，虽然执行了resolve函数，但是结果并没有被retryRequest函数捕获。
    1.2原因是你在request函数内部直接调用了reject函数，这会立即结束Promise，不会等待内部的setTimeout执行。然后，由于request函数返回
       的Promise没有被任何地方捕获，所以它的结果（无论是resolve还是reject）都会被忽略。
    1.3要修复这个问题，你需要将setTimeout中的代码移到Promise的回调中，这样就能保证即使reject被调用，内部的代码也仍然会被执行。
*/
const request = (()=>{
    let count = 0;
    return function(config){
        count++;
        console.log(`request:${count}`, JSON.stringify(config))
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                //假设失败，开始重新请求
                if(count < 3){
                    reject('请求失败，重新请求中。。。');
                    setTimeout(()=>{ request(config).then(resolve, reject), 1000})
                    // setTimeout(()=>{ request(config), 1000})
                    // request(config);
                }else{
                    resolve('重新请求3次, 还是请求失败');
                }
            }, 1000)
        })
    }
})();



request({url: 'www.baidu.com'}).then((res) => {
    console.log(res);
}, (e) => {
    console.log(e)
})