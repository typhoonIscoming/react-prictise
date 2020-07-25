function debounce(fn, delay) {
    // 定时器，用来 setTimeout
    let timer
    delay = delay || 300 // eslint-disable-line
    // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
    return function () { // eslint-disable-line
        // 保存函数调用时的上下文和参数，传递给 fn
        const context = this
        const args = arguments // eslint-disable-line
        // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
        clearTimeout(timer)
        // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
        // 再过 delay 毫秒就执行 fn
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

function throttle(fn, threshhold) {
    console.log('fn', fn)
    // 记录上次执行的时间
    let last
    // 定时器
    let timer
    threshhold = threshhold || 300 // eslint-disable-line
    // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
    return function () { // eslint-disable-line

        // 保存函数调用时的上下文和参数，传递给 fn
        const context = this
        const args = arguments // eslint-disable-line

        const now = +new Date()

        // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
        // 执行 fn，并重新计时
        if (last && now < last + threshhold) {
            clearTimeout(timer)

            // 保证在当前时间区间结束后，再执行一次 fn
            timer = setTimeout(() => {
                console.log('fn===', fn)
                last = now
                fn.apply(context, args)
            }, threshhold)

            // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
        } else {
            last = now
            fn.apply(context, args)
        }
    }
}

export default {
    debounce,
    throttle,
}