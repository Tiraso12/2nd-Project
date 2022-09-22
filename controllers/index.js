const router = require("express").Router();

const apiRoutes = require("./apiRoutes");
const homepage = require("./homepage.js");

router.use("/", homepage);
router.use("/api", apiRoutes);

module.exports = router;
