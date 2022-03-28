const model_platforms = require("../models/platforms_model")

function add_platform(req, res) {
    const libelle = req.body.libelle;
    const promise = model_platforms.postPlatform(libelle)
    
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_platforms(req, res) {
    promise = model_platforms.getPlatforms()
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_platform_by_id(req, res) {
    const id = req.params.id;
    promise = model_platforms.getPlatformById(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function update_platform(req, res) {
    const id = req.params.id;
    const libelle = req.body.libelle;
    promise = model_platforms.putPlatform(id, libelle)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function remove_platform(req, res) {
    const id = req.params.id;
    promise = model_platforms.deletePlatform(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}


module.exports = {
    add_platform,
    select_platforms,
    select_platform_by_id,
    update_platform,
    remove_platform,
}

