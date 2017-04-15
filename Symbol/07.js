/**
 * Created by lw on 2017/4/12.
 * Symbol内置值
 */
// 1、hasInstance
class MyClass {
    // 实例方法
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }

    // 静态方法
    static [Symbol.hasInstance](obj) {
        return Number(obj) % 2 == 0;
    }
}
console.log([1, 2, 3] instanceof new MyClass());
console.log(2 instanceof MyClass);

// 2、isConcatSpreadable
let arr1 = ['c', 'd'];
console.log(['a', 'b'].concat(arr1, 'e'));
console.log(arr1[Symbol.isConcatSpreadable]);//undefined
let arr2 = ['3', '4'];
arr2[Symbol.isConcatSpreadable] = false;
console.log([1, 2].concat(arr2, 5));//[ 1, 2, [ '3', '4' ], 5 ]

// 对于一个类来说,Symbol.isConcatSpreadable属性必须写成实例的属性。
class A extends Array {
    constructor(args) {
        super(args);
        // 实例属性
        this[Symbol.isConcatSpreadable] = true;
    }
}

// 3、species:指向当前对象的构造函数。创造实例时，默认会调用这个方法，即使用这个属性返回的函数当作构造函数，来创造新的实例对象
class MyArray extends Array {
    constructor(args) {
        super(args);
    }

    // 覆盖species到父级的Array构造函数上
    static get [Symbol.species]() {
        console.log('get execute...')
        return Array;
    }
}
let a1 = new MyArray(1, 2, 3);
var mapped = a1.map(x => x * x);
console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true

// 4、match：指定了匹配的是正则表达式而不是字符串 String.prototype.match() 方法会调用此函数。
// "/bar/".startsWith(/bar/) ;TypeError: First argument to String.prototype.startsWith must not be a regular expression

var re = /foo/;
// 默认为TRUE
re[Symbol.match] = false; // match 属性的表达式检查会认为该象不是正则表达式对象 startsWith 和 endsWith 方法将不会抛出 TypeError。
console.log("/foo/".startsWith(re)); // true
console.log("/baz/".startsWith(re)); // false

// 5、unscopables:指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。

// 没有unscopables
class MyClass2 {
    foo() {
        return 1;
    }
}

var foo = function () {
    return 2;
}
with (MyClass2.prototype) {
    console.log(foo()) ; //1
}

// 有unscopables
class MyClass3 {
    foo() {
        return 1;
    }

    get [Symbol.unscopables](){
        console.log('get execute ... ')
        return {foo : true} ;
    }

}

with (MyClass3.prototype){
    foo();
    console.log(foo()) ; // 2
}

