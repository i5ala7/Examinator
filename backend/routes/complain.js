const router = require('express').Router();
let Complain = require('../models/complain-model')

router.route('/').get((req, res) => {
    Complain.find()
      .then(complain => res.json(complain))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const complain = req.body.complain;
    
    
    

  
    const newComplain = new Complain({
      firstName,
      lastName,
      complain,
      
    });
  
    newComplain.save()
    .then(() => res.json('Complain Saved'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  


  module.exports = router