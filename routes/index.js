const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) =>
  res.send(`Salut si tu allais voir '/coucou-pug' ? `)
);

/* put user with user */
router.put("/:name", (req, res) =>
  res.send(`Hey my name is ${req.params.name}`)
);

/*GET user with id number */
router.delete("/:id", (req, res, next) =>
  res.send(`Hey it 's a DELETE ID  ${req.params.id}`)
);

router.get("/forms-:valeur", (req, res, next) =>
  console.log(`Le paramètre de l'URL :  ${req.params.valeur} 
Et le level choisi :  ${req.query.level}`)
);

router.post("/forms-101", (req, res) =>
  console.log(`la donnee entree est ${req.body.username}`)
);

router.get("/coucou-pug", (require, response) =>
  response.render("coucoupug", {
    sayHello: "Hello buddy"
  })
);

module.exports = router;
