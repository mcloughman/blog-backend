const express = require("express")
const router = express.Router()

const {signupUser, loginUser} = require("../controllers/userController")

// login route
router.post("/api/user/login", loginUser)

// signup route
router.post("/api/user/signup", signupUser)

module.exports = router