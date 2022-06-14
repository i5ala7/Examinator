const router = require('express').Router();
let Justify = require('../models/justify-model')

router.route('/').get((req, res) => {
    Justify.find()
      .then(justify => res.json(justify))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const justification = req.body.justification;
    
    
    

  
    const newJustify = new Justify({
      firstName,
      lastName,
      justification,
      
    });
  
    newJustify.save()
    .then(() => res.json('Justify Saved'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  


  module.exports = router