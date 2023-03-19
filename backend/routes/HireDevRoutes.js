const router = require("express").Router();
const DevController = require("../controllers/DevController");
const CompController = require("../controllers/CompController");
const JobController = require("../controllers/JobController");

router.post("/register-dev", DevController.register);
router.post("/register-comp", CompController.register);
router.post("/add-job", JobController.register);

module.exports = router;
