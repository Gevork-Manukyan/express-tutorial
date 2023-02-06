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

        const user = new User({
            firstName,
            lastName,
            email,
            password
        })

        try {
            return await user.save()
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }

    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

exports.getUsers = async (req, res) => {
    const users = await User.find({})
    return users
}