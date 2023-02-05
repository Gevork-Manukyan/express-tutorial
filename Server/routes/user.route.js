const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")


/* ROUTER ENDPOINTS */

// Login Endpoint
router.get("/login", async (req, res) => {
    const response = await userController.login(req, res)
    console.log(response)
})

// Register Endpoint
router.post("/register", async (req, res) => {
    const response = await userController.register(req, res)
    console.log(response)
})

module.exports = router