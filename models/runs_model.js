const pool = require("../bd/bd");

//post a game with the values of the request
function postRun( time,cat, game, plat, user){
    return new Promise((resolve, reject) => {
        const values = [ time,cat, game, plat, user];
        const sql = "INSERT INTO \
                    RUNS(run_time,run_category_code, game_code, platform_code, user_id)  \
                    VALUES \
                    ($1,$2,$3,$4,$5)"
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

function getRunById(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT * FROM RUNS WHERE run_code = $1"
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

function getRunsByUser(user){
    return new Promise((resolve, reject) => {
        const values = [user];
        const sql = "SELECT * FROM RUNS WHERE user_id = $1"
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

function getRunsByPlat(plat){
    return new Promise((resolve, reject) => {
        const values = [plat];
        const sql = "SELECT * FROM RUNS WHERE platform_code = $1"
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

function getRunsByGame(cat){
    return new Promise((resolve, reject) => {
        const values = [cat];
        const sql = "SELECT * FROM RUNS WHERE game_code = $1"
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

function getRuns(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM RUNS"
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

function putRun(id, time, category, game, platform, user){
    return new Promise((resolve, reject) => {
        const values = [id, time, category, game, platform, user]
        const sql = "UPDATE RUNS \
                    SET run_time =$2,run_category_code =$3,game_code=$4,platform_code =$5,user_id =$6\
                    WHERE run_code=$1"
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

function deleteRun(id){
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = "DELETE FROM \
                    RUNS\
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
    postRun,
    getRunById,
    getRunsByUser,
    getRunsByPlat,
    getRunsByGame,
    getRuns,
    putRun,
    deleteRun
}