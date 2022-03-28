const pool = require("../bd/bd");

function postPlatform( run_category_libelle){
    return new Promise((resolve, reject) => {
        const values = [run_category_libelle];
        const sql = "INSERT INTO \
                    PLATFORMS(platform_libelle)  \
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

function getPlatforms(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM PLATFORMS"
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

function getPlatformById(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT * FROM PLATFORMS WHERE platform_code = $1"
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

function putPlatform(id, libelle){
    return new Promise((resolve, reject) => {
        const values = [id, libelle]
        const sql = "UPDATE PLATFORMS \
                    SET platform_libelle =$2\
                    WHERE platform_code=$1"
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

function deletePlatform(id){
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = "DELETE FROM \
                    PLATFORMS\
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
    postPlatform,
    getPlatforms,
    getPlatformById,
    putPlatform,
    deletePlatform
}