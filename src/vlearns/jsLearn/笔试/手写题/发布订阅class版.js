/**
 *
 */
class EventBus{
    constructor(){
        this.eventMap = new Map()
    }

    // 订阅
    subscribe(type, fn){
        // 判断是否已经存在该事件
        if(!this.eventMap.has(type)){
            this.eventMap.set(type, [])
        }
        this.eventMap.get(type).push(fn)
    }

    // 发布
    publish(type, ...args){
        if(this.eventMap.has(type)){
            this.eventMap.get(type).forEach(fn => {
                fn(...args)
            })
        }
    }
}
// 发布者
const bus = new EventBus()

// 订阅者
bus.subscribe('click', (a, b) => {
    console.log(a, b)
})

// 发布者发布消息
bus.publish('click', 1, 2)
