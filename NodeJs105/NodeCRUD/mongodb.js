const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/'
const dataBase = "testDB"
const client = new MongoClient(url)

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(dataBase)
    return db.collection('users')
  }
module.exports=dbConnect;