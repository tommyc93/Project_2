//==========================================================================================
//Dependencies
//==========================================================================================
const mongoose = require('mongoose')
//==========================================================================================
//Schema
//==========================================================================================
const recipeSchema = new mongoose.Schema({
    category:
        {
            type: String,
            required: true,
        },
    name:
        {
            type: String,
            required: true,
            unique: true
        },
    description:
        {
            type: String,
            required: true
        },
    readyIn:
        {
            type: String,
            required: true
        },
    img: {type: String},
    serving: {type: Number},
    ingredients: [{type: String, required: true}],
    directions: [{type: String, required: true}],
    comments: [{type: String, date: Date}],
    date: {type: Date, default: Date.now},
    },
    {timestamps: true}
)
const Recipe = mongoose.model('Recipe', recipeSchema)
//==========================================================================================
//Exporting
//==========================================================================================
module.exports = Recipe
