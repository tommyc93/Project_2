// const express = require('express')
// const articles = express.Router()
//
// const Article = require('../models/articles.js')
// const Author = require('../models/authors.js')
//
// articles.get('/:id', (req, res)=>{
//     Article.findById(req.params.id, (err, foundArticle)=>{
//         Author.findOne({'articles._id':req.params.id}, (err, foundAuthor)=>{
//             res.render('articles/show.ejs', {
//                 author:foundAuthor,
//                 article: foundArticle
//             });
//         })
//     });
// });
//
// module.exports = articles
