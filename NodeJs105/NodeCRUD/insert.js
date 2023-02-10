const dbConnect = require('./mongodb.js')
const mongoose = require('mongoose')

const insert = async()=>{
    const db=await dbConnect();
    console.log(db.users);
    const result = db.insert()
}
insert()