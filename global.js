const {randomBytes} = require("crypto")
const cookie_secret = "dashldhe128ewhgcvasdy7et2hvhwytt2"
const SESSIONS = {}

module.exports = {  
    SESSIONS,
    cookie_secret,
    randomBytes
} 