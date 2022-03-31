const express = require('express');
const router = express.Router();
const controller_suggestions = require("../controllers/suggestions_controller")
const middleware_runs = require("../middleware.js")


router.post("/",[middleware_runs.verify_auth], controller_suggestions.add_suggestion);
router.get("/", controller_suggestions.select_suggestions);
router.get("/:id", controller_suggestions.select_suggestion_by_id);
router.put("/:id",[middleware_runs.verify_admin], controller_suggestions.update_suggestion);
router.delete("/:id",[middleware_runs.verify_admin], controller_suggestions.remove_suggestion);

module.exports = router