/**
 * Created by lw on 2017/4/12.
 * 1、set
 */
const s = new Set() ;

[2,3,4,2,3,5].forEach(x => s.add(x)) ;
/**
 * for...of语法是为各种collection对象专门定制的，
 * 并不适用于所有的object.它会以这种方式迭代出任何
 * 拥有[Symbol.iterator] 属性的collection对象的每个元素。
 *
 * 区别：
 * for...in 遍历（当前对象及其原型上的）每一个属性名称,而 for...of遍历（当前对象上的）每一个属性值:
 */
for(let i of s ){
    console.log(i) ;
}

// 两个空对象总是不相等的
s.add({}) ;
s.add({}) ;
s.add({}) ;
console.log(s.size) ;// 属性