const curry = (func) => {
    const c = (...args) => (args.length === fn.length) ?
            fn(...args) : (..._args) => c(...args, ..._args)
    return c
}
const fn = curry(function (x, y, z) {
    console.log(x, y, z);
 });
