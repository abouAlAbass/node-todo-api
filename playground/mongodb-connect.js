const mongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");



const db_name = "TodoApps";
mongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.og("Unable to connect to MongDB server");
  }
  console.log("Conencted to mongodb server");
  /*   const col = client.db(db_name).collection('Todos');
  col.insertOne({
      text: 'Something todo',
      completed:false
  }, (err, result) => {
    if (err) {
      return console.log("Unable to insert todo", err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    
  }); */
/*   const col = client.db(db_name).collection("Users");
  col.insertOne(
    {
      name: "wassim",
      age: 26,
      location: "guelma"
    },
    (err, result) => {
      if (err) return console.log("Unable to inser user to collection", err);

      console.log("====================================");
      console.log(JSON.stringify(result.ops, undefined, 2));
      console.log('The times stamps :',result.ops[0]._id.getTimestamp());
      console.log("====================================");
    }
  ); */

  client.close();
});

//How to start server
//---mongod.exe --storageEngine=mmapv1 -dbpath /users/rymdev/mongo-data
