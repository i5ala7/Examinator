const router = require('express').Router();
let { User, validate } = require('../models/users-model');
const bcrypt = require("bcrypt");

router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/students').get((req, res) => {
  User.find({role : "Student"})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/teachers').get((req, res) => {
  User.find({role : "Teacher"})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/observers').get((req, res) => {
  User.find({role : "Observer"})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/students/count').get((req, res) => {
  User.find({role : "Student"}).count()
    .then(Count => res.json(Count))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/observers/count').get((req, res) => {
  User.find({role : "Observer"}).count()
    .then(Count => res.json(Count))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/teachers/count').get((req, res) => {
  User.find({role : "Teacher"}).count()
    .then(Count => res.json(Count))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post( async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
})

  
  module.exports = router;  