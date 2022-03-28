const express = require('express');
const router = express.Router();
const controller_contains = require("../controllers/contains_run_controller")

router.post("/", controller_contains.add_contains_run)
router.get("/cat/:id", controller_contains.select_games_by_run_cat)
router.get("/game/:id", controller_contains.select_run_cats_by_game);
router.delete("/", controller_contains.remove_contains_run);


module.exports = router