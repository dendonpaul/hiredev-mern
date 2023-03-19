const router = require("express").Router();
const DevController = require("../controllers/DevController");

router.post("/register-dev", DevController.register);
router.post("/register-comp");

module.exports = router;
