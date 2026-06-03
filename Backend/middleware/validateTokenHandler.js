const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
 //behörig request skickas vidare till controllsern, annars returneras error
const validateToken = asyncHandler(async (req, res, next/* next ok i express klar fortsätt om token är ok*/) => {
    // hämtar token från Authorization header
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]; // tar ut token från "Bearer <token>"
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = decoded.user;
            next();
        });
    }

    if (!token) {
        res.status(401);
        throw new Error("No token, User is not authorized");
    }
});

module.exports = validateToken;