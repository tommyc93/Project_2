# [Recipes Share](https://peaceful-beyond-30585.herokuapp.com/recipes)

## Authors
- Tommy Chung |[LinkedIn](https://www.linkedin.com/in/tommy-chung93)|  |[GitHub](https://github.com/tommyc93)|

### Approach
#### Picking a Project Idea
Started with wire-framing to decide how I wanted to approach the project.  I wanted to create a user friendly recipe sharing website.

#### Data Structure
- Used the 7 restful routes as a guide
- Created a controller folder to hold all of my routes
- Created a models folder to hold my schemas
- Created a public folder to hold all CSS files
- Created a views folder to hold all the EJS files
- Server JavaScript folder to hold all dependencies, middleware, and PORT information.

## User Stories
#### Core
- User should be able navigate either with the sticky nav-bar or with buttons on the homepage.
- User should be able to sign up and sign in.
- Authentication is required to create, edit, delete, and commenting.

#### Stretch
- Create a sticky nav-bar
- Create a search bar
- Create categories to differentiate for recipes
- Create a commenting section
- Create list format for inputs (ingredients/directions)
- Create a likes button

## Technologies/Languages Used
- HTML/EJS
- CSS
- Javascript
- Mongoose
- Mongo
- Express
- Node

#### Project Management, hosting, and deployed
- GitHub
- Heroku

#### Unsolved Problems
- Was not able to get comments to work the way I wanted it to.  The user is able to leave comments, but the comments can't be edited or deleted.

#### Solved Problems
- Was able to split the recipes by categories by adding a category tag to my recipes schema.  Within the route I would manipulate the find using mongo logic with {category: "breakfast"}
- I created a for of loop in the EJS show page and wrapped the ingredients/directions in a <li> tag.
- Using bootstrap I was able to create a sticky nav-bar with opacity by just adding by adding a class to the nav bar.
- Used partials for both EJS and CSS.  The EJS portion I added in the the HTML tags for the header and included sign up/ sign in functionality to each page.

#### Reflection Section
- If I had more time I would have liked to add like, search, and shopping cart functionality for the ingredients using checkbox for the <li>.
