/* Object.prototype.a = function () {
    console.log('a')
}
 
Function.prototype.b = function () {
    console.log('b')
}
 
function F(){}
var f = new F();
 
f.a();
f.b();
F.a(); */




Object.prototype.a = function () {
    console.log('我是Object中的a')
}
Object.prototype.b = function(){
    console.log('我是Object中的b')
}
Function.prototype.a = function () {
    console.log('我是Function中的a')
}
Function.prototype.b = function () {
    console.log('我是Function中的b')
}
function F(){
    this.a = function () {
        console.log('我是F中的a')
    }
}
F.prototype.a = function () {
    console.log('我是F的prototype中的a')
}
var f = new F();
f.a(); //F-a
f.b(); //O-b
F.a(); //F-a--------此处错误了：答案为 Func-a ，因为（函数只是一个函数，函数名不能访问到自己函数体内的变量，如果要访问，只有实例可以，）--逆推结论---
F.b(); //Func-b
Object.a(); //Func-a
Object.b(); //Func-b
Function.a(); //Func-a
Function.b(); //Func-b