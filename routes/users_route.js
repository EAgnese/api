const express = require('express');
const router = express.Router();
const controller_users = require("../controllers/users_controller")
const middleware_runs = require("../middleware.js")

router.post("/", controller_users.add_user);
router.post("/login", controller_users.logIn);
router.get('/logout',controller_users.logOut)
router.get("/",[middleware_runs.verify_admin], controller_users.select_users);
router.get("/:id", controller_users.select_user_by_id);
router.get("/name/:name",[middleware_runs.verify_admin] ,controller_users.select_user_by_name);
router.put("/:id", controller_users.update_user);
router.delete("/:id", [middleware_runs.verify_admin],controller_users.remove_user);

module.exports = router