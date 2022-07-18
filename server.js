const express = require('express');

const app = express();

const PORT = 5000;

app.use(express.json());

//DB
let users= [
    {
        name : 'John',
        lastname : 'Ayari',
        id : 1 
    },
    {
        name : 'Mark',
        lastname : 'Hassnaoui',
        id : 2 
    }
]

//Crud Operations

//Get all users

app.get('/all-users', (req , res) =>{
res.send(users)
})

//Add new user

app.post('/add-user', (req , res) =>{
    const newUser= req.body;
    users = [...users, newUser]
    res.send(users)
})

//Server PORT

app.listen(PORT, (err) => {
    err ? console.log(err)
    :
    console.log(` The server is running on Port ${PORT} `)
})


//PUG Template

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(req, res){
    res.render('home');
 });

 app.get('/services', function(req, res){
    res.render('services');
 });

 app.get('/contact', function(req, res){
    res.render('contact');
 });
