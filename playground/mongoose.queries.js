const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
/* var id = '5acc6931209fc717c437982b22';

if(!ObjectID.isValid(id)){
  return   console.log('Id ot valid')
} */
/* 
Todo.find({
    _id:id
}).then((todos) => {
    console.log('====================================');
    console.log('Todos',todos);
    console.log('====================================');
});

Todo.findOne({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
}); */

/* var todo=Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
        
    }
    console.log('====================================');
    console.log('Todo by id',todo);
    console.log('====================================');
}).catch((e) => console.log(e)); */

var id = '5aca25ee83b153172817a4ca';
if(!ObjectID.isValid(id)){
    return   console.log('Id ot valid')
  } 
User.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
        
    }
    console.log('====================================');
    console.log('Todo by id',user);
    console.log('====================================');
});  