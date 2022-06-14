const router = require('express').Router();
let Questions = require('../models/questions-model')

router.route('/').get((req, res) => {
    Questions.find()
      .then(questions => res.json(questions))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {
    const id = req.body.id;
    const subject = req.body.subject;
    const question = req.body.question;
  
    const newQuestion = new Questions({id , subject, question });
  
    newQuestion.save()
      .then(() => res.json('Question Added'))
      .catch(err => res.status(400).json('Error: ' + err));
});  
  
module.exports = router  