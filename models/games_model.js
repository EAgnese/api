const pool = require("../bd/bd");

//post a game with the values of the request
function postGame( game_libelle, game_image, game_type_code){
    return new Promise((resolve, reject) => {
        const values = [game_libelle, game_image, game_type_code];
        const sql = "INSERT INTO \
                    GAMES(game_libelle, game_image, game_type_code)  \
                    VALUES \
                    ($1,$2,$3)"
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

function getGameById(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT * FROM GAMES WHERE game_code = $1"
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

function getGameByName(name){
    return new Promise((resolve, reject) => {
        const values = [name];
        const sql = "SELECT * FROM GAMES WHERE game_libelle = $1"
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

function getGamesByType(type){
    return new Promise((resolve, reject) => {
        const values = [type];
        const sql = "SELECT * FROM GAMES WHERE game_type_code = $1"
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

function getGames(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM GAMES"
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

function putGame(id, libelle, image, type_code){
    return new Promise((resolve, reject) => {
        const values = [id, libelle, image, type_code]
        const sql = "UPDATE GAMES \
                    SET game_libelle =$2,game_image =$3,game_type_code =$4\
                    WHERE game_code=$1"
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

function deleteGame(id){
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = "DELETE FROM \
                    GAMES\
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
    postGame,
    getGameById,
    getGameByName,
    getGamesByType,
    getGames,
    putGame,
    deleteGame
}