/**
 *
 * 函数节流
 * @param {Function} fn 节流的函数
 * @param {number} [wait=200] 每隔wait时间执行一次
 * @param {Boolean} immediate 是否立即执行
 * @returns {Function}
 */
function throttle(fn, wait = 200, immediate) {
    let timer = 0
    let last = 0

    return function() {
        const context = this, args = arguments
        const now = Date.now()

        clearTimeout(timer)
        if (immediate && !last) {
            fn.apply(context, args)
        }
        if (!last) {
            last = now
        }

        if (now - last > wait) {
            fn.apply(context, args)
            last = now
        } else {
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, wait)
        }
    }
}
