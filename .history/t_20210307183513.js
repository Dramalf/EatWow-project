const curry = (func) => {
    var length=func.length
    var args = []
    return function duCurry() {
        var curryArgs = Array.prototype.slice.call(arguments);
        console.log(curryArgs)
        args=args.concat(curryArgs)
    }
}
const fn = curry(function (x, y, z) {
    console.log(x, y, z);
 });
  
