const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostmon,
  updatePerson,
  deletleperson,
} = require("../controllers/people");


// const people = require('./routes/people')

router.get("/", getPeople);

router.post("/", createPerson);

router.post("/postmon", createPersonPostmon);
// parse form data

router.put("/:id", updatePerson);

router.delete("/:id", deletleperson);

module.exports = router;
