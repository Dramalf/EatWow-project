
const curry = (func) => {
    var length=func.length
    var args = []
    return function func(...curryArgs) {
        console.log(curryArgs)
    }
}
const fn = curry(function (x, y, z) {
    console.log(x, y, z);
 });
