const express = require('express');
const router = express.Router();
const controller_contains = require("../controllers/contains_run_controller")
const middleware_runs = require("../middleware.js")


router.post("/",[middleware_runs.verify_admin], controller_contains.add_contains_run)
router.get("/cat/:id",[middleware_runs.verify_admin], controller_contains.select_games_by_run_cat)
router.get("/game/:id",[middleware_runs.verify_admin], controller_contains.select_run_cats_by_game);
router.delete("/",[middleware_runs.verify_admin], controller_contains.remove_contains_run);


module.exports = router