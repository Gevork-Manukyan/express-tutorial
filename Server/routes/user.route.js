const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")


/* ROUTER ENDPOINTS */

// Login Endpoint
router.get("/login", async (req, res) => {
    userController.login(req, res)
})

// Register Endpoint
router.post("/register", async (req, res) => {
    userController.register(req, res)
})

module.exports = router