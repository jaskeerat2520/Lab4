const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');


router.get('/', (req, res) => {
    res.render('index', { title: 'Animal App' });
});

router.get('/all', animalController.getAllAnimals);

router.get('/:id', animalController.getAnimalById);

router.post('/', animalController.addAnimal);

router.post('/:id/edit', animalController.editAnimal);

router.post('/:id/delete', animalController.deleteAnimal);

module.exports = router;
