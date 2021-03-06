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
function saveCallback(s) {
    function callback(err,result) {
        s[0]=result
    }
}
  function timeout(delay) {
return new Promise(resolve=>setTimeout(resolve, 1000))      
  }
async function sum(...args) {
    var s =[ 0]
    var error=null
    args.map((arg) => {
          timeout(1000).then(()=>
          asyncAdd(arg, s[0], callback(s))
          )
      })
      return result
}
sum(1, 2, 3, 4, 10).then(result => {
    console.log('result', result); // 20
  });