var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    },
    email: {
        type: String,
        trim: true
    },
    password:{
        type:String,
        trim: true
    },
    images: [{
        data: Buffer,
        contentType: String
    }],
    classes:[Number],
    school: String,
    major: String,
    grade: String,
    posts:[PostSchema],
    groups:[]

});

var User = mongoose.model("User", UserSchema);

module.exports = User;
