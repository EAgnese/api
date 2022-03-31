const express = require('express');
const router = express.Router();
const controller_game_type = require("../controllers/game_types_controller")
const middleware_runs = require("../middleware.js")


router.post("/",[middleware_runs.verify_admin], controller_game_type.add_game_type)
router.get("/", controller_game_type.select_game_types)
router.get("/:id", controller_game_type.select_game_type_by_id)
router.put("/:id",[middleware_runs.verify_admin], controller_game_type.update_game_type);
router.delete("/:id",[middleware_runs.verify_admin], controller_game_type.remove_game_type);

module.exports = router