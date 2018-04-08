var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

//save new something

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo = new Todo({
  text: "cook lunch",
  completed: false
});
var otherTodo = new Todo({
  text: "  Some thing "
});

/* newTodo.save().then((doc) => {
console.log('====================================');
console.log('Save new Todo',doc);
console.log('====================================');
}, (e) => {
    consol.log('unable to save todo')
});*/
otherTodo.save().then(
  doc => {
    console.log("====================================");
    console.log("Save other Todo", doc);
    console.log("====================================");
  },
  e => {
    consol.log("unable to save todo", e);
  }
);

var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  }
});

var newUser = new User({ email: "admin@admin.com" });
newUser.save().then(
  doc => {
    console.log("====================================");
    console.log("new user", doc);
    console.log("====================================");
  },
  e => {
    console.log("====================================");
    console.log("Error", e);
    console.log("====================================");
  }
);
