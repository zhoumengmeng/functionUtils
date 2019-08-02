/**
 *
 * 函数防抖
 * @param {Function} fn 防抖的函数 
 * @param {number} [wait=200] 每隔wait时间执行一次
 * @param {boolean} [immediate=false] 是否立即执行，默认false
 * @returns {Function}
 */
function debounce(fn, wait = 200, immediate = false) {
    let timer = null
    let last = 0
    let context, args

    function run() {
        const interval = Date.now() - last
        if (last < wait) {
            timer = setTimeout(run, wait - interval)
        } else {
            cancel()
            fn.apply(context, args)
        }
    }

    function cancel() {
        clearTimeout(timer)
        timer = null
        last = 0
    }

    function debounced() {
        context = this
        args = arguments
        if (immediate && !last) {
            fn.apply(context, args)
        }
        last = Date.now()

        if (!timer) {
            timer = setTimeout(run, wait);
        }
    }

    debounced.cancel = cancel

    return debounced
}