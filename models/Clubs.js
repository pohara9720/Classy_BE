var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClubSchema = newSchema({
    name: String,
    description: String,
    type: String,
    members:[[{ type: Schema.Types.ObjectId, ref: 'User' }]]
    img:{
        data: Buffer,
        contentType: String
    },
    meetingDays:[String],
    contact: String,
    posts:[PostSchema]
})

var Club = mongoose.model("Club", ClubSchema);

module.exports = Club;
