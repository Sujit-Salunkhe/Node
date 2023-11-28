let { people } = require("../data");
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostmon = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide your name" });
  }
  res.status(201).json({ success: true, person: [...people, name] });
};

const updatePerson = (req, res) => {
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
};

const deletleperson = (req, res) => {
  const { id } = req.params;
  

  const person = people.find((people) => people.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "this id is not mention in our database" });
  }
  const newPeople = people.filter((person) => person.id !== Number(id))
    res.status(200).json({ success: true, data:newPeople});
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostmon,
  updatePerson,
  deletleperson,
};
