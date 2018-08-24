const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema :

const TagSchema = new Schema({
  title: {
    type: String
    // required: true
  },

  color: {
    type: String
   // required: true
  },

  bMaster: {
    type: Boolean,
    default: true
   // required: true
  },
  
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("tags", TagSchema);
