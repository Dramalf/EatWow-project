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
  function callback(s){
        return(err,result)=>{
        s[0]=result
      }
  }
  function timeout()
  {
        return new Promise(resolve=>setTimeout(resolve,1000))
  }
  async function sum(a,b,c,d,e){
      let s=[0]
      let count=await timeout()
      .then(()=>{
            asyncAdd(s[0],a,callback(s))
          return timeout()
      })
            .then(()=>{
            asyncAdd(s[0],b,callback(s))
          return timeout()
      })
          .then(()=>{
            asyncAdd(s[0],c,callback(s))
          return timeout()
      })
                .then(()=>{
            asyncAdd(s[0],d,callback(s))
          return timeout()
      })
                      .then(()=>{
            asyncAdd(s[0],e,callback(s))
          return timeout()
      }).then(()=>{return s[0]})
          return count
  }
  