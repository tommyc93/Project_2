const express = require('express')
const authors = express.Router()




//Index route
authors.get('/', (req, res) => {
    res.render('recipe/home.ejs', {
        currentUser: req.session.currentUser
    })
})

//Create route
authors.post('/', (req, res) => {
    Author.create(req.body, (error, createdAuthor) => {
        res.redirect('/recipe/home.ejs')
    })
})

//Edit route
authors.get('/:id/edit', (req, res) => {
    Author.findById(req.params.id, (error, foundAuthor) => {
        res.render('authors/edit.ejs', {
            author: foundAuthor,
            currentUser: req.session.currentUser
        })
    })
})

//Update route
authors.put('/:id', (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirection('/recipes/' + req.params.id)
    })
})


//Delete route
authors.delete('/:id', (req, res) => {
    Author.findByIdAndRemove(req.params.id, () => {
        res.redirect('/recipe/show.ejs')
    })
})


module.exports = authors