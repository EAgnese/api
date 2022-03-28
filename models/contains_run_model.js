const pool = require("../bd/bd");

function postContains( run_category,game){
    return new Promise((resolve, reject) => {
        const values = [ run_category,game];
        const sql = "INSERT INTO \
                    CONTAINS_RUN(run_category_code,game_code)  \
                    VALUES \
                    ($1,$2)"
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

function getGamesByRunCat(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT * FROM CONTAINS_RUN WHERE run_category_code = $1"
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

function getRunCatsByGame(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT * FROM CONTAINS_RUN WHERE game_code = $1"
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

function deleteContains(run_category,game){
    return new Promise((resolve, reject) => {
        const values = [run_category,game]
        const sql = "DELETE FROM \
                    GAMES\
                    WHERE suggestion_code=$1 AND game_code = $2"
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
    postContains,
    getGamesByRunCat,
    getRunCatsByGame,
    deleteContains
}