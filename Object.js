/**
 对象
 */
//利用对象字面量创建对象{}
var object1 = {};//创建一个空对象(方法1)
var object2 = new Object();//创建一个空对象(方法2)
var obj = {
    v1: '233',
    v2: 666,
    fun: function () {
        console.log('haha')
    }
}

//调用对象的属性
console.log(obj.v1)
console.log(obj['v2'])
obj.fun()

//为对象增加属性
obj.v3 = 'new'
console.log(obj.v3)

//构造函数创建对象
function Constructor(a1, a2) {//构造函数(不需要return)
    this.b1 = a1;
    this.b2 = a2;
}

var c = new Constructor(233, '1');
for (var i in c) {
    console.log(i);//获取对象名
    console.log(c[i]);//获取对象值
}

//js中的对象分三种:自定义对象, 内置对象, 浏览器对象
//内置对象 : Math对象
console.log(Math.E)//e
console.log(Math.PI)//圆周率
console.log(Math.max(666, 233, 996))//求最大值
console.log(Math.min(666, 233, 996))//求最小值
console.log(Math.abs(-666))//求绝对值
console.log(Math.floor(1.1111))//向下取整
console.log(Math.ceil(1.1111))//向上取整
console.log(Math.round(1.45))//四舍五入
console.log(Math.round(1.54))//四舍五入
console.log(Math.random())//随机数
console.log(Math.floor(Math.random() * (666 - 233 + 1)) + 233)//取233-666之间的随机数

//内置对象 : Date对象
var now = new Date();//当前时间
console.log(now);
var d1 = new Date(2022, 1, 1);
console.log(d1);

console.log(now.getFullYear())//年
console.log(now.getMonth() + 1)//月,从0开始
console.log(now.getDate())//日
console.log(now.getDay())//星期
console.log(now.getHours())//时
console.log(now.getMinutes())//分
console.log(now.getSeconds())//秒
console.log(now.valueOf())//从1970年至今的毫秒数
console.log(now.getTime())//从1970年至今的毫秒数
console.log(+new Date())//从1970年至今的毫秒数
console.log(Date.now())//从1970年至今的毫秒数
