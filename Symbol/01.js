/**
 * Created by lw on 2017/4/12.
 */
let s = Symbol('foo') ;
let s2 = Symbol('bar') ;
console.log(s) ;//Symbol(foo)
console.log(s2) ;//Symbol(bar)

console.log(typeof s) ;

// Symbol的参数是一个对象
const obj = {
    toString(){
        return 'abc' ;
    }
} ;
const sym = Symbol(obj) ;

