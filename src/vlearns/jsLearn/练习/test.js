// 创建一个空对象作为发布/订阅中心
const pubSub = {};

// 添加一个订阅方法
pubSub.subscribe = function(event, callback) {
  if (!this.subscribers) {
    this.subscribers = {};
  }
  if (!this.subscribers[event]) {
    this.subscribers[event] = [];
  }
  this.subscribers[event].push(callback);
};

// 添加一个发布方法
pubSub.publish = function(event) {
  if (this.subscribers && this.subscribers[event]) {
    const args = Array.prototype.slice.call(arguments, 1);
    this.subscribers[event].forEach(function(callback) {
      callback.apply(undefined, args);
    });
  }
};

// 使用示例
const callback1 = function(param1, param2) {
  console.log('Callback 1:', param1, param2);
};
const callback2 = function(param1, param2) {
  console.log('Callback 2:', param1, param2);
};

pubSub.subscribe('event1', callback1);
pubSub.subscribe('event1', callback2);

pubSub.publish('event1', 'Hello', 'World'); 