const express = require('express')
const app = express()
var bodyParser = require('body-parser');

var mongodb = require('./mongo');
mongodb.init('mongodb://localhost:27017/test');
//mongodb.insertOne('users',{username:'mlf',userid:"916",meals:[],alltags:[]})
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
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 
let u=''

app.post('/randommeal',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*')
    console.log(request.body)
    const { username, userid }=request.body
    mongodb.find('users', { username, userid })
        .then((data) => {
            let allmeals = data[0].meals.map(meal => {
               return JSON.parse(meal)
            })
            console.log(allmeals[0])
        //console.log("##",JSON.parse(data[0].meals[0]))
    })
    const url='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.miaolaotai.com%2Fadmin%2Fnewsbmp%2F20150510075832QQ%E6%88%AA%E5%9B%BE20150510195104.png&refer=http%3A%2F%2Fwww.miaolaotai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617617037&t=4880b34638f33148e0c6d687dd4eedb2'
    const data = {
        name: '锅包肉',
        pic:u||url
       }  
     let str = JSON.stringify(data);
 
	response.send(str)   
}) 
app.post('/addmeal', bodyParser.json({ limit: '10mb' }), (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*')
    const { username, userid, mealName, picUrl, tags, description } = request.body
    mongodb.updateOne('users', { username: username, userid: userid }, { $addToSet: { meals: JSON.stringify({ mealName, picUrl, tags, description }) } })
    tags.map((tag) => {
        console.log(1)
        mongodb.updateOne('users', { username: username }, { $addToSet: { alltags: tag} })
    })
})

app.listen(5053,(err)=>{
	if(!err) console.log('EATWOW启动成功了');
})

 