// const express = require('express')
// const authors = express.Router()
//
// const Author = require('../models/authors.js')
// const Article = require('../models/articles.js')
//
//
// //Index route
// authors.get('/', (req, res) => {
//     res.render('recipe/home.ejs', {
//         currentUser: req.session.currentUser
//     })
// })
//
//
// //Create route
// authors.post('/', (req, res) => {
//     Author.findById(req.body.authorId, (err, foundAuthor) => {
//         Article.create(req.body, (err, createdArticle) => {
//             foundAuthor.articles.push(createdArticle)
//             foundAuthor.save((err, data) => {
//                 res.redirect('/recipes/' + req.params.id)
//             })
//         })
//     })
// })
//
// //Show route
// authors.get('/:id', (req, res)=>{
//     Article.findById(req.params.id, (err, foundArticle)=>{
//         Author.findOne({'articles._id':req.params.id}, (err, foundAuthor)=>{
//             res.render('articles/show.ejs', {
//                 author: foundAuthor,
//                 articles: foundArticle
//             });
//         })
//     });
// });
//
// //Edit route
// authors.get('/:id/edit', (req, res)=>{
// 	Article.findById(req.params.id, (err, foundArticle)=>{
// 		Author.find({}, (err, allAuthors)=>{
// 			Author.findOne({'articles._id':req.params.id}, (err, foundArticleAuthor)=>{
// 				res.render('authors/edit.ejs', {
// 					articles: foundArticle,
// 					author: allAuthors,
// 					articleAuthor: foundArticleAuthor
// 				});
// 			});
// 		});
// 	});
// });
//
// //Update route
// authors.put('/:id', (req, res)=>{
//     Article.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedArticle)=>{
//         Author.findOne({ 'articles._id' : req.params.id }, (err, foundAuthor)=>{
// 		if(foundAuthor._id.toString() !== req.body.authorId){
// 			foundAuthor.articles.id(req.params.id).remove();
// 			foundAuthor.save((err, savedFoundAuthor)=>{
// 				Author.findById(req.body.authorId, (err, newAuthor)=>{
// 					newAuthor.articles.push(updatedArticle);
// 					newAuthor.save((err, savedNewAuthor)=>{
// 			        	        res.redirect('/recipes/'+req.params.id);
// 					});
// 				});
// 			});
// 		} else {
// 			foundAuthor.articles.id(req.params.id).remove();
// 			foundAuthor.articles.push(updatedArticle);
// 			foundAuthor.save((err, data)=>{
// 		                res.redirect('/recipes/'+req.params.id);
// 			});
// 		}
//         });
//     });
// });
//
//
// //Delete route
// authors.delete('/:id', (req, res) => {
//     authors.delete('/:id', (req, res)=>{
//     Article.findByIdAndRemove(req.params.id, (err, foundArticle)=>{
//         Author.findOne({'articles._id':req.params.id}, (err, foundAuthor)=>{
//             foundAuthor.articles.id(req.params.id).remove();
//             foundAuthor.save((err, data)=>{
//                 res.redirect('/recipe');
//                 });
//             });
//         });
//     });
// })
//
//
// module.exports = authors
