//Dependencies
const mongoose = require('mongoose')
<<<<<<< HEAD

=======
// const Article = require('./articles.js')
>>>>>>> 791b1e7982d72549024ac4d1a26167c02814bd19

const articleSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    body: String,
    comments: [{body: String, date: Date}],
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})

const authorSchema = new mongoose.Schema({
    name: {type: String},
    articles: [articleSchema]
    },
    {timestamps: true}
)
//Creating constructor functions
const Article = mongoose.model('Article', articleSchema)
const Author = mongoose.model('Author', authorSchema)

module.exports = Author
