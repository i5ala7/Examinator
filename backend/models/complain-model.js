const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ComplainSchema = new Schema({
    firstName : {type: String , required: true},
    lastName : {type: String , required: true},
    complain : {type: String , required: true}

})


const Complain = mongoose.model('Complain', ComplainSchema);

module.exports = Complain