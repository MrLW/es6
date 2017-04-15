/**
 * Created by lw on 2017/4/12.
 * 模块的单例
 */

const FOO_KEY = Symbol.for('foo') ;

function A() {
    this.foo = 'Hello' ;
}
if(!global[FOO_KEY]){
    global[FOO_KEY] = new A() ;
}

module.exports = global[FOO_KEY] ;

