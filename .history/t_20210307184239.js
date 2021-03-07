const curry = (func,curryArgs) => {
    var length = func.length
    console.log(curryArgs)
    var args = []
    return function curry(...curryArgs) {
        console.log(curryArgs)
    }
}
const fn = curry(function (x, y, z) {
    console.log(x, y, z);
 });
