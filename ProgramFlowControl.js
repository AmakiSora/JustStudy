/**
 * 程序流程控制
 * 分支控制 if-else switch
 * 循环控制 while do-while for
 */

//分支控制
a = 2
if (a === 1) {
    console.log(233)
} else if (a === 2) {
    console.log(666)
} else {
    console.log(996)
}

switch (a) {
    case 1:
        console.log(233)
        break
    case 2:
        console.log(666)
        break
    default:
        console.log(996)

}


//循环控制
while (true) {
    console.log(233)
    if (a == 2) {
        break
    }
}

do {
    console.log(777)
}
while (a == 5);


for (; ;) {
    console.log(233)
    if (a == 2) {
        break
    }
}

b = [1, 2, 3, 4]
for (var i = 0; i < b.length; i++) {
    console.log(b[i])
}

for (const i of b) {
    console.log(i)
}

for (const i in b) {
    console.log(i)
    console.log(b[i])
}


