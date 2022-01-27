/**
 * 运算符
 */

console.log(1 + 1)
console.log(1 + '')
console.log(1 + 'a')
console.log(1 + true)
console.log(1 + false)
console.log(1 + null)
console.log(1 + undefined)
console.log('-------------------------------')

console.log('a' + 1)
console.log('a' + '')
console.log('a' + 'a')
console.log('a' + true)
console.log('a' + false)
console.log('a' + null)
console.log('-------------------------------')

console.log(true + 1)
console.log(true + '')
console.log(true + 'a')
console.log(true + true)
console.log(true + false)
console.log(true + null)
console.log(true + undefined)
console.log('-------------------------------')

console.log(null + 1)
console.log(null + '')
console.log(null + 'a')
console.log(null + true)
console.log(null + false)
console.log(null + null)
console.log(null + undefined)
console.log('-------------------------------')

console.log(undefined + 1)
console.log(undefined + '')
console.log(undefined + 'a')
console.log(undefined + true)
console.log(undefined + false)
console.log(undefined + null)
console.log(undefined + undefined)
console.log('-------------------------------')

// a++和++a都会使自身+1，但执行的先后顺序不同(类似C语言)
c = 1
console.log(c++)
console.log(c--)
console.log(++c)
console.log(--c)
console.log('-------------------------------')

// 逻辑运算符
a = true
console.log(!a)
console.log(!!a)
console.log(a && a)
console.log(a && !a)
console.log(a || a)
console.log(a || !a)
console.log('-------------------------------')

a = 0
console.log(!a)
a = 233
console.log(!a)
a = 'abc'
console.log(!a)
console.log('-------------------------------')

// 与运算，如果两个值都为true，则返回后面那个，如果两个都是false，则返回前面那个
console.log("233" && 666)
console.log(NaN && 666)//NaN为false
console.log(NaN && 0)
console.log(0 && NaN)
console.log('-------------------------------')

// 或运算，如果第一个值为true，直接返回第一个值，如果第一个值为false，直接返回第二个值
console.log(233 || 666)
console.log(0 || 666)
console.log(0 || NaN)
console.log('' || 'emm')
console.log('-------------------------------')

// 赋值运算符
a = 233
console.log(a)
a += 2
console.log(a)
a -= 2
console.log(a)
a *= 2
console.log(a)
a /= 2
console.log(a)
a %= 2
console.log(a)
console.log('-------------------------------')

// 关系运算符
console.log(233 > 666)
console.log(233 < 666)
console.log(233 >= 666)
console.log(233 <= 666)
console.log(233 == 666)
console.log(233 != 666)
console.log('-------------------------------')

console.log(1 > '0')
console.log(1 >= '0')

//任何值和NaN比较都返回false
console.log(233 >= NaN)
console.log(233 <= NaN)

//如果两侧都为字符串，不会转换为数字，而会比较字符串中字符的Unicode编码(同位相比)
console.log('11' > '5')
console.log('a' > 'b')

//如果两个类型不一样，会自动类型转换
console.log('233' == 233)

//全等号(===)和不全等号(!==)会先判断数据类型，再判断值
console.log('233' === 233)
console.log('233' !== 233)

//null不会转成number
console.log(null == 0)

//undefined和null相等
console.log(null == undefined)

//NaN不和任何值相等，包括自己本身
console.log(NaN == null)
console.log(NaN == NaN)

//也可以通过isNaN()函数来判断值是否为NaN
console.log(isNaN(a))
console.log('-------------------------------')

//三元运算符 条件表达式? 语句1 : 语句2
a = 233 > 666 ? 32 : 64
console.log(a)

/**
 运算符优先级如下：
------------------------------------------------------------------------------
. [] ()	                                字段访问、数组下标、函数调用以及表达式分组
++ -- - ~ ! delete new typeof void	    一元运算符、返回数据类型、对象创建、未定义值
* / %	                                乘法、除法、取模
+ - +	                                加法、减法、字符串连接
<< >> >>>	                            移位
< <= > >= instanceof	                小于、小于等于、大于、大于等于、instanceof
== != === !==	                        等于、不等于、严格相等、非严格相等
&	                                    按位与
^	                                    按位异或
|	                                    按位或
&&	                                    逻辑与
||	                                    逻辑或
?:	                                    条件
= oP=	                                赋值、运算赋值
,	                                    多重求值
------------------------------------------------------------------------------
 */
