const router = require('express').Router();
let { User, validate } = require('../models/users-model');
const bcrypt = require("bcrypt");

router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
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

  // router.route('/add').post( async (req, res) => {
  //   const role = req.body.profession;
  //   const firstName = req.body.firstName;
  //   const lastName = req.body.lastName;
  //   const password = req.body.password;
  //   const email = req.body.email;
  
  //   const newUser = new User({
  //       role,
  //       firstName,
  //       lastName,
  //       password,
  //       email,
  //   });
  
  //   newUser.save()
  //     .then(() => res.json('User added!'))
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });
  
  module.exports = router;  