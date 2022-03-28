const model_game_type = require("../models/game_types_model")

function add_game_type(req, res) {
    const libelle = req.body.libelle;
    const promise = model_game_type.postGameType(libelle)
    
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_game_types(req, res) {
    const id = req.params.id;
    promise = model_game_type.getGameTypes()
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_game_type_by_id(req, res) {
    const id = req.params.id;
    promise = model_game_type.getGameTypeById(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function update_game_type(req, res) {
    const id = req.params.id;
    const libelle = req.body.libelle;
    const image = req.body.image;
    const type_code = req.body.type_code;
    promise = model_game_type.putGame(id, libelle, image, type_code)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function remove_game_type(req, res) {
    const id = req.params.id;
    promise = model_game_type.deleteGameType(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}



module.exports = {
    add_game_type,
    select_game_types,
    select_game_type_by_id,
    update_game_type,
    remove_game_type,
}

