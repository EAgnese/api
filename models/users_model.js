const pool = require("../bd/bd");

//post a user with the values of the request
function postUser( user_name, user_mail, user_password){
    return new Promise((resolve, reject) => {
        const values = [user_name, user_mail, user_password];
        const sql = "INSERT INTO \
                    USERS(user_name, user_mail, user_password, user_points, user_access)  \
                    VALUES \
                    ($1,$2,$3, 0 ,0)"
        pool.query(sql, values, (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

function getUserById(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT * FROM USERS WHERE user_id = $1"
        pool.query(sql, values, (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

function getUsersByMail(mail){
    return new Promise((resolve, reject) => {
        const values = [mail];
        const sql = "SELECT * FROM USERS WHERE user_mail = $1"
        pool.query(sql, values, (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

function getUserByName(name){
    return new Promise((resolve, reject) => {
        const values = [name];
        const sql = "SELECT * FROM USERS WHERE user_name = $1"
        pool.query(sql, values, (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

function getUsersByAccess(access){
    return new Promise((resolve, reject) => {
        const values = [access];
        const sql = "SELECT user_id,user_name,user_mail,user_points,user_access FROM USERS WHERE user_access = $1"
        pool.query(sql, values, (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

function getUsers(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT user_id,user_name,user_mail,user_points,user_access FROM USERS"
        pool.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

function putUser(user_id, user_name, user_mail, user_password, user_point, user_access){
    return new Promise((resolve, reject) => {
        const values = [user_id, user_name, user_mail, user_password, user_point, user_access]
        const sql = "UPDATE USERS \
                    SET user_name = $2, user_mail = $3, user_password = $4, user_point = $5, user_access = $6\
                    WHERE user_code=$1"
        pool.query(sql, values, (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

function deleteUser(id){
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = "DELETE FROM \
                    USERS\
                    WHERE suggestion_code=$1"
        pool.query(sql, values, (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

module.exports ={
    postUser,
    getUserById,
    getUsersByMail,
    getUserByName,
    getUsersByAccess,
    getUsers,
    putUser,
    deleteUser,
}