const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", (req, res, next) => {
  req.session.maVariable = true;
  res.render("index");
});

/* put user with user 
router.put("/:name", (req, res) =>
  res.send(`Hey my name is ${req.params.name}`)
);

router.get("/forms-:valeur", (req, res, next) =>
  console.log(`Le paramètre de l'URL :  ${req.params.valeur} 
Et le level choisi :  ${req.query.level}`)
);

router.post("/forms-101", (req, res) =>
  console.log(`la donnee entree est ${req.body.username}`)
);

router.get("/coucou-pug", (req, res) =>
  res.render("coucoupug", {
    sayHello: "Hello buddy"
  })
);*/
//quand on rentre un nom nombre users
router.get("/users/:entree(\\D+)", (req, res) =>
  res.render("update-user", {
    entree: req.params.entree
  })
);
router.put("/users/:entree", (req, res) => {
  res.send(`The new name is ${req.body.name}`);
});

//quand on rentre un chiffre
router.get("/users/:entree(\\d+)", (req, res) =>
  res.render("delete-user", {
    entree: req.params.entree
  })
);
router.delete("/users/:entree", (req, res) =>
  res.send(`No more user with id ${req.body.number}`)
);

/*GET user with id number 
router.delete("/:id", (req, res, next) =>
  res.send(`Hey it 's a DELETE ID  ${req.params.id}`)
);*/

/* ------------------quete session -----------------*/

router.get("/session-in", (req, res) => {
  req.session.song = "be bop a lula";
  res.render("session-in");

  //res.send(`do you know my favorite song? if not, check out, please`,{
  // song: "be bop a lula"
  // })
});

router.get("/session-out", (req, res) => {
  res.render("session-out", {
    song: req.session.song
  });
});

/*------------------- quete email ---------------------*/

//transporter nodemailer

var smtpTransport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "707e22fdffd16a",
    pass: "6a6a629ee29839"
  }
});

router.get("/askForCookiesRecipe", (req, res) => {
  smtpTransport.sendMail({
      from: "gmail.user@gmail.com",
      to: "supergrandma@yopmail.com",
      subject: "Coucou !", // Sujet
      text: "Cookie monster wants your receipe", // plaintext body
      html: `Hello Grandma
      <b>if you want me to have kid</b> you had to give me your cookie's receipe.
      Else, I will not know what is to be a parent.
      XXX
      Vinz` // html body
    },
    (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Message has been sent");
        res.send("message envoyé")

      }
    }
  );

});

module.exports = router;