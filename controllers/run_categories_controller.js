const model_run_categories = require("../models/run_categories_model")

function add_run_category(req, res) {
    const libelle = req.body.libelle;
    const promise = model_run_categories.postRunCat(libelle)
    
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_run_categories(req, res) {
    promise = model_run_categories.getRunCats()
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_run_category_by_id(req, res) {
    const id = req.params.id;
    promise = model_run_categories.getRunCatById(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function update_run_category(req, res) {
    const id = req.params.id;
    const libelle = req.body.libelle;
    const image = req.body.image;
    const type_code = req.body.type_code;
    promise = model_run_categories.putRunCat(id, libelle)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function remove_run_category(req, res) {
    const id = req.params.id;
    promise = model_run_categories.deleteRunCat(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

module.exports = {
    add_run_category,
    select_run_categories,
    select_run_category_by_id,
    update_run_category,
    remove_run_category,
}

