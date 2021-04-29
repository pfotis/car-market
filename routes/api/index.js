const router = require("express").Router();
const carRoutes = require("./cars");
const userRoutes = require("./users");

// Car routes
router.use("/cars", carRoutes);
router.use("/users", userRoutes);

module.exports = router;
