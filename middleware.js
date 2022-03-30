function verify_auth (req,res,next){
    const cookie = req.cookies['sessionId']
    if (!cookie){
        res.status(401).send("No token provided : Unauthorized")
        return
    }
    next()
}

function verify_admin (req,res,next){
    const cookie = req.cookies["user"]
    if (!cookie){
        res.status(401).send("No token provided : Unauthorized")
        return
    }
    if (!(cookie[1])){
        res.status(403).send("You are not an admin : Forbidden")
        return
    }
    next()
}

// function verify_author (req,res,next){
//     const cookie = req.cookies["user"]
//     if (!cookie){
//         res.status(401).send("No token provided : Unauthorized")
//         return
//     }
//     if (!(cookie[0])){
//         res.status(403).send("You are not an admin : Forbidden")
//     return
//     }
//     next()
// }

module.exports = {
    verify_auth,
    //verify_author,
    verify_admin   
}
