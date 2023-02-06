const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")


/* ROUTER ENDPOINTS */

// Login Endpoint
router.post("/login", async (req, res) => {
    const response = await userController.login(req, res)

    if (response === false) {
        res.status(401).send({ error: "Email or password is invalid." })
    } else {
        res.status(200).send(response)
    }
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