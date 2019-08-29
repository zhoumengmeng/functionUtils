/**
 *
 *
 * @param {Object} object
 * @param {Array|string} path string只支持.,eg: a.b.c
 * @param {*} defaultValue
 * @returns {*} Returns the resolved value.
 */
function get(object, path, defaultValue = undefined) {
    if (object === null || typeof object !== 'object') {
        return defaultValue
    }

    let pathArr = []
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
    return (index && object !== undefined) ? object : defaultValue
}
