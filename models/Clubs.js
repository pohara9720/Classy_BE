var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClubSchema = new Schema({
  name: String,
  description: String,
  type: String,
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  img: {
    data: Buffer,
    contentType: String
  },
  meetingDays: [String],
  contact: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
});

var Club = mongoose.model("Club", ClubSchema);

module.exports = Club;
