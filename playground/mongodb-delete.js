const {MongoClient, ObjectID} = require("mongodb");
// const mongoClient = require("mongodb").MongoClient;



const db_name = "TodoApps";
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.og("Unable to connect to MongDB server");
  }
  console.log("Conencted to mongodb server");
 
//delete Many
/* client.db(db_name).collection('Todos').deleteMany({"text" : "eat lunch"}).then((result) => {
    console.log(result);
}); */
//delete one
/* client.db(db_name).collection('Todos').deleteOne({"text" : "eat lunch"}).then((result) => {
    console.log(result );
}); */

//findOneAnddelete

/* client.db(db_name).collection('Todos').findOneAndDelete({completed : false}).then((result) => {
    console.log(result);
}); */


//   client.close();
});

//How to start server
//---mongod.exe --storageEngine=mmapv1 -dbpath /users/rymdev/mongo-data
