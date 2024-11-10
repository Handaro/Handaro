//Activity
const Recipe = require("../models/Recipe");

module.exports.getAllActive = (req,res) => {

    return Recipe.find()
    .then(recipes => res.status(200).send(recipes))
    .catch(err => res.status(500).send({ error: "Error in Find", details: err}))

}

module.exports.addRecipe = (req,res) => {

    let newRecipe = new Recipe({
        name : req.body.name,
        description : req.body.description,
        ingredients : req.body.ingredients,
        steps: req.body.Steps
    });

    return newRecipe.save()
    .then((recipe) => res.status(201).send(recipe))
    .catch(err => res.status(500).send({ error: "Error in Save", details: err}));
}