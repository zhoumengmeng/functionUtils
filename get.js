/**
 *
 *
 * @param {Object} object
 * @param {Array|string} path string只支持.,eg: a.b.c
 * @param {*} defaultValue
 * @returns {*} Returns the resolved value.
 */
function get(object, path, defaultValue) {
    const result = (object !== null && typeof object === 'object') ? undefined : baseGet(obj, path)
    return result === undefined ? defaultValue : result
}

function baseGet(object, path) {
    const pathArr = []
    if (Array.isArray(path)) {
        pathArr = path
    } else {
        pathArr = path.split('.')
    }

    let index = 0
    const length = pathArr.length
    while(index < length && object) {
      object = object[pathArr[index++]]
    }
    return (index && index === length) ? object : undefined
}

export default get