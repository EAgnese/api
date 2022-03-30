const model_users = require("../models/users_model")
const bcrypt = require("bcryptjs")
const global = require("../global")


function logIn(req, res){
    if (global.SESSIONS.hasOwnProperty(req.cookies.sessionId)){
        res.status(401).send("Error 401 : Unauthorized")
    }else {
        model_users.getUserByName(req.body.name).then((values) =>{
            if (!values) {
                res.status(404).render("error");
            }else {
                const passwordisvalid = bcrypt.compareSync(req.body.password,values.rows[0].user_password)
                if (!passwordisvalid) {
                    res.status(401).render("error");
                }else {
                    const nextSessionId = global.randomBytes(16).toString('base64')
                    res.cookie('sessionId', nextSessionId)
                    SESSIONS[nextSessionId] = [values.rows[0].user_name,(values.rows[0].user_access == 1)]
                    res.send([values.rows[0].user_name,(values.rows[0].user_access == 1)]) 
                    console.log("Log in")
                }
            }
        }) 
    }
}

function add_user(req, res) {
    const name = req.body.name;
    const mail = req.body.mail;
    const password = bcrypt.hashSync(req.body.password,5);
    const promise = model_users.postUser( name, mail, password)
    
    promise.then((values) => {

        res.status(200).send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_user_by_id(req, res) {
    const id = req.params.id;
    promise = model_users.getUserById(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_user_by_mail(req, res) {
    const mail = req.params.mail;
    promise = model_users.getUsersByMail(mail)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_user_by_name(req, res) {
    const name = req.params.name;
    promise = model_users.getUserByName(name)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_users_by_access(req, res) {
    const access = req.params.access;
    promise = model_users.getUsersByAccess(access)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_users(req, res) {
    promise = model_users.getUsers()
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function update_user(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    const mail = req.body.mail;
    const password = req.body.password;
    const point = req.body.point;
    const access = req.body.access;
    promise = model_users.putUser(id, name, mail, password, point, access)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function remove_user(req, res) {
    const id = req.params.id;
    promise = model_users.deleteUser(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

module.exports = {
    add_user,
    select_user_by_id,
    select_user_by_mail,
    select_user_by_name,
    select_users_by_access,
    select_users,
    update_user,
    remove_user,
    logIn,
}

