const express = require("express")
const {handleCreateUser,updateUserDetails,deleteUser, handleLoginUser} = require('../controllers/userController')

const router = express.Router()

router.post("/login", handleLoginUser)

router.post("/createUser",handleCreateUser);
router.post("/updateUser", updateUserDetails);
router.post("/deleteUser", deleteUser)

module.exports = router