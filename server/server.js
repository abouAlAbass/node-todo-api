var express = require('express');
var bodyParser =  require('body-parser');
const {ObjectID} = require('mongodb');
var{mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// store a new todo
app.post('/todos',(req,res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});
//get all todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// Get /todos/1245789

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // valid id using isValid
  if(!ObjectID.isValid(id)){
    return   res.status(404).send({error:'Id is not valid'});
  }

  //findbyID
  Todo.findById(id).then((todo) => {
    if(!todo){
        return res.status(404).send({
          error : 'theris no todo with this id',
          id});
        
    }
    return res.status(200).send({todo});
},(e) => {
    return res.status(400).send({});
});  
    
 
});



app.listen(3000, () => {
  console.log('====================================');
  console.log('started on port 3000');
  console.log('====================================');
});

module.exports={app};



