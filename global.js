const {randomBytes} = require("crypto")
const cookie_secret = "dashldhe128ewhgcvasdy7et2hvhwytt2"
let SESSIONS = {}

exports.default = SESSIONS,cookie_secret,randomBytes