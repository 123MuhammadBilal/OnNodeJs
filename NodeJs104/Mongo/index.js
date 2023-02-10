const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/'
process.setMaxListeners(20);
const dataBase = "testDB"
const client = new MongoClient(url)

async function dbConnect(){
  let result = await client.connect();
  let db = result.db(dataBase)
  return db.collection('users')
  // let response = await collection.find({}).toArray();
  // console.log(response);
}

// connection with database
// dbConnect().then((resp)=>{
//   resp.find().toArray().then((data)=>{
//     console.log(data)
//   })
// })

// console.log(dbConnect())

const main = async ()=>{
  let data = await dbConnect();
  data =await data.find().toArray();
  console.warn(data);
}
main()