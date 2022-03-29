const path = require("path");
const { Pool } = require("pg");
const fs = require("fs");
require('dotenv').config()


const isProduction = process.env.NODE_ENV === 'production'
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
});


console.log("Connexion réussie à la base de données");

const sql_create = fs.readFile(__dirname + "/createDB.sql", (err, data) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        pool.query(data.toString(), [], (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Création réussie des tables");
        });
    }
});

module.exports = pool;
