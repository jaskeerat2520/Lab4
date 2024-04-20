const animalModel = require('../models/animalModel');

exports.animalList = async (req, res) => {
    try {
        let animal = await animalModel.find().lean().exec();
        res.render('home', { animal: animal });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.animalShow = async (req, res) => {
    try {
        let animal = await animalModel.findById(req.params.id).lean().exec();
        res.render('animal/show', { animal: animal });
    } catch (err) {
        res.status(500).send(err);
    }
};


const Animal = require('../models/animalModel'); 

const animalController = {
    getAllAnimals: async (req, res) => {
        try {
            const animals = await Animal.find();
            res.json(animals);
        } catch (err) {
            console.error('Error fetching animals:', err);
            res.status(500).send('Internal Server Error');
        }
    },

    getAnimalById: async (req, res) => {
        try {
            const animal = await Animal.findById(req.params.id);
            if (!animal) {
                return res.status(404).send('Animal not found');
            }
            res.json(animal);
        } catch (err) {
            console.error('Error fetching animal:', err);
            res.status(500).send('Internal Server Error');
        }
    },

    addAnimal: async (req, res) => {
        try {
            const newAnimal = new Animal(req.body);
            await newAnimal.save();
            res.status(201).send('Animal added successfully');
        } catch (err) {
            console.error('Error adding animal:', err);
            res.status(500).send('Internal Server Error');
        }
    },

    editAnimal: async (req, res) => {
        try {
            const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedAnimal) {
                return res.status(404).send('Animal not found');
            }
            res.status(200).send('Animal updated successfully');
        } catch (err) {
            console.error('Error updating animal:', err);
            res.status(500).send('Internal Server Error');
        }
    },

    // Delete an animal
    deleteAnimal: async (req, res) => {
        try {
            const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
            if (!deletedAnimal) {
                return res.status(404).send('Animal not found');
            }
            res.status(200).send('Animal deleted successfully');
        } catch (err) {
            console.error('Error deleting animal:', err);
            res.status(500).send('Internal Server Error');
        }
    }
};

module.exports = animalController;
