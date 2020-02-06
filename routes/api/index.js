const router = require("express").Router();
const goalRoutes = require("./goals");

router.use("/goals", goalRoutes);

module.exports = router;
