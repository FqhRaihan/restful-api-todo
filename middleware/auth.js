const jwt = require("jsonwebtoken")

const Key = "123"

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization

    if (!header) {
        res.json({
            message: "Undefined Header"
        })
        return
    }

    const token = header.split(" ")[1]

    if (!token) {
        res.json({
            message: "Invaid Token"
        })
        return
    }
    const payload = jwt.verify(token, Key)

    req.payload = payload

    next()
} 

module.exports = verifyToken