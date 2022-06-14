const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id:{type: String , required: true, unique: true},
    subject:{type: String , required: true},
    question:{type: String , required: true}

});

const Questions = mongoose.model('Questions', questionSchema);

module.exports = Questions
