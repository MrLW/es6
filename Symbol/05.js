/**
 * Created by lw on 2017/4/12.
 * 几个常用方法
 * 重新使用同一个Symbol值:Symbol.for
 * 它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值
 */
var s2 = Symbol.for('foo') ;
var s1 = Symbol.for('foo') ;
console.log(s1 == s2 ) ;
