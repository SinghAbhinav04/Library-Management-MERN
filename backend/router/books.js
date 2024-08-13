const express = require("express")
const {handleAddBook} = require('../controllers/bookHandler')
const authenticateToken = require('../middlewares/authenticateToken')

const router = express.Router();

router.post("/", authenticateToken,handleAddBook)

module.exports = router

