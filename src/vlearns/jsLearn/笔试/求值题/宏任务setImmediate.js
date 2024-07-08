/* 
    https://blog.csdn.net/xufang461010923/article/details/133126881
    setImmediate 可以将回调函数放置在当前事件循环的队列末尾--宏任务队列的头
*/
console.log('1');   // 同1

setTimeout(function () { // 宏1
    console.log('2');    // 宏1-同1
    process.nextTick(function () {  // 宏1-n微1
        console.log('3');
    })

    new Promise(function (resolve) {
        console.log('4');    // 宏1-同2
        resolve();
    }).then(function () {
        console.log('5')  // 宏1-微1
    })
})

new Promise(function (resolve) {
    console.log('6');   // 同2
    resolve();
}).then(function () {   // 微1
    console.log('7')
})

process.nextTick(function () {  // n微1
    console.log('8'); // 
})

setImmediate(() => {   // 宏2
    console.info('9')  // setImmediate 可以将回调函数放置在当前这一轮事件循环的队列末尾
})

new Promise(function (resolve) {
        console.log('10');   // 同3
        resolve();
    }).then(function () {  // 微2
    console.log('11')

})

setTimeout(function () {   // 宏3
    console.log('12');
    setImmediate(() => {
        console.info('13')  // setImmediate 可以将回调函数放置在当前这一轮事件循环的队列末尾
    })

    process.nextTick(function () {
        console.log('14')
    })

    new Promise(function (resolve) {
        console.log('15');
        resolve();
    }).then(function () {
        console.log('16')
    })
})

process.nextTick(function () {  // n微2
    console.log('17');
})