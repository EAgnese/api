const model_contains = require("../models/contains_run_model")

function add_contains_run(req, res) {
    const run_cat = req.body.run_cat;
    const game = req.body.game;
    const promise = model_contains.postContains(run_cat,game)
    
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_games_by_run_cat(req, res) {
    const id = req.params.id;
    promise = model_contains.getGamesByRunCat(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_run_cats_by_game(req, res) {
    const id = req.params.id;
    const libelle = req.body.libelle;
    const image = req.body.image;
    const type_code = req.body.type_code;
    promise = model_contains.getRunCatsByGame(id, libelle, image, type_code)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function remove_contains_run(req, res) {
    const run_cat = req.body.run_cat;
    const game = req.body.game;
    promise = model_contains.deleteContains(run_cat,game)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

module.exports = {
    add_contains_run,
    select_games_by_run_cat,
    select_run_cats_by_game,
    remove_contains_run,
}

