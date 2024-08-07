const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();


//connect to mongodb

const dbURI = 'mongodb+srv://virakvuth:test1234@cluster0.my3zwsb.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))
//register view engine

app.set('view engine', 'ejs');


//middleware static file

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

/*

//mongoose and mongo sandbox routes

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/single-blog', (req, res) => {
    Blog.findById('66b0aba8bd950ffa0cd88910')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
});

*/

//routes

app.get('/', (req, res) => {
    
    // res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', { root : __dirname});
    //res.render('index', { title: 'Home', blogs});
    res.redirect('/blogs');
});


app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', { root : __dirname});
    res.render('about', { title: 'About'});
});

//blog routes

app.use('/blogs', blogRoutes);

//redirect
//app.get('/about-us', (req, res) => {
//  res.redirect('/about');
//});

//404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404', {title: '404 Page'});
});