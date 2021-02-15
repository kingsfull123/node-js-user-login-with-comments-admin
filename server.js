if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const port = process.env.PORT || 3000;
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/', (req, res) => {
    
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});