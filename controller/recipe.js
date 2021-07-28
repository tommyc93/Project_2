//==========================================================================================
//Dependencies
//==========================================================================================
const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe.js')
const Author = require('../models/authors.js')

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
            readyIn: "15 mins",
            serving: 4,
            ingredients: ["1 Tbsp Olive Oil", "1 Medium Onion", "1 Tsp Crushed Garlic", "1 Tsp Dried Thyme", "1 Tsp Oregano", "6 Cups Frozen Peas", "2 Cups Vegetable Stock", "14 Oz Canned Coconut Cream", "Salt and Pepper to taste"],
            directions: ["Add the olive oil to a pot along with the chopped onion, garlic, thyme and oregano and sauté until the onions are softened.", "Add in the frozen peas and toss up with the onions and spices.", "Add in the vegetable stock and coconut cream and bring to the boil. Cook until the peas are firm but tender.", "Blend up the soup ideally using an immersion (handheld) blender or by transferring the soup in stages to the blender jug and blending it and then return it to the pot.", "Add sea salt and ground black pepper to taste.", "Serve with a swirl of coconut cream and a sprinkle of ground black pepper (optional)."]
        },
        {
            name: "Les Halles Vichyssoise",
            description: "A cold soup recipe made by Anthony Bourdain",
            img: "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/recipes/13/60/57/jP0sfxNjTbmrgou3n6pb_image.jpg",
            readyIn: "1 hr 20 mins",
            serving: 6,
            ingredients: ["4 Tbsp Butter", "8 Leeks, thinly sliced", "2 Medium Potatoes cubed", "2 Cups Chicken Stock", "2 Cups Heavy Cream", "4 Chives, finely chopped", "1 Pinch Nutmeg", "Salt and Pepper to taste"],
            directions: ["In a large, heavy bottom pot, melt butter over medium-low heat. Once butter is melted, add the leeks and sweat for 5 minutes, making sure they do not take on any color.", "Add potatoes and cook for a minute or two, stirring a few times.", "Stir in the chicken broth and bring to a boil.", "Reduce heat to a simmer. Cook on low heat, gently simmering for 35 minutes, or until the leeks and potatoes are very soft. Allow to cool for a few minutes.", "Slowly, and in SMALL batches, puree the soup at a high speed in the blender. Do this bit by bit, never filling the blender too high. Make sure the benders lid is on, and lean on the top when you turn on. If not the burn you will get is awful, and a most frequent accident in even professional kitchens.", "Return soup to the cooking pot and whisk in cream and nutmeg. Season with salt and pepper. Return to a boil, reduce to simmer and cook 5 minutes. If you want to thin soup out, add more broth, if needed.", "Transfer soup to the mixing bowl an chill over the ice bath, stirring occasionally. When soup is at Room temperature, and only at room temperature, cover in plastic wrap and put into the refrigerator to cool.", "Check seasoning, sprinkle with chives and serve in chilled bowls."]
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
