const {MongoClient, ObjectID} = require("mongodb");
// const mongoClient = require("mongodb").MongoClient;



const db_name = "TodoApps";
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.og("Unable to connect to MongDB server");
  }
  console.log("Conencted to mongodb server");
 client.db(db_name).collection('Todos').find({
   _id:new ObjectID("5aca02cd77eaabfce4b761bf")
 }).toArray().then((docs) =>{
console.log('================Todos=================== ');
console.log(JSON.stringify(docs,undefined,2));
console.log('====================================');
 }, (err) => {
     console.log('====================================');
     console.log('unable to fetch todos',err);
     console.log('====================================');
 }); 
 client.db(db_name).collection('Users').find({
  name:'wassim'
}).toArray().then((docs) =>{
console.log('================Todos=================== ');
console.log(JSON.stringify(docs,undefined,2));
console.log('====================================');
}, (err) => {
    console.log('====================================');
    console.log('unable to fetch todos',err);
    console.log('====================================');
}); 
    
 console.log("Conencted to mongodb server");
 client.db(db_name).collection('Todos').find().count().then((count) =>{
console.log('================Todos Count=================== ');
console.log('Todos Count : ',count);
console.log('====================================');
 }, (err) => {
     console.log('=================Error==================');
     console.log('unable to fetch todos',err);
     console.log('====================================');
 });


//   client.close();
});

//How to start server
//---mongod.exe --storageEngine=mmapv1 -dbpath /users/rymdev/mongo-data
