/**
 * Created by lw on 2017/4/12.
 * 属性名的遍历
 * Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，
 * 也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
 * 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。
 */
var obj = {} ;
var a = Symbol('a') ;
var b = Symbol('b') ;

obj[a] = 'Hello' ;
obj[b] = 'Word!!!' ;

// test1、获取所有Symbol
var objSymbols = Object.getOwnPropertySymbols(obj) ;
console.log(objSymbols) ;

// test2、比较getOwnPropertySymbols和getOwnPropertyNames
var obj2 = {} ;
var foo = Symbol('foo') ;
Object.defineProperty(obj2,foo,{value : 'foobar'}) ;
for(var i in obj2 ){
    console.log((i)) ; // 无输出
}
console.log(Object.getOwnPropertyNames(obj2));
console.log(Object.getOwnPropertySymbols(obj2));

// test3、返回所有键
let obj3 = {
    [Symbol('my_key')] : 1 ,
    enum : 2 ,
    nonEnum : 3
} ;
let props = Reflect.ownKeys(obj3) ;
console.log(props);
/**
 * 由于以 Symbol 值作为名称的属性，不会被常规方法遍历得到。
 * 我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
 */
var size = Symbol('size') ;
class Collection {
    constructor(){
        this[size] = 0 ;
    }

    add(item){
        // this:Collection
        this[this[size]] = item ;
        this[size]++ ;
    }

    static sizeof(instance ) {
        return instance[size] ;
    }
}

var c = new Collection() ;
console.log(Collection.sizeof(c)) ;

c.add('foo') ;
console.log(Collection.sizeof(c)) ;
/**
 * 返回一个由给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用
 * for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。
 */
console.log(Object.keys(c));

