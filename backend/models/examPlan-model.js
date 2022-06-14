const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    
    subject:{type: String , required: true},
    description:{type: String , required: true},
    date:{type: Date , required: true},
    duration:{type: Number , required: true}
    

});

const ExamPlan = mongoose.model('PlanSchema', PlanSchema);

module.exports = ExamPlan