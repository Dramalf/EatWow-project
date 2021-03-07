const curry = (func) => {
    var length=func.length
    console.log(length)
}
const fn = curry(function (x, y, z) {
    console.log(x, y, z);
 });
  
