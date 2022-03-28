const express = require('express');
const router = express.Router();
const controller_runs = require("../controllers/runs_controller")
const middleware_runs = require("../middleware.js")


router.post("/",[middleware_runs.verify_auth], controller_runs.add_run);
router.get("/", controller_runs.select_runs);
router.get("/:id", controller_runs.select_run_by_id);
router.get("/user/:user", controller_runs.select_runs_by_user);
router.get("/platform/:plat", controller_runs.select_runs_by_plat);
router.get("/game/:game", controller_runs.select_runs_by_game);
router.put("/:id",[middleware_runs.verify_auth], controller_runs.update_run);
router.delete("/:id",[middleware_runs.verify_admin], controller_runs.remove_run);


module.exports = router
