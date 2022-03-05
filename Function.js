/**
 * 函数
 */

//创建函数方法1
var fun1 = new Function("console.log('fun1!')");
console.log(fun1);
fun1();

//创建函数方法2
function fun2() {
    console.log("fun2!");
}

console.log(fun2);
fun2();

//带参数的函数
function fun3(a, b) {
    console.log(a + b);
}

fun3();//js不会检查实参的数量
fun3(2);//少于形参的参数为undefined
fun3(2, 2);
fun3(2, 2, 3, 4);//多出的实参不管
fun3(1, "233");//也不会检查实参的类型
fun3(true, false);

//函数的返回值(如果没有return则返回undefined)
function fun4(a) {
    a += a;
    return a;
}

console.log(fun4(10));

//函数嵌套
function fun5() {
    function fun6() {
        console.log("haha!");
    }

    return fun6;
}

a = fun5();
a();
fun5()();//和上面等价

//匿名函数1
a = function () {
    console.log("niming1")
}
a();

//匿名函数2
(function (a, b) {
    console.log(a + b);
})(1, 1);

//arguments的使用
function arg() {
    console.log(arguments);//arguments里存储了所有的实参,是伪数组
    console.log(arguments.length);
    console.log(arguments[1]);
}

arg(233, 666, 996);//会按照索引进行存储

//函数的预解析
ff();
function ff() {
    console.log('ff');
}
/*
    函数提升:把所有声明的函数提升到当前作用域的最前面,但不会调用
    上面的代码的执行顺序是
    var ff;
    ff = function(){
        console.log('ff');
    }
    ff()
*/


