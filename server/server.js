var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//save new something 

var Todo = mongoose.model('Todo', {
    text : {
        type: String
    } ,
    completed:{
        type :Boolean
    },
    completedAt:{
        type : Number
    }
});


var newTodo = new Todo({
text : 'cook lunch',
completed:false
}); 
var otherTodo = new Todo({
    text : 'eat the lunch',
    completed:false
    }); 

newTodo.save().then((doc) => {
console.log('====================================');
console.log('Save new Todo',doc);
console.log('====================================');
}, (e) => {
    consol.log('unable to save todo')
});
otherTodo.save().then((doc) => {
    console.log('====================================');
    console.log('Save other Todo',doc);
    console.log('====================================');
    }, (e) => {
        consol.log('unable to save todo')
    });