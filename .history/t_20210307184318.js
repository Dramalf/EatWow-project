const curry = (func) => {
    var length = func.length
    console.log(func)
    var args = []
    return function curry(...curryArgs) {
        console.log(curryArgs)
    }
}
const fn = curry(function (x, y, z) {
    console.log(x, y, z);
 });
