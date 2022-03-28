const model_runs = require("../models/runs_model")

function add_run(req, res) {
    const time = req.body.time;
    const game = req.body.game;
    const category = req.body.category;
    const platform = req.body.platform;
    const user_id = req.body.user_id;
    const promise = model_runs.postRun(time, category,game, platform, user_id)
    
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_run_by_id(req, res) {
    const id = req.params.id;
    promise = model_runs.getRunById(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_runs_by_user(req, res) {
    const user = req.params.user;
    promise = model_runs.getRunsByUser(user)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_runs_by_plat(req, res) {
    const plat = req.params.plat;
    promise = model_runs.getRunsByPlat(plat)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_runs_by_game(req, res) {
    const cat = req.params.cat;
    promise = model_runs.getRunsByGame(cat)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_runs(req, res) {
    promise = model_runs.getRuns()
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function update_run(req, res) {
    const id = req.params.id;
    const time = req.body.time;
    const game = req.body.game;
    const category = req.body.category;
    const platform = req.body.platform;
    const user_id = req.body.user_id;
    promise = model_runs.putRun(id,time, category,game, platform, user_id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function remove_run(req, res) {
    const id = req.params.id;
    promise = model_runs.deleteRun(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

module.exports = {
    add_run,
    select_run_by_id,
    select_runs_by_user,
    select_runs_by_plat,
    select_runs_by_game,
    select_runs,
    update_run,
    remove_run
}
