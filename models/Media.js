const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema :

const MediaSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  friendlyName: {
    type: String
  },

  description: {
    type: String,
    required: true
  },

  fileUrls: {
    type: String,
    lowercase: true
  },

  bConfidential: {
    type: Boolean,
    default: false
  },

  fileType: {
    type: String,
    enum: ['PDF', 'VIDEO', 'SOUND', 'PICTURE']
  },

  bFav: {
    type: Boolean,
    default: false
  },

  date: {
    type: Date,
    default: Date.now()
  },

  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }]
});

module.exports = mongoose.model("media", MediaSchema);