/**
 * 数组
 */
//创建数组方式1
var a1 = [1, 2, 3]
console.log(a1)

//创建数组方式2
var a2 = new Array();
console.log(a2)

//创建数组方式3
var a3 = new Array(3);//括号里为数组长度
console.log(a3)

//创建数组方式4
var a4 = new Array(2, 3);//括号里为元素
console.log(a4)

//判断是否为数组
console.log(a1 instanceof Array);
console.log(Array.isArray(a1));//isArray会优于instanceof,因为isArray能检测iframes

//增
console.log(a1.push(233, 'A'))//push追加新元素,返回数组长度
console.log(a1)
console.log(a1.unshift('B'))//在前面增加元素,返回数组长度
console.log(a1)

//删
console.log(a1.pop())//删除最后一个元素,并返回该元素
console.log(a1)
console.log(a1.shift())//删除第一个元素,并返回该元素
console.log(a1)

//改
a1[0] = 996
console.log(a1)
