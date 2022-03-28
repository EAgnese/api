const model_suggestions = require("../models/suggestions_model")

function add_suggestion(req, res) {
    const contents = req.body.contents;
    const points = req.body.points;
    const user = req.body.user;
    const promise = model_suggestions.postSuggestion(contents,points, user)
    
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_suggestion_by_id(req, res) {
    const id = req.params.id;
    promise = model_suggestions.getSuggestionById(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_suggestions(req, res) {
    promise = model_suggestions.getSuggestions()
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function update_suggestion(req, res) {
    const id = req.params.id;
    const contents = req.body.contents;
    const points = req.body.points;
    const user = req.body.user;
    promise = model_suggestions.putSuggestion(id, contents,points, user)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function remove_suggestion(req, res) {
    const id = req.params.id;
    promise = model_suggestions.deleteSuggestion(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}


module.exports = {
    add_suggestion,
    select_suggestion_by_id,
    select_suggestions,
    update_suggestion,
    remove_suggestion
}

