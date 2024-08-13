const express = require("express")
const {handleCreateUser,updateUserDetails,deleteUser, handleLoginUser} = require('../controllers/userController')
const authenticateToken = require('../middlewares/authenticateToken')

const router = express.Router()

router.post("/login", handleLoginUser)

router.post("/signup",handleCreateUser);
router.post("/updateUser",authenticateToken ,updateUserDetails);
router.post("/deleteUser",authenticateToken, deleteUser)

module.exports = router