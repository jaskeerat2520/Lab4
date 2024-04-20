const express = require('express');
const expresshb = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const animalRouter = require('./routes/animalRouters'); 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.engine('hbs', expresshb.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect('mongodb://127.0.0.1:27017/animals')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/', animalRouter);
