const curry = (func) => {
    const c = (...args) => (args.length === func.length) ?
        func(...args) : (..._args) => c(...args, ..._args)
    console.log(typeof c)
    return c
}
const fn = curry(function (x, y, z) {
    console.log(x, y, z);
});
 fn(1,2,3)
