const express = require('express');

const app = express();

const todoControllers = require('./controllers/todos');

const methodOverride = require('method-override')

app.set('view engine', 'hbs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))

app.use('/todos', todoControllers)
const port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log(`Express MVC app is running on ${port}`);
});