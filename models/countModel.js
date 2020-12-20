const mongoose = require("mongoose");

const countSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  serverID: { type: String, index: true },
  channelID: String,
  userID: { type: String, index: true },
  count: { type: Number, default: 0 }
});

module.exports = mongoose.model("Count", countSchema);
