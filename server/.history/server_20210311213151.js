const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectId;
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
                }
                else {
                    msg='该用户已创建,但密码不对哦'
                    
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
    const {  userid,tags }=request.body
    mongodb.find('users', { _id:ObjectId(userid) })
        .then((data) => {
            let allmeals = data[0].meals.map(meal => {
               // console.log("**", meal)
                let hasTag=false
                let mealObj = JSON.parse(meal)
                for (let i = 0; i < mealObj.tags.length - 1;i++) {
                    if (tags.includes(mealObj.tags[i])) {
                        //console.log(mealObj.tags[i])
                        hasTag = true
                        break
                    }
                    
               }
                return hasTag
            })
          return allmeals
        })
        .then((allmeals) => {
            console.log(allmeals.length)
            let rNum = randomNum(0, allmeals.length - 1)
            let selectedMeal = JSON.stringify(allmeals[rNum])
            return selectedMeal
        })
        .then((selectedMeal) => {
            response.send(selectedMeal)
        })
    
}) 
app.post('/addmeal', bodyParser.json({ limit: '10mb' }),async (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*')
    const { userid, mealName, picUrl, tags, description } = request.body
    mongodb.updateOne('users', { _id:  ObjectId(userid) }, { $addToSet: { meals: JSON.stringify({ mealName, picUrl, tags, description }) } })
    tags.map(async (tag, index, arr) => {
        mongodb.updateOne('users', { _id: ObjectId(userid) }, { $addToSet: { alltags: tag } })
            .then(async() => {
                if (index === arr.length - 1) {
                    let findData = await mongodb.find('users', { _id: ObjectId(userid) })
                    let sendTags = findData[0].alltags.filter((tag) => tag !== '')
                   // console.log(sendTags)
                    response.send(sendTags)
                }
    })
       
       
    })
})

app.listen(5053,(err)=>{
	if(!err) console.log('EATWOW启动成功了');
})

 