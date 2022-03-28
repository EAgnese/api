const path = require("path");
const { Pool } = require("pg");
const fs = require("fs");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "nurdeeps",
    password: "Password123",
    port: 5433
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
