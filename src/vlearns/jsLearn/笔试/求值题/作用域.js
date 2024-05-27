/* 
考点： 作用域

思考：
1.b.fn 返回的是一个  a(val, index);
2. val来自b.fn的参数(),--不对
3. index来自初始的 val, 即 a(0) 中的 0 


*/

var a = function(val, index){
    console.log(index);
    return {
        fn: function(name){
            return a(name, val);  // 这里的val来自外部的val, 即 a(0) 中的 0，在定义的时候（书写时），就确定了，词法作用域
        }
    }
}

var b = a(0); //undefined
b.fn(1); //a(0).fn(1) 
b.fn(2); //a(0).fn(2)
b.fn(3); //a(0).fn(3)

