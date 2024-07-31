const router = require("express").Router();
const logOriginUrl = require("../middlewares/logOriginUrl");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.use(logOriginUrl);

router.get("/users", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users", createUser);
router.patch("/users/:user_id", updateUser);
router.delete("/users/:user_id", deleteUser);

module.exports = router;
