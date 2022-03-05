/*
    对象
 */
//利用对象字面量创建对象{}
var object1 = {};//创建一个空对象(方法1)
var object2 = new Object();//创建一个空对象(方法2)
var obj = {
    v1: '233',
    v2: 666,
    fun: function (){
        console.log('haha')
    }
}

//调用对象的属性
console.log(obj.v1)
console.log(obj['v2'])
obj.fun()

//为对象增加属性
obj.v3 = 'new'