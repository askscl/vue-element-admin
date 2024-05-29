function Foo() {
    getName = function () { console.log(1); }
    console.log('this指向: ',this);
    return this;
}
Foo.getName = function () {
    console.log(2);
}
Foo.prototype.getName = function () { console.log(3);  console.log('原型链上：' , this)}
var getName = function () {
    console.log(4);
}
function getName() { console.log(5); }

// /*题目 */
Foo.getName();
getName();//---易错
Foo().getName(); //---易错
getName();
new Foo.getName();
new Foo().getName();//---易错
new new Foo().getName();




























// /*答案 */
Foo.getName();//2
getName();//4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3

/**
 * 考察的知识点：
 * 1.函数声明提升，被提升到顶部，会被赋值；var变量声明提升，被提升到顶部，但不会被赋值
 * 2.this的指向
 * 3.new关键字的原理，new的优先级大于 .  的优先级
 *      3.1new关键字的嵌套， new new Foo().getName()  =>   new ( new Foo().getName() );
 * 4.没有var 的变量，是全局变量
 */
/**解题
 * 0. Foo()解读
 *      0.1 内部 的getName只是对全局变量的值 的改变，并不是Foo的属性
 * 1.Foo的执行做了两个动作
 *      1.1 将全局变量getName重新赋值
 *      1.2 返回this,this指向：谁调用函数指向谁，因则是window
 * 2.new Foo().getName() ：
 *      2.1 先执行new Foo() 进行实例化，新建了一个实例
 *      2.2 实例上没有这个方法，进而去原型链上查找
 * 
 * 思考：
 * 1.this指向问题的理解要透
 */