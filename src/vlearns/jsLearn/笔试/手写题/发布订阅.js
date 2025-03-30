const pubSub = {};


// 订阅
pubSub.subscribe = function(event, callback){
    if(!this.subscribes){
        this.subscribes = {}
    }
    //为啥要判断数组为空---为了定义一个数组，进而初始化
    if(!this.subscribes[event]){
        this.subscribes[event] = [];
    }
    this.subscribes[event].push(callback);
}
// 发布
/*
    subscribes subscribes subscribes subscribes subscribes subscribes subscribes subscribes
    publish publish publish publish publish publish publish publish publish publish
    slice slice slice slice slice slice slice slice slice slice slice slice slice
    Array.prototype.slice.call
    Array.prototype.slice.call
    Array.prototype.slice.call
    callback.apply(null, args)
    callback.apply(null, args)
    callback.apply(null, args)
*/
pubSub.publish = function(event){//实际event后面会加上函数的参数
    if(this.subscribes && this.subscribes[event]){
        const args = Array.prototype.slice.call(arguments, 1);//拿到后面的参数，除第一个事件名后面的
        console.log(args);
        this.subscribes[event].forEach((callback) =>{
            callback.apply(null, args);//因为参数可能是多个
            // callback(args);--这样写会导致参数就一个---args是一个数组
        });
    }
}

// 定义事件
const callback1 = function(p1, p2){
    console.log(`p1:${p1}`);
    console.log(`callback1:${p1} ${p2}`)
}
const callback2 = function(p1, p2){
    console.log(`callback2: ${p1} ${p2}`)
}
// 事件订阅
pubSub.subscribe('event1', callback1);
pubSub.subscribe('event1', callback2);

// 事件发布
pubSub.publish('event1','你好', '周一');
