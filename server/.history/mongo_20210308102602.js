var mongoClient=require("mongodb").MongoClient;

//连接数据库
var connect=function(callback){
    mongoClient.connect(setting.url,{ useUnifiedTopology: true },function(error,client){
        if(error) throw error;
        callback(client);
    });
}
//查找方法
exports.findAll=function(tablename,data,callback){
    connect(function(client){
        var dbbase=client.db(setting.dbname);
        dbbase.collection(tablename).find(data).toArray(function(err,res){
            if(err) throw err;
            callback(res);
            client.close();
        });
    });
}
//增加单条数据
exports.insertOne=function(tablename,data,callback){
    connect(function(client){
        var dbbase=client.db(setting.dbname);
        dbbase.collection(tablename).insertOne(data,function(err,res){
            if(err) throw err;
            callback(res.result);
            client.close();
        });
    });
}
//增加多条数据
exports.insertMany=function(tablename,data,callback){
    connect(function(client){
        var dbbase=client.db(setting.dbname);
        dbbase.collection(tablename).insertMany(data,function(err,res){
            if(err) throw err;
            callback(res.result);
            client.close();
        });
    });
}
//删除单条数据
exports.deleteOne=function(tablename,data,callback){
    connect(function(client){
        var dbbase=client.db(setting.dbname);
        dbbase.collection(tablename).deleteOne(data,function(err,res){
            if(err) throw err;
            callback(res);
            client.close();
        });
    });
}
//修改单条数据
exports.updateOne=function(tablename,data,set,callback){
    connect(function(client){
        var dbbase=client.db(setting.dbname);
        dbbase.collection(tablename).updateOne(data,set,function(err,res){
            if(err) throw err;
            callback(res);
            client.close();
        });
    });
}
//数据分页
exports.paging=function(tablename,now,num,sort,callback){
    connect(function(client){
        var dbbase=client.db(setting.dbname);
        dbbase.collection(tablename).find().skip(now).limit(num).sort(sort).toArray(function(err,res){
            if(err) throw err;
            callback(res);
            client.close();
        });
    });
}
