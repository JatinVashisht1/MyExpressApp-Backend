const { MongoClient } = require('mongodb');



const databaseName = "myNewDatabase"
let url = "mongodb://127.0.0.1:27017/mydb";
let collectionName = "customers"

function createCollection() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db(databaseName)
        dbo.createCollection("customers")
    });
}

function insertElements(data) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        let dbo = db.db(databaseName)
        dbo.collection(collectionName).insertMany(data, function(err, res){
            if(err) throw err;
            console.log("data is inserted, data is ", data)
        });
    })
}

function getAllElements(callback){
    var dataToReturn = "";
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        let dbo = db.db(databaseName);
        let dat = dbo.collection(collectionName)
        dat.find().toArray(function (err, res) {
            if (err) throw err;
            // console.log(res);
            dataToReturn = res.toString()
            // db.close();
            return callback(res)
        });
        // console.log("dat is ", dat)
        // return dat;
    });

    // MongoClient.connect("mongodb://localhost:27017/db1", function (err,db) {
    //   if (err) {
    //     return console.dir(err);
    //   }
    //   let dbo = db.db(databaseName);
    //   dbo.find().toArray(function (err, items) {
    //     console.log(items);       
    //     return callback(items);     
    //   });
    // });
    console.log("data to return is ",dataToReturn);
    // return dataToReturn;
}

module.exports = {insertElements, createCollection, getAllElements}
// module.exports = {createCollection}