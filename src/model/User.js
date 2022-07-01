const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlenght: 20,
    },
    description: {
        type: String,
        required: true,
        uinque: true,
        minlength: 3,
        maxlenght: 200,
    },
  },
  {timestamps:true}
);

const userModel = model("todos", userSchema)
module.exports = userModel;