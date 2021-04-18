export function debounce(fn, delay) {
    let timer = null;
    //利用闭包，维护全局纯净
    return function(...args) {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

export function throttle(fn, delay) {
    let previous = 0;
    return function () {
        let now = +new Date();
        if(now - previous > delay) {
            fn.apply(this);
            previous = now;
        }
    }
}

export function