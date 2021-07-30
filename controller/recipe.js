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
    Recipe.find({category: "breakfast"}, (error, items) => {
        res.render('collections/soups.ejs', {
            item: items,
            currentUser: req.session.currentUser
        })
    })
})

router.get('/airfryer', (req, res) => {
    Recipe.find({category: "airfryer"}, (error, items) => {
        res.render('collections/soups.ejs', {
            item: items,
            currentUser: req.session.currentUser
        })
    })
})

router.get('/dessert', (req, res) => {
    Recipe.find({category: "dessert"}, (error, items) => {
        res.render('collections/soups.ejs', {
            item: items,
            currentUser: req.session.currentUser
        })
    })
})

router.get('/soups', (req, res) => {
    Recipe.find({category: "soups"}, (error, items) => {
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
            category: "soups",
            name: "Vegan Pea Soup",
            description: "This creamy vegan pea soup is vibrant, colorful, high in protein and fiber and makes a wonderful appetizer.",
            img: "https://lovingitvegan.com/wp-content/uploads/2019/01/Vegan-Pea-Soup-13.jpg",
            readyIn: "15 mins",
            serving: 4,
            ingredients: ["1 Tbsp Olive Oil", "1 Medium Onion", "1 Tsp Crushed Garlic", "1 Tsp Dried Thyme", "1 Tsp Oregano", "6 Cups Frozen Peas", "2 Cups Vegetable Stock", "14 Oz Canned Coconut Cream", "Salt and Pepper to taste"],
            directions: ["Add the olive oil to a pot along with the chopped onion, garlic, thyme and oregano and sauté until the onions are softened.", "Add in the frozen peas and toss up with the onions and spices.", "Add in the vegetable stock and coconut cream and bring to the boil. Cook until the peas are firm but tender.", "Blend up the soup ideally using an immersion (handheld) blender or by transferring the soup in stages to the blender jug and blending it and then return it to the pot.", "Add sea salt and ground black pepper to taste.", "Serve with a swirl of coconut cream and a sprinkle of ground black pepper (optional)."]
        },
        {
            category: "soups",
            name: "Les Halles Vichyssoise",
            description: "A cold soup recipe made by Anthony Bourdain",
            img: "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/recipes/13/60/57/jP0sfxNjTbmrgou3n6pb_image.jpg",
            readyIn: "1 hr 20 mins",
            serving: 6,
            ingredients: ["4 Tbsp Butter", "8 Leeks, thinly sliced", "2 Medium Potatoes cubed", "2 Cups Chicken Stock", "2 Cups Heavy Cream", "4 Chives, finely chopped", "1 Pinch Nutmeg", "Salt and Pepper to taste"],
            directions: ["In a large, heavy bottom pot, melt butter over medium-low heat. Once butter is melted, add the leeks and sweat for 5 minutes, making sure they do not take on any color.", "Add potatoes and cook for a minute or two, stirring a few times.", "Stir in the chicken broth and bring to a boil.", "Reduce heat to a simmer. Cook on low heat, gently simmering for 35 minutes, or until the leeks and potatoes are very soft. Allow to cool for a few minutes.", "Slowly, and in SMALL batches, puree the soup at a high speed in the blender. Do this bit by bit, never filling the blender too high. Make sure the benders lid is on, and lean on the top when you turn on. If not the burn you will get is awful, and a most frequent accident in even professional kitchens.", "Return soup to the cooking pot and whisk in cream and nutmeg. Season with salt and pepper. Return to a boil, reduce to simmer and cook 5 minutes. If you want to thin soup out, add more broth, if needed.", "Transfer soup to the mixing bowl an chill over the ice bath, stirring occasionally. When soup is at Room temperature, and only at room temperature, cover in plastic wrap and put into the refrigerator to cool.", "Check seasoning, sprinkle with chives and serve in chilled bowls."]
        },
        {
            category: "breakfast",
            name: "Ube Mochi Waffles",
            description: "Crispy on the outside, soft and chewy middles, these ube waffles are perfect for any breakfast, brunch or brinner meal!",
            img: "https://cdn.pineappleandcoconut.com/wp-content/uploads/2020/04/Ube-Mochi-Waffles-282.jpg.webp",
            readyIn: "20 mins",
            serving: 2,
            ingredients: ["1 1/2 cups mochiko rice four", "1/2 cup all purpose flour", "2 Tbsp cornstarch", "2 tsp baking powder", "1/2 tsp kosher salt", "1/2 cup sugar", "1/4 cup coconut oil, melted", "3/4 cup roasted and mashed ube yam or purple sweet potato (could also be pressed through a potato ricer)", "2 eggs, separated", "1 -2 tsp ube flavor/color ( optional -this will make a richer purple color)", "1 1/2 cup milk (coconut, macadamia, dairy milk)"],
            directions: ["Preheat waffle iron. Spray with cooking spray or brush with coconut oil", "In a small bowl whisk together the flours, cornstarch, baking powder and salt. In a separate larger bowl whisk together the sugar, coconut oil, mashed sweet potato, egg yolks, optional flavoring/coloring.", "Add in the flour mixture to the sweet potato mixture and mix until starting to come together then add in the milk and mix until well combined. This mixture will be pretty thick but smooth. ", "Whip the egg whites until medium-stiff peaks, then fold into the waffle batter until no white streaks remain", "Pour a heaping half a cup of batter into the waffle iron and cook for 3-4 minutes, until the steaming has started to slow down and the waffles start to turn golden but are still mostly purple.", "Keep waffles warm in a low temp oven directly on the rack or on the counter on a wire cooling rack until all are cooked.  Serve with fresh fruit and syrup of choice."]
        },
        {
            category: "breakfast",
            name: "Omurice (Japanese Omelette)",
            description: "Omurice is a classic Japanese Yoshoku recipe, savory chicken ketchup fried rice wrapped in a thin layer of egg.",
            img: "https://v1.nitrocdn.com/KQYMGOLIdXGmoAcyJsPOrQDKktgCbwtG/assets/static/optimized/rev-7e8ca0b/wp-content/uploads/2014/07/Omurice-NEW.jpg",
            readyIn: "25 mins",
            serving: 2,
            ingredients: ["1/2 onion", "1 boneless, skinless chicken thighs", "1 Tbsp extra-virgin olive oil", "1/2 cup frozen mixed vegetables", "1/8 tsp kosher/sea salt", "1/8 tsp black pepper", "2 servings of short grain rice", "1 Tbsp ketchup", "1 tsp soysauce", "2 large eggs", "2 Tbsp milk", "6 Tbsp shredded sharp chedder cheese"],
            directions: ["Chop the onion finely.", "Cut chicken into 1/2 inch pieces", "Heat the oil in a non-stick pan and sauté the onion until softened.", "Add the chicken and cook until no longer pink.", "Add the mixed vegetables and season with salt and pepper.", "Add the rice and break into small pieces.", "Add ketchup and soy sauce and combine everything evenly with a spatula. Transfer the fried rice to a plate and wash the pan.", "We'll make omurice one at a time. Whisk 1 egg and 1 Tbsp milk in a small bowl.", "Heat 1 Tbsp olive oil in the pan over medium high heat (make sure the surface of the pan is nicely coated with oil).", "When the pan is hot, pour the egg mixture into the pan and tilt to cover the bottom of the pan. Lower the heat when the bottom of the egg has set (but still soft on top).", "Put the 3 Tbsp cheese and half of the ketchup fried rice on top of the omelette.", "Use the spatula to fold both sides of omelette toward the middle to cover the fried rice. Slowly move the omurice to the edge of the pan.", "Hold a plate in one hand and the pan in the other hand, flip the pan and move the omurice to the plate.", "While it’s still hot, cover the omurice with a paper towel and shape it into American /Rugby football shape. Repeat this process to make the second omurice with the rest of ingredients", "Drizzle the ketchup on top for decoration. Continue making omelette till the fried rice is all used."]
        },
        {
            category: "airfryer",
            name: "Fried Chicken",
            description: "Imagine the best fried chicken you've ever had. Now imagine if it wasn't even fried. Crazy, right?",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190618-air-fryer-fried-chicken-361-landscape-pf-1561574618.png?crop=0.668xw:1.00xh;0.0867xw,0&resize=980:*",
            readyIn: "20-25 min",
            serving: 3,
            ingredients: ["2 lb. bone-in skin-on chicken pieces (mix of cuts)", "2 cups Buttermilk", "1/2 cup Hot Sauce", "3 tsp Kosher Salt", "2 cups all-purpose flour", "1 tsp garlic powder", "1 tsp onion powder", "1/2 tsp oregano", "1/2 tsp black pepper", "1/4 tsp cayenne pepper"],
            directions: ["Trim chicken of excess fat and place in a large bowl. In a medium bowl, combine buttermilk, hot sauce, and 2 teaspoons salt.", "Pour mixture over chicken, making sure all pieces are coated. Cover and refrigerate for at least 1 hour and up to overnight.", "In a shallow bowl or pie dish, combine flour, remaining 1 teaspoon salt, and seasonings. Working with one at a time, remove chicken from buttermilk, shaking off excess buttermilk. Place in flour mixture, turning to coat.", "Place coated chicken in basket of air fryer, working in batches as necessary to not overcrowd the basket. Cook at 400° until chicken is golden and internal temperature reaches 165°, 20 to 25 minutes, flipping halfway through.", "Repeat with remaining chicken."]
        },
        {
            category: "airfryer",
            name: "Crispy Avocado Fries",
            description: "These air-fried fries are the PERFECT healthy snack. Wanna double up on healthy fats? Pair these fries with our all-time favorite",
            img: "https://hips.hearstapps.com/vidthumb/images/delish-crispy-avocados-fries-still002-1539969779.jpg?crop=0.561xw:0.562xh;0.213xw,0.184xh&resize=980:*",
            readyIn: "10 min",
            serving: 4,
            ingredients: ["1 cup Panko breadcrumbs", "1 tsp garlic powder", "1 tsp paprika", "1 cup all purpose flour", "2 large eggs", "2 avocados sliced"],
            directions: ["In a shallow bowl, whisk together Panko, garlic powder, and paprika. Place flour in another shallow bowl, and in a third shallow bowl beat eggs.", "One at a time, dip avocado slices into flour, then egg, then Panko mixture until fully coated.", "Place in air fryer and fry at 400° for 10 minutes."]
        },
        {
            category: "dessert",
            name: "Creme Brulee",
            description: "The best creme brulee you've ever had!",
            img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-creme-brulee_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1567523601035.jpeg",
            readyIn: "45 min",
            serving: 4,
            ingredients: ["2 1/2 cups heavy cream", "1 vanilla bean, split lengthwise", "1/4 tsp kosher salt", "12 tbsp", "7 large egg yolks"],
            directions: ["Arrange a rack in the center of the oven and preheat to 300 degrees F. Line a large heavy roasting pan (a turkey roasting pan works great) with a clean kitchen towel and place 4 six-ounce ramekins on top of the towel spaced a few inches apart.", "Heat the cream in a medium saucepan over medium heat. Using the back of a paring knife, scrape the vanilla seeds from both halves of the pod. Add the seeds and pod to the cream. Whisk in the salt and 3 tablespoons of the sugar and bring to a boil. Remove from the heat.", "Vigorously whisk the yolks and 3 more tablespoons of the sugar in a large bowl until pale yellow and very thick and creamy, about 2 minutes. Alternatively, you can use an electric mixer on high speed and beat until pale yellow and very thick and creamy, about 1 minute.", "Whisking the yolks constantly, add a couple of teaspoons at a time from 1 cup of the hot cream, then increase to a steady stream until the cream is fully incorporated. (Don't pour too much hot cream at once or you'll end up with scrambled eggs.) The yolks are now tempered. Whisk the tempered yolks back into the remaining hot cream until combined. Strain through a fine mesh sieve into a large measuring cup or medium pitcher for easier pouring; discard the vanilla pods.", "Skim the foam off the top of the custard by placing a clean paper towel on top and lightly pressing down so it touches the surface and absorbs some of the liquid. This will make for a completely smooth and silky custard. Fill the ramekins with the custard, about 3/4 cup per ramekin.", "Carefully pour boiling water into the roasting pan halfway up the sides of the ramekins without getting any water in the custard. Cover the pan tightly with foil and bake until the custard is set around the edges but still has a slight jiggle in the center, 35 to 45 minutes. Carefully remove the roasting pan from the oven and transfer the ramekins to a wire rack to cool for 30 minutes. Then refrigerate until very cold, about 3 hours.", "Alternatively, arrange a rack in the top position of the oven and heat the broiler on high. Place the ramekins on a rack set inside a baking sheet and broil until deep golden brown, 15 to 60 seconds, checking every 10 seconds.", "Freeze the custards for 5 minutes before serving "]
        },
        {
            category: "dessert",
            name: "Peanut Butter Cookies",
            description: "Best Creamy Peanut Butter Cookies!",
            img: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/12367.jpg?ext=.jpg",
            readyIn: "35 minutes",
            serving: 24,
            ingredients: ["3/4 cup salted dry-roasted peanuts", "1 1/2 cups all-purpose flour", "1 tsp baking soda", "3/4 tsp kosher salt", "1 1/2 cups brown sugar", "1/4 cup granulated sugar", "1 cup creamy peanut butter", "2 large eggs", "1/2 stick unsalted butter", "3 tbsp honey", "2 tsp pure vanilla extract"],
            directions: ["Position a rack in the center of the oven and preheat to 375 degrees F. Line 2 rimmed baking sheets with parchment paper.", "Process the peanuts in a food processor until very finely ground; it should be the consistency of almond flour. Whisk together the ground peanuts, flour, baking soda and salt in a medium bowl.", "Beat the brown sugar, granulated sugar, peanut butter, eggs, melted butter, honey and vanilla in a large bowl with an electric mixer until completely smooth. Add the dry ingredients and beat on low until a soft dough forms.", "Working with 2 tablespoons of dough at a time (or using a 1-ounce ice cream scoop), roll the dough into balls. Evenly space them on the prepared baking sheets (12 balls per sheet). Sprinkle with the raw sugar.", "Bake the cookies, 1 baking sheet at a time, until the edges are just set and just beginning to brown, 12 to 15 minutes, rotating the baking sheet halfway through. Let the cookies cool on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely."]
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

//===================Comment route===================
router.put('/:id/comments', (req, res) => {
    Recipe.findById(req.params.id, (error, post) => {
        post.comments.push(req.body.comments)
        post.save(() => {
            res.redirect('/recipes/' + req.params.id)
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
