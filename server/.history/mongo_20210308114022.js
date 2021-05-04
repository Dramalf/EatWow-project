var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = null;


/**
 * 数据库连接函数
 * @param collectionName    集合的名字
 */
function connect(collectionName) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log("连接成功！");
        //连接到表
            var dbo=db.db('eatwow')
        var collection = dbo.collection(collectionName);
        resolve({collection, db});
    });
})
} 

/**
 *
 * @param op 操作的名字
 * @returns {Function}
 */
function operation(op) {
    /**
     * @param collectionName 要操作的 collection 的名字
     * @param data1 第一组参数，根据操作不同含义不同
     * @param data2 第二组参数，根据操作不同含义不同
     */
    return function (collectionName, data1, data2) {
        return new Promise((resolve, reject) => {
            connect(collectionName).then(({ collection, db }) => {
            switch (op) {
            case 'insertOne': {
                    //  data1 为要插入的数据
                    collection.insert(data1, returnResult)
                    break;
                }
            case 'updateOne': {
                    //  data1 为查询参数
                    //  data2 为修改参数
                    collection.update(data1, data2, returnResult)
                    break;
                }
            case 'find': {
                    //  data1 为查询参数
                    collection.find(data1).toArray(returnResult)
                    break;
                }
            case 'remove': {
                    // 为查询参数
                    collection.remove(data1, returnResult)
                    break;
                }
            }
            function returnResult(err, result) {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
            db.close();
        }
    })
    })
    }
}

/**
 * 初始化方法
 * @param str    //   数据库连接的字符串
 */
function init(str) {
    DB_CONN_STR = str;
}

/**
 *
 * @module
 */
module.exports = {
    insertOne: operation('insertOne'),
    find: operation('find'),
    updateOne: operation('updateOne'),
    remove: operation('remove'),
    init: init,
    getCollection: connect  //   获取数据库连接，方便自定义复杂的查询操作
};