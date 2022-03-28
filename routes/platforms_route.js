const express = require('express');
const router = express.Router();
const controller_platforms = require("../controllers/platforms_controller")

router.post("/", controller_platforms.add_platform)
router.get("/", controller_platforms.select_platforms)
router.get("/:id", controller_platforms.select_platform_by_id)
router.put("/:id", controller_platforms.update_platform);
router.delete("/:id", controller_platforms.remove_platform);

module.exports = router