const express = require('express');
const router = express.Router();
const controller_games = require("../controllers/games_controller")
const middleware_runs = require("../middleware.js")


router.post("/",[middleware_runs.verify_admin], controller_games.add_game);
router.get("/", controller_games.select_games);
router.get("/:id", controller_games.select_game_by_id);
router.get("/name/:name", controller_games.select_game_by_name);
router.get("/type/:id", controller_games.select_games_by_type);
router.put("/:id",[middleware_runs.verify_admin], controller_games.update_game);
router.delete("/:id",[middleware_runs.verify_admin], controller_games.remove_game);

module.exports = router