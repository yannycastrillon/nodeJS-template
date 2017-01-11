var
  mongoose = require('mongoose'),
  haikuSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true}
  }, {timestamps: true})

var Haiku = mongoose.model('Haiku', haikuSchema)
module.exports = Haiku
