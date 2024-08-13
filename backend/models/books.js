const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    userMail:{
        type:String,
        required:true,
    },
    rentedDate:{
        type:Number,
        required:true,
    },
    returnDate:{
        type:Number,
        required:true,
    }

},{timestamps:true});

const BookModel = mongoose.model('books',bookSchema);

module.exports = BookModel