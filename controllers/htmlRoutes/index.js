const path = require("path");
const router = require("express").Router();

//loads index.html on the server
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../views/pages/index.ejs"));
});

module.exports = router;
