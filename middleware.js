function verify_auth (req,res,next){
    const cookie = req.cookies["user"]
    if (!cookie){
        res.status(401).send("No token provided : Unauthorized")
        return
    }
    const decoded = auth.decrypteToken(cookie)
    if (!decoded){
        res.status(401).send("No token provided : Unauthorized")
        return
    }
    req.token = decoded
    next()
}

function verify_admin (req,res,next){
    const cookie = req.cookies["user"]
    if (!cookie){
        res.status(401).send("No token provided : Unauthorized")
        return
    }
    const decoded = auth.decrypteToken(cookie)
    if (!decoded){
        res.status(401).send("No token provided : Unauthorized")
        return
    }
    if (!(decoded.isAdmin)){
        res.status(403).send("You are not an admin : Forbidden")
        return
    }
    req.token = decoded
    next()
}

// function verify_author (req,res,next){
//     const cookie = req.cookies["user"]
//     if (!cookie){
//         res.status(401).send("No token provided : Unauthorized")
//         return
//     }
//     const decoded = auth.decrypteToken(cookie)
//     if (!decoded){
//         res.status(401).send("No token provided : Unauthorized")
//         return
//     }
//     if (!(decoded.user_id)){
//         res.status(403).send("You are not an admin : Forbidden")
//         return
//     }
//     next()
// }

module.exports = {
    verify_auth,
    //verify_author,
    verify_admin   
}
