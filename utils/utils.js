/**
 * Created by lub874 on 2018/1/30.
 */

/**
 * 定义对象属性
 * @param obj
 * @param key
 * @param val
 * @param enumerable 布尔值，是否枚举
 */
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value:val,
        enumerable: !!enumerable,
        configurable: true,
        writable: true
    })
}

/**
 * 直接将对象的__proto__指向src
 * @param target
 * @param src
 */
function protoArgument(target, src) {
    target.__proto__ = src;
}

/**
 * 遍历属性，并加入对象中，不可枚举
 * @param target
 * @param src
 * @param keys
 */
function copyArgument(target, src, keys) {
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        def(target, key, src[keys])
    }
}

/**
 * 返回一个布尔值，判断对象是否具有指定的属性
 * @param obj
 * @param key
 * @returns {*}
 */
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

module.exports = {
    def: def,
    protoArgument: protoArgument,
    copyArgument: copyArgument,
    hasOwn: hasOwn
};


class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor (slideLength) {
        super (slideLength, slideLength)
    }

    getArea () {
        return this.height * this.width
    }

    set slideLength (newLength) {
        this.height = newLength;
        this.width = newLength;
    }
}

var square = new Square(2);