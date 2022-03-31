const express = require('express');
const router = express.Router();
const controller_platforms = require("../controllers/platforms_controller")
const middleware_runs = require("../middleware.js")


router.post("/",[middleware_runs.verify_admin], controller_platforms.add_platform)
router.get("/", controller_platforms.select_platforms)
router.get("/:id", controller_platforms.select_platform_by_id)
router.put("/:id",[middleware_runs.verify_admin], controller_platforms.update_platform);
router.delete("/:id",[middleware_runs.verify_admin], controller_platforms.remove_platform);

module.exports = router