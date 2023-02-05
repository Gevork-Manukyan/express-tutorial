const express = require("express")
const app = express()
const User = require("./routes/user.route")
const mongoose = require("mongoose")



// Middleware
app.use(express.json())

// Routes
app.use("/user", User)


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3003, () => {
    console.log("Server started on port http://localhost:3003")
})