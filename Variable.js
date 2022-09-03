/**
 * 变量
 *  js有6种数据类型
 *      String(字符串)
 *      Number(数值)
 *      Boolean(布尔值)
 *      Null(空值)
 *      Undefind(未定义)
 *      Object(对象)
 *
 *  全局变量会在浏览器关闭后才销毁,局部变量用完后自动销毁
 */

//变量声明,默认为undefined
var a;
console.log(a);

//js底层用Unicode对变量名进行编码,所以中文也可
var 变量 = 666;
console.log(变量);

//js所有的数据类型都用var来创建
var a = 1;
var a = 'a'
var a = []
console.log(a)

//typeof会返回变量的数据类型,返回的数据类型是一个String类型，
var a = 233
console.log(typeof a)
var b = typeof a
console.log(typeof b)

//String需要用""或者''括起来
var a = 'abc'
var a = "abc"
console.log(typeof a)

//String单双引号嵌套
var a = '我:"艹!"'
var a = "我:'艹!'"
console.log(a)

//String强制类型转换,toString()方法,转换null和undefined时会报错
a = 233
console.log(typeof a)
a = a.toString()
console.log(typeof a)

//String强制类型转换,String()方法,转换null和undefined时会返回本身
a = 233
console.log(typeof a)
a = String(a)
console.log(typeof a)
console.log(String(null))
console.log(String(undefined))

//Number在js中所有整数,浮点数都是Nunber类型
var a = 233
console.log(typeof a)
console.log(a)

//Number的其他进制格式
console.log(0Xa)//16进制
console.log(0o11)//8进制
console.log(0b1001)//2进制


//Number的最大值最小值
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

//Number超过上限会显示Infinity,表示无限,Infinity也是nunber类型
console.log(Infinity)//正无穷
console.log(-Infinity)//负无穷
console.log(typeof Infinity)

//Number错误的数值会显示NaN,表示不是一个数字,NaN也是nunber类型
a = NaN
console.log(typeof a)
a = 'a' * 233
console.log(a)

//Number强制类型转换,Number()方法,出错返回NaN
a = '233'
console.log(typeof a)
a = Number(a)
console.log(a)
console.log(typeof a)
console.log(Number(true))//true返回1
console.log(Number(false))//false返回0
console.log(Number(null))//null返回0
console.log(Number(undefined))//undefined返回NaN

//Number强制类型转换,parseInt()方法,返回第一个整数,parseFloat()方法,返回第一个浮点数
a = '1.1a2.2b3c'//第一个字符不为数字则报错
b = parseInt(a)
console.log(b)
c = parseFloat(a)
console.log(c)

//Number强制类型转换,利用+运算符转化和Number()同理
a = '233333'
console.log(a)
console.log(typeof a)
b = +a
console.log(b)
console.log(typeof b)
c = 1 + +'2' + 3
console.log(c)
console.log(typeof c)


//parseInt()方法可用第二个参数指定进制
console.log(parseInt(11, 8))


//js也有经典的浮点数计算问题
a = 0.1 + 0.2//0.30000000000000004
console.log(a)

//Boolean
console.log(typeof true)
console.log(typeof false)

//Boolean强制类型转换,Boolean()方法
console.log(Boolean(1))//1为true
console.log(Boolean(0))//0为false
console.log(Boolean(NaN))//NaN为false
console.log(Boolean(-2))//其他数字均为false
console.log(Boolean(""))//空字符串为false
console.log(Boolean("233"))//字符均为false
console.log(Boolean(null))//null为false
console.log(Boolean(undefined))//undefined为false

//Null表示空值,typer会返回object
a = null
console.log(a)
console.log(typeof a)

//Undefind表示未定义
a = undefined
console.log(a)
console.log(typeof a)

//变量的预解析
console.log(vv);
var vv = 1;//如果没有这句话,上一行代码会报错
/*
    变量提升:把所有声明的变量提升到当前作用域的最前面,但不会提升赋值操作
    上面的代码的执行顺序是
    var vv
    console.log(vv);
    vv = 1
 */
