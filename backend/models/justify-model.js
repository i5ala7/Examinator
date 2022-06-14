const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const JustifySchema = new Schema({
    firstName : {type: String , required: true},
    lastName : {type: String , required: true},
    justification : {type: String , required: true}

})


const Justify = mongoose.model('Justify', JustifySchema);

module.exports = Justify