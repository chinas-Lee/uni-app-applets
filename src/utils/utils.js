/*
 * 原型上的工具函数
 * */
const Utils = {
    
        try {
            let res = ''
            switch (Object.prototype.toString.call(item)) {
                case '[object Array]':
                    res = 'Array'
                    break
                case '[object Object]':
                    res = 'Object'
                    break
                case '[object String]':
                    res = 'String'
                    break
                case '[object Number]':
                    res = 'Number'
                    break
                case '[object Boolean]':
                    res = 'Boolean'
                    break
                case '[object Undefined]':
                    res = 'Undefined'
                    break
                case '[object Null]':
                    res = 'Null'
                    break
                case '[object FormData]':
                    res = 'FormData'
                    break
                default:
                    res = false
            }
            return res
        } catch (err) {
            console.log(err)
            return false
        }
    }
}

export default Utils