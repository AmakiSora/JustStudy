/**
 * 数组
 */
//创建数组方式1
var a1 = [1, 2, 3];
console.log(a1);

//创建数组方式2
var a2 = new Array();
console.log(a2);

//创建数组方式3
var a3 = new Array(3);//括号里为数组长度
console.log(a3);

//创建数组方式4
var a4 = new Array(2, 3);//括号里为元素
console.log(a4);

//判断是否为数组
console.log(a1 instanceof Array);
console.log(Array.isArray(a1));//isArray会优于instanceof,因为isArray能检测iframes

//增
console.log(a1.push(233, 'A'));//push追加新元素,返回数组长度
console.log(a1);
console.log(a1.unshift('B'));//在前面增加元素,返回数组长度
console.log(a1);

//删
console.log(a1.pop());//删除最后一个元素,并返回该元素
console.log(a1);
console.log(a1.shift());//删除第一个元素,并返回该元素
console.log(a1);

//改
a1[0] = 996;
console.log(a1);

//数组翻转
a1.reverse();
console.log(a1);

//数组排序
a1 = [3, 1, 2, 4];
a1.sort();
console.log(a1);

//升序
a1 = [3, 1, 2, 4];
a1.sort(function (a, b) {
    return a - b;
})
console.log(a1);

//降序
a1 = [3, 1, 2, 4];
a1.sort(function (a, b) {
    return b - a;
})
console.log(a1);

//查找元素索引
a1 = ['c', 'o', 's', 'm', 'o', 's'];
console.log(a1.indexOf('o'));//只返回第一个满足条件的
console.log(a1.lastIndexOf('o'));//只返回最后一个满足条件的
console.log(a1.indexOf('A'));//不存在返回-1
console.log(a1.lastIndexOf('A'));//不存在返回-1

//数组转换为字符串
console.log(a1.toString());
console.log(a1.join());
console.log(a1.join(''));//可输入分隔符
console.log(a1.join('-'));

//连接两个或多个数组(不影响原数组)
a1 = [1, 2, 3];
a2 = [4, 5, 6];
a3 = a1.concat(a2);
console.log(a3)

//截取数组(不会修改原数组)
console.log(a3.slice(2, 5));
console.log(a3)

//截取数组(会修改原数组)
console.log(a3.splice(2, 3))//(开始删除的位置,删除数量)
console.log(a3)
