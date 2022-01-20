/**
 * 基本语法
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

/**
 *  js有6种数据类型
 *      String(字符串)
 *      Number(数值)
 *      Boolean(布尔值)
 *      Null(空值)
 *      Undefind(未定义)
 *      Object(对象)
 */

//String需要用""或者''括起来
var a = 'abc'
var a = "abc"
console.log(typeof a)//typeof会返回变量的数据类型

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
a='233'
console.log(typeof a)
a= Number(a)
console.log(a)
console.log(typeof a)
console.log(Number(true))//true返回1
console.log(Number(false))//false返回0
console.log(Number(null))//null返回0
console.log(Number(undefined))//undefined返回NaN

//Number强制类型转换,parseInt()方法,返回第一个整数,parseFloat()方法,返回第一个浮点数
a = '1.1a2.2b3c'
b = parseInt(a)
console.log(b)
c = parseFloat(a)
console.log(c)


//js也有经典的浮点数计算问题
a = 0.1 + 0.2//0.30000000000000004
console.log(a)

//Boolean
console.log(typeof true)
console.log(typeof false)

//Null表示空值,typer会返回object
a = null
console.log(a)
console.log(typeof a)

//Undefind表示未定义
a = undefined
console.log(a)
console.log(typeof a)

