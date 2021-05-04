const express = require('express')
const app = express()
var bodyParser = require('body-parser');

var mongodb = require('./mongo');
mongodb.init('mongodb://localhost:27017/test');


app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use((request,response,next)=>{
	console.log('有人请求服务器1了');
	console.log('请求来自于',request.get('Host'));
	console.log('请求的地址',request.url);
	next() 
})

let u=''

app.post('/randommeal',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*')
console.log(request.body)
    const url='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.miaolaotai.com%2Fadmin%2Fnewsbmp%2F20150510075832QQ%E6%88%AA%E5%9B%BE20150510195104.png&refer=http%3A%2F%2Fwww.miaolaotai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617617037&t=4880b34638f33148e0c6d687dd4eedb2'
    const data = {
        name: '锅包肉',
        pic:u||url
       } 
     let str = JSON.stringify(data);
 
	response.send(str)   
}) 
app.post('/addmeal',bodyParser.json({limit: '10mb'}),(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*')
    const {username,userid,mealName,picUrl,tags,description}=request.body
   mongodb.updateOne('users',{username:username,userid:userid},{$addToSet:{meals:{mealName,picUrl,tags,description}}})
.then(res=>console.log("##",res))
})

app.listen(5053,(err)=>{
	if(!err) console.log('EATWOW启动成功了');
})

 