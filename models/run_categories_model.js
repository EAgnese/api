const pool = require("../bd/bd");

function postRunCat( run_category_libelle){
    return new Promise((resolve, reject) => {
        const values = [run_category_libelle];
        const sql = "INSERT INTO \
                    RUN_CATEGORIES(run_category_libelle)  \
                    VALUES \
                    ($1)"
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

function getRunCats(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM RUN_CATEGORIES"
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

function getRunCatById(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT * FROM RUN_CATEGORIES WHERE run_category_code = $1"
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

function putRunCat(id, libelle){
    return new Promise((resolve, reject) => {
        const values = [id, libelle]
        const sql = "UPDATE RUN_CATEGORIES \
                    SET run_category_libelle =$2\
                    WHERE run_category_code=$1"
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

function deleteRunCat(id){
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = "DELETE FROM \
                    RUN_CATEGORIES\
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
    postRunCat,
    getRunCats,
    getRunCatById,
    putRunCat,
    deleteRunCat
}