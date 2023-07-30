/*总结：本题目覆盖知识点
        1. 变量不使用var声明，默认是全局变量。 没有作用域限制
        2. this指向
        3. 静态成员 与 实例成员
        4. 原型
        5. 预解析
        */
       
        /* 题干 */

        //1.声明全局函数Foo
        function Foo() {
            //声明全局变量getName ： 本质给window添加getName方法
            getName = function () {
                console.log(1);
            };
            /*
            没有使用new : this指向window
            使用new : this指向new创建的空对象（实例化对象）
            */
            return this;
        }

        //2.给Foo添加静态成员 ： getName
        Foo.getName = function () {
            console.log(2);
        }
        //3.给Foo添加原型方法getName
        Foo.prototype.getName = function () {
            console.log(3);
        }
        //4.声明全局函数getName
        var getName = function () {
            console.log(4);
        };
        //5.声明全局函数getName (被var覆盖)
        function getName() {
            console.log(5);
        }

        /* 题目 */

        //1.调用Foo函数对象自己的方法
        Foo.getName();//2
        //2.调用全局函数
        getName();//4
        //3.调用Foo() 返回window    继续调用window对象的getName方法
        Foo().getName();//1
        //4.调用全局函数 getName
        getName();//1
        //5. new Foo.getName : 这里并没有调用Foo，所以其实是调用Foo函数对象自己的getName
        //前面这个new是吓唬你的
        new Foo.getName()//2
        //6. new Foo() :返回实例化对象  调用getName访问原型中的方法
        new Foo().getName();//3
        //7. 多出来的new是吓唬你的，原理与6一致
        // 相当于  new   (new Foo.getName())  与6中的this指向有区别
        new new Foo().getName();//3 