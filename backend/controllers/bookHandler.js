const BookModel = require("../models/books")

async function handleAddBook(req, res) {
    try {
      const { title, author, rentedDate, returnDate } = req.body;
  
      // Use the logged-in user's email from the JWT
      const userMail = req.user.email;
  
      const newBook = new BookModel({
        title,
        author,
        userMail,
        rentedDate,
        returnDate,
      });
  
      await newBook.save();
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: "Error adding book: " + error.message });
    }
  }

  module.exports={
    handleAddBook,
  }