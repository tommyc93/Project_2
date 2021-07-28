//==========================================================================================
//Dependencies
//==========================================================================================
const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe.js')

//Middleware authentication
const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}
//===================Index route===================
router.get('/', (req, res) => {
    Recipe.find({}, (error, items) => {
        res.render('recipe/home.ejs', {
            item: items,
            currentUser: req.session.currentUser
        })
    })
})

router.get('/breakfast', (req, res) => {
    Recipe.find({}, (error, items) => {
        res.render('collections/soups.ejs', {
            item: items,
            currentUser: req.session.currentUser
        })
    })
})

router.get('/airfryer', (req, res) => {
    Recipe.find({}, (error, items) => {
        res.render('collections/soups.ejs', {
            item: items,
            currentUser: req.session.currentUser
        })
    })
})

router.get('/dessert', (req, res) => {
    Recipe.find({}, (error, items) => {
        res.render('collections/soups.ejs', {
            item: items,
            currentUser: req.session.currentUser
        })
    })
})

router.get('/soups', (req, res) => {
    Recipe.find({}, (error, items) => {
        res.render('collections/soups.ejs', {
            item: items,
            currentUser: req.session.currentUser
        })
    })
})


//===================Seed route===================
router.get('/seed', (req, res) => {
    Recipe.deleteMany({}, () => {});
    Recipe.create([
        {
            name: "Vegan Pea Soup",
            description: "A vegan soup made coconut creme",
            img: "https://lovingitvegan.com/wp-content/uploads/2019/01/Vegan-Pea-Soup-13.jpg",
            serving: 4,
            ingredients: ["1 Tbsp Olive Oil", "1 Medium Onion", "1 tsp Crushed Garlic", "1 tsp Dried Thyme", "1 tsp Oregano", "6 cups Frozen Peas", "2 cups Vegetable Stock", "14 oz Canned Coconut Cream", "Salt and Pepper to taste"],
            directions: ["Add the olive oil to a pot along with the chopped onion, garlic, thyme and oregano and sauté until the onions are softened.", "Add in the frozen peas and toss up with the onions and spices.", "Add in the vegetable stock and coconut cream and bring to the boil. Cook until the peas are firm but tender.", "Blend up the soup ideally using an immersion (handheld) blender or by transferring the soup in stages to the blender jug and blending it and then return it to the pot.", "Add sea salt and ground black pepper to taste.", "Serve with a swirl of coconut cream and a sprinkle of ground black pepper (optional)."]
        },
        {
            name: "Pea Soup",
            description: "A vegan soup made with peas",
            img: "https://lovingitvegan.com/wp-content/uploads/2019/01/Vegan-Pea-Soup-13.jpg",
            serving: 4,
            ingredients: ["1 Tbsp Olive Oil", "1 Medium Onion", "1 tsp Crushed Garlic", "1 tsp Dried Thyme", "1 tsp Oregano", "6 cups Frozen Peas", "2 cups Vegetable Stock", "14 oz Canned Coconut Cream", "Salt and Pepper to taste"],
            directions: ["Add the olive oil to a pot along with the chopped onion, garlic, thyme and oregano and sauté until the onions are softened.", "Add in the frozen peas and toss up with the onions and spices.", "Add in the vegetable stock and coconut cream and bring to the boil. Cook until the peas are firm but tender.", "Blend up the soup ideally using an immersion (handheld) blender or by transferring the soup in stages to the blender jug and blending it and then return it to the pot.", "Add sea salt and ground black pepper to taste.", "Serve with a swirl of coconut cream and a sprinkle of ground black pepper (optional)."]
        },
    ],
    (error, data) => {
        res.redirect('/recipes')
    })
})

//===================New route===================
router.get('/new', (req, res) => {
    res.render("recipe/new.ejs", {
        currentUser: req.session.currentUser
    })
})
//===================Create route===================
router.post('/', (req, res) => {
    Recipe.create(req.body, (error, createdRecipe) => {
        res.redirect('/recipes')
    })
})
//===================Show route===================
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id, (error, foundRecipe) => {
        res.render('recipe/show.ejs', {
            item: foundRecipe,
            currentUser: req.session.currentUser
        })
    })
})
//===================Edit route===================
router.get('/:id/edit', (req, res) => {
    Recipe.findById(req.params.id, (error, foundRecipe) => {
        res.render('recipe/edit.ejs', {
            item: foundRecipe,
            currentUser: req.session.currentUser
        })
    })
})
//===================Update route===================
router.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}, (error, updatedModel) => {
        if(error){
            console.log(error)
        }
        res.redirect('/recipes/' + req.params.id)
        console.log(updatedModel)
    })
})
//===================Delete route===================
router.delete('/:id', (req, res) => {
    Recipe.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/recipes')
    })
})
//==========================================================================================
//Export module
//==========================================================================================
module.exports = router
