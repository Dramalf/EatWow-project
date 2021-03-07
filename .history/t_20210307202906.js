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
  function callback(error,result){
        return result
  }
  async function sum(...args){
        let result=0
      args.map((argument)=>{asyncAdd(argument,result,callback)})
      return result
  }