var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("Hey ! It's a GET");
});


/* POST user creation. */
router.post("/", function(req, res, next) {
  res.send("Hey ! It's a POST");
});

module.exports = router;
