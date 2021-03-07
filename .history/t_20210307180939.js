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
  sum(1, 2, 3, 4, 10).then(result => {
    console.log('result', result); // 20
  });
  // sum实现
  // ----------------------------------
function callback(error, result) {
        //console.log(result)
        
        return result
  }
 async function sum(...args){
      var result = 0
      console.log(args)
      args.map((argument) => {
          await asyncAdd(argument, result,callback)
          console.log(result)
      })
      return null
  }