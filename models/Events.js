var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EventSchema = newSchema({
    hosts:[{type: Schema.Types.ObjectId, ref: 'User' }],
    name:String,
    startDate: Date,
    endDate: Date,
    description: String,
    private: Boolean,
    invited:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    going:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    img:{
        data: Buffer,
        contentType: String
    },
    location: String,
    posts:[PostSchema]
})


var Event = mongoose.model("Event", EventSchema);

module.exports = Event;
