const router = require("express").Router();
const DevController = require("../controllers/DevController");
const CompController = require("../controllers/CompController");

router.post("/register-dev", DevController.register);
router.post("/register-comp", CompController.register);

module.exports = router;
