const mongoose = require('mongoose');

const textDataSchema = new mongoose.Schema({
    textData : String,
});


module.exports  = mongoose.models.TextData || mongoose.model('TextData',textDataSchema);