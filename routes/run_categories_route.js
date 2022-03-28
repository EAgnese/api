const express = require('express');
const router = express.Router();
const controller_run_categories = require("../controllers/run_categories_controller")

router.post("/", controller_run_categories.add_run_category)
router.get("/", controller_run_categories.select_run_categories)
router.get("/:id", controller_run_categories.select_run_category_by_id)
router.put("/:id", controller_run_categories.update_run_category);
router.delete("/:id", controller_run_categories.remove_run_category);

module.exports = router