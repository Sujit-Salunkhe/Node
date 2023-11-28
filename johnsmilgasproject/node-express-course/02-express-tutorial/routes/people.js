const express = require('express')
const router =  express.Router()

let { people } = require('../data');
// const people = require('./routes/people')

router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people });
  });
  
router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: "please provide name value" });
    }
    res.status(201).json({ success: true, person: name });
  });
  
  router.post('/postmon', (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: "please provide your name" });
    }
    res.status(201).json({ success: true, person: [...people, name] });
  });
  // parse form data
  
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const person = people.find((people) => people.id === Number(id));
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: "this id is not mention in our database" });
    }
    const updatedpeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: updatedpeople });
  });
  
  router.delete('/:id', (req, res) => {
    const person = people.find((people) => people.id === Number(req.params.id));
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: "this id is not mention in our database" });
    }
    const newpeople = people.filter(
      (persons) => persons.id !== Number(req.params.id)
    )
    res.status(200).json({ success: true, data: newpeople });
  })
  
  module.exports = router