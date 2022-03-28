const jwt = require("jsonwebtoken");

//Clé de signature du token a garder secrete

const JWT_SIGN_SECRET = "z654b1nb56teq1n16t5seq1n65q14ren65sr1s61sr61"

function generateTokenForUser(user) {
    return jwt.sign(
        {
            user_id : user.user_id,
            isAdmin: false
        }, 
        JWT_SIGN_SECRET
    );
}

function generateTokenForAdmin(user) {
    return jwt.sign(
        {
            user_id: user.user_id,
            isAdmin: true
        }, 
        JWT_SIGN_SECRET
    );
}

function decrypteToken(token) {
    const decoded = jwt.verify(token, JWT_SIGN_SECRET);
    if (!decoded) {
        return false;
    }
    return decoded;
}

module.exports = { generateTokenForUser, decrypteToken, generateTokenForAdmin }