/**
 * Created by lw on 2017/4/12.
 * 消除魔术字符串
 * 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。
 */

var shapeType = {
    // 这个triangle等于哪个值并不重要,只要确保不会个其它的shapeType属性相同就行
    triangle : Symbol(),// 三角形
    rect : Symbol() // 矩形
} ;
function getArea(shape, options) {
    var area = 0 ;
    switch (shape){
        case shapeType.triangle :
            area = .5 * options.width * options.height ;
            break;
        case shapeType.rect:
            area = options.width * options.height ;
            break ;
    }
    return area ;
}

var triangleArea = getArea(shapeType.triangle,{width : 100 , height : 100 }) ;
var rectleArea = getArea(shapeType.rect,{width : 100 , height : 100 }) ;
console.log(triangleArea) ;
console.log(rectleArea) ;