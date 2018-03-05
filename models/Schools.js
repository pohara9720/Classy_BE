var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SchoolSchema = new Schema({
    university: String,
    location: String,
    classes:[ClassSchema],
    majors: [String],
    img: {
        data: Buffer,
        contentType: String
    },
    events: [EventSchema],
    clubs: [ClubSchema],
    students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    posts:[PostSchema]

});

var School = mongoose.model("School", SchoolSchema);

module.exports = School;
