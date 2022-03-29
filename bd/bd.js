const path = require("path");
const { Pool } = require("pg");
const fs = require("fs");

const pool = new Pool({
    user: "iihhbweosayybd",
    host: "ec2-52-212-228-71.eu-west-1.compute.amazonaws.com",
    database: "d6q1jhkthpnfcl",
    password: "b80edd6d73e7ec6fee056e79b98b887d9ce70269a08125beeb51bbe68d9b959",
    port: 5432,
    max: 20,
    ssl: true,
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
