/**
 * Created by lw on 2017/4/12.
 * Symbol作为属性名
 */
var mySymbol = Symbol();

// 写法一
var obj1 = {};
obj1[mySymbol] = 'Hello';

// 写法二
var obj2 = {
    [mySymbol]: 'Word'
}
// 写法三
var obj3 = {};
/**
 * 定义哥属性
 */
Object.defineProperty(obj3, mySymbol, {value: '!!!'});

console.log(obj1[mySymbol]);
console.log(obj2[mySymbol]);
console.log(obj3[mySymbol]);


// Symbol值作为对象属性名时，不能用点运算符
var mySymbol = Symbol();
var obj4 = {};
// 注意这个作为对象属性名时,此时不是Symbol,只是简单属性名
// a.mySymbol = 'Hello Word!!!' ;
// console.log(obj4[mySymbol]) ; // symbol
// console.log((obj4['mySymbol'])) ; // 简单属性

// 3、在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中。
let s = Symbol();
let obj5 = {
    /**
     *  需要注意的是,如果这里的s不加[],则s代表的就不是Symbol
     */
    [s]: function (args) {
        console.log('args:' + args);
    }
};

obj5[s](123);

// 4 、增强的对象写法
let obj6 = {
    [s] (args){
        console.log('args:' + args ) ;
    }
}

obj6[s]('456') ;


// Symbol类型还可以用于定义一组常量，保证这组常量的值都是不相等的。
/*log.leves = {
    DEBUG : Symbol('debug'),
    INFO : Symbol('info'),
    WARN : Symbol('warn')
}
console.log(log.leves.DEBUG,'debug message') ;
console.log(log.leves.INFO,'info message ') ;*/
const COLOR_RED = Symbol() ;
const COLOR_GREEN = Symbol() ;
function getComplement(color) {
    switch (color){
        case COLOR_GREEN:

            return COLOR_GREEN ;
        case COLOR_RED:
            return COLOR_RED ;
        default:
            throw new Error('Undefined Color') ;
    }
}




