const pool = require("../bd/bd");

//post a game with the values of the request
function postSuggestion( contents, id){
    return new Promise((resolve, reject) => {
        const values = [ contents, id];
        const sql = "INSERT INTO \
                    SUGGESTIONS( suggestion_contents, suggetion_point ,user_id)  \
                    VALUES \
                    ($1,0,$2)"
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

function getSuggestionById(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT * FROM SUGGESTIONS WHERE suggestion_code = $1"
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

function getSuggestions(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM SUGGESTIONS ORDER BY suggestion_points"
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

function putSuggestion(id, contents,points, user){
    return new Promise((resolve, reject) => {
        const values = [id, contents,points, user]
        const sql = "UPDATE SUGGESTIONS \
                    SET suggestion_contents =$2,suggestion_points =$3,user_id =$4\
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

function deleteSuggestion(id){
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = "DELETE FROM \
                    SUGGESTIONS\
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
    postSuggestion,
    getSuggestionById,
    getSuggestions,
    putSuggestion,
    deleteSuggestion,
}