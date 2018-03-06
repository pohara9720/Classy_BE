var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SchoolSchema = new Schema({
  university: String,
  location: String,
  classes: [{ type: Schema.Types.ObjectId, ref: "Class" }],
  majors: [String],
  img: {
    data: Buffer,
    contentType: String
  },
  events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  clubs: [{ type: Schema.Types.ObjectId, ref: "Club" }],
  students: [{ type: Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
});

var School = mongoose.model("School", SchoolSchema);

module.exports = School;
