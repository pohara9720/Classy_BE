var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comment: String
})

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
