var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema  = new Schema({
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    img: {
        data: Buffer,
        contentType: String
    },
    caption: String,
    content: String,
    likes:[UserSchema],
    comments:[CommentSchema]
})

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
