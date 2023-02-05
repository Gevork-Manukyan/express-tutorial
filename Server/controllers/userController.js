const User = require("../models/user.model")

exports.login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send({ error: "Email or password is invalid." });

    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) return res.status(401).send({ error: "Email or password is invalid." });

    res.status(200)
}

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body

        console.log("ENTER REGISTER")

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
          });

        console.log(user)
        return user
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}