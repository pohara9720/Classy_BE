var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  hosts: [{ type: Schema.Types.ObjectId, ref: "User" }],
  name: String,
  startDate: Date,
  endDate: Date,
  description: String,
  private: Boolean,
  invited: [{ type: Schema.Types.ObjectId, ref: "User" }],
  going: [{ type: Schema.Types.ObjectId, ref: "User" }],
  img: {
    data: Buffer,
    contentType: String
  },
  location: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
});


var Event = mongoose.model("Event", EventSchema);

module.exports = Event;
