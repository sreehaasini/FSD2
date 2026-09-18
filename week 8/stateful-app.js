const express = require('express')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.set('view engine')
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000 }
}));
const authMiddleware = (req, res, next) => {
    if(req.session.is.LoggedIn){
        next();
    } else{
        res.redirect('/login');
    }
};
app.get('/login',(req, res) => {
    res.render('login',{error: null});
});

app.post('/login',(req,res) => {
    const{username, password} = req.body;
    if(username == 'admin' && pasword === '123'){
        req.session.username = username;

        res.cookie('lastVisit', new Date().toLocaleTimeString());
        res.redirect('/dasbord');
    } else{
        res.render('login', {error: 'Invalid credentials!'});
    }
});
app.get('/dashbord',authMiddleware, (req, res) => {
    const lastVisit = req.cookies.lastVisit || 'First time!';
    res.render('dashbord', {
        user: req.session.username,
        lastVisit: lastVisit
    });
});

app.get('/logut',(req,res) => {
    res.session.destroy(()=> {
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
});
app.listen(3000, () => console.log('Serve:http://localhost:3000/login'));