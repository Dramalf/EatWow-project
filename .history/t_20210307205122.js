const randomBetween = (start, end) => {
    let n = Math.random() * (end - start + 1) + start;
    return Math.floor(n);
}
const asyncAdd = (a, b, callback) => {
    let ms = randomBetween(100, 1000);
    setTimeout(() => {
      let error = null;
      let result = a + b;
        callback(error, result);
    }, ms)
  };

  // sum实现
  // ----------------------------------
var s;
function saveCallback(result) {
    function callback(err,result) {
        return result
    }
  }
async function sum(...args) {
    var result = [0]
    var error=null
      args.map((arg) => {
          asyncAdd(arg,result,saveCallback(result))
      })
      return result
}
sum(1, 2, 3, 4, 10).then(result => {
    console.log('result', result); // 20
  });