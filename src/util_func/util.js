
/**
 * 
 * @param {*} item 过滤的对象
 * @param {*} objArr 当前对象中需要过滤属性组成的数组[attr]
 * @param {*} operatName encode/decode函数
 */
const encodeURI_url = (item , objArr , operatName) => {
    Object.keys(item).forEach(key => {
        if(Array.isArray(item[key])) {
            item[key].forEach((child , index) => {
                Object.keys(child).forEach(childKeys => {
                    if(objArr.indexOf(childKeys) >=0) {
                        item[key][index][childKeys] = operatName(item[key][index][childKeys])
                    }
                })
            })
        } else if(objArr.indexOf(key) >= 0 && !Array.isArray(item[key])) {
            item[key] = operatName(item[key])
        }
    })
    return item
}

export default {
    encodeURI_url,
}