const fn = curry(function (x, y, z) {
    console.log(x, y, z);
 });
  
const doCurry = curry(fn);
const curry = (func) => {
    var length=func.length
    var args = []
    return function duCurry(...curryArgs) {
        console.log(curryArgs)
    }
}

