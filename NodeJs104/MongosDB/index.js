const {MongoClient}=require('mongodb')
const url = 'mongodb://localhost:27017'
const dataBase='e-comm'
const Client = new MongoClient(url)

async function getData(){
    let result = await Client.connect();
    console.log('waite for database connectivity')
    let db = result.db(dataBase);
    let collection=db.collection('products');
    console.log(collection.find({}).toArray());

}
getData();

