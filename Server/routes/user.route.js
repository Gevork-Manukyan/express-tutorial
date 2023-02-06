const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")


/* ROUTER ENDPOINTS */

// Login Endpoint
router.get("/login", async (req, res) => {
    const response = await userController.login(req, res)
})

// Register Endpoint
router.post("/register", async (req, res) => {
    const response = await userController.register(req, res)
    res.status(200).send(response)
})

router.get("/getUsers", async (req, res) => {
    const users = await userController.getUsers(req, res)
    res.status(200).send(users)
})

module.exports = router