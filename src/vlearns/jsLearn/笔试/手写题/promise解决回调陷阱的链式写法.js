// promise解决回调陷阱的链式写法

const p = new Promise((resolve, reject) =>{
    if(true){
        resolve('成功');
    }else{
        reject('失败');
    }
});

p.then((v) =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('成功');
        }else{
            reject('失败');
        }
    })
}, (v) =>{
    console.log(v);
}).then(() =>{
    console.log(1)
}, (v) =>{
    console.log(2);
})