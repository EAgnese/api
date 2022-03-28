const model_games = require("../models/games_model")

function add_game(req, res) {
    const libelle = req.body.libelle;
    const image = req.body.image;
    const type_code = req.body.type_code;
    const promise = model_games.postGame(libelle, image, type_code)
    
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_game_by_id(req, res) {
    const id = req.params.id;
    promise = model_games.getGameById(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_game_by_name(req, res) {
    const name = req.params.name;
    promise = model_games.getGameByName(name)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_games_by_type(req, res) {
    const type = req.params.type;
    promise = model_games.getGamesByType(type)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_games(req, res) {
    promise = model_games.getGames()
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function update_game(req, res) {
    const id = req.params.id;
    const libelle = req.body.libelle;
    const image = req.body.image;
    const type_code = req.body.type_code;
    promise = model_games.putGame(id, libelle, image, type_code)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function remove_game(req, res) {
    const id = req.params.id;
    promise = model_suggestions.deleteGame(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

module.exports = {
    add_game,
    select_game_by_id,
    select_game_by_name,
    select_games_by_type,
    select_games,
    update_game,
    remove_game,
}

