const {MongoClient, ObjectID} = require("mongodb");
// const mongoClient = require("mongodb").MongoClient;



const db_name = "TodoApps";
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.og("Unable to connect to MongDB server");
  }
  console.log("Conencted to mongodb server");
 
//finde one and update
/* client.db(db_name).collection('Todos').findOneAndUpdate({id : new ObjectID("5aca02cd77eaabfce4b761bf")},{
$set : {
    completed: true
}
},{
    returnOriginal: false
}).then((result) => {
    console.log(result);

}); */
client.db(db_name).collection('Users').findOneAndUpdate({_id : new ObjectID("5ac9fdeb880e450564ac53d7")},{
    $set: {
        name: 'wassim '
    },
    $inc: {
        age: 1
    }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    
    });


//   client.close();
});

//How to start server
//---mongod.exe --storageEngine=mmapv1 -dbpath /users/rymdev/mongo-data
