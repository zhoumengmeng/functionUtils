/**
 *
 *
 * @param {Object} object
 * @param {Array} path 
 * @param {*} [defaultValue='undefined']
 * @returns {*} Returns the resolved value.
 */
function get(object, path, defaultValue = 'undefined') {
    const type = typeof object
    
    if (object === null && type !== 'object') {
      return defaultValue
    }
    
    let index = 0
    const length = path.length
    while(index < length && object) {
      object = object[path[index++]]
    }
    return (index && object) ? object : defaultValue
}

export default get