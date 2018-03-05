var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClassSchema = new Schema({
    university:String,
    name: String,
    id:Number,
    students:[{type: Schema.Types.ObjectId, ref: 'User' }]
})

var Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
