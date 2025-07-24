const mongose = require('mongoose');
const courseSchema = new mongose.Schema({
    code: {type: String, required: true,unique: true},
    name: {type: String, required: true},
    credits: {type: Number, required: true}
});
module.exports = mongose.model('Course', courseSchema);