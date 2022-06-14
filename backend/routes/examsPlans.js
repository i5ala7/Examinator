const router = require('express').Router();
let ExamPlan = require('../models/examPlan-model')

router.route('/').get((req, res) => {
    ExamPlan.find()
      .then(examsPlans => res.json(examsPlans))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/add').post((req, res) => {
    const subject = req.body.subject;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    
    

  
    const newExamPlan = new ExamPlan({
      subject,
      description,
      duration,
      date,
      
    });
  
    newExamPlan.save()
    .then(() => res.json('Exam planned!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  


  module.exports = router