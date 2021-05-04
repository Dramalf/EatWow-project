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
app.post('/signin', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*')
    const { username, password } = request.body
    //console.log(request.body)
    mongodb.find('users', { username })
        .then(async(data) => {
            let sendTags = []
            let userid = ''
            let msg = ''
            let userData={}
            if (data.length === 0) {
                console.log("创建了",username)
                let res=await mongodb.insertOne('users', { username, password, meals: [], alltags: [] })
                userid =  res.ops[0]._id
                msg= '创建成功' 
            }
            else if (password === data[0].password) {
                    sendTags = data[0].alltags.filter((tag) => tag)
                    userid = data[0]._id
                    msg='加载成功'
                    
                   
                    //console.log(sendTags)
                   // response.send(userData)
                }
                else {
                    msg='该用户已创建'
                    
                }
                userData = {
                    sendTags,
                    userid,
                    msg
                }
                userData = JSON.stringify(userData)
                return userData
            }
        )
        .then((userData) => {
            response.send(userData)
            console.log(userData)
        })
})

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
          return allmeals
        })
        .then((allmeals) => {
            let rNum = randomNum(0, allmeals.length - 1)
            let selectedMeal = JSON.stringify(allmeals[rNum])
            return selectedMeal
        })
        .then((selectedMeal) => {
            response.send(selectedMeal)
        })
    
}) 
app.post('/addmeal', bodyParser.json({ limit: '10mb' }), (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*')
    const { username, userid, mealName, picUrl, tags, description } = request.body
    mongodb.updateOne('users', { username: username, userid: userid }, { $addToSet: { meals: JSON.stringify({ mealName, picUrl, tags, description }) } })
    tags.map((tag, index, arr) => {
        mongodb.updateOne('users', { username: username }, { $addToSet: { alltags: tag } })
            .then(() => {
                if (index === arr.length - 1) {
                    mongodb.find('users', { username, userid })
                    .then((data) => {
                        let sendTags = data[0].alltags.filter((tag)=> tag!=='')
                        console.log(sendTags)
                        response.send(sendTags)
        })
                }
                
        })
    })
})

app.listen(5053,(err)=>{
	if(!err) console.log('EATWOW启动成功了');
})

 