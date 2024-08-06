const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


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

// POST Request

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
})


app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details '});
        })
        .catch(err => {
            console.log(err);
        })
})

//DEETE Request

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        })
})


app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blogs'});
});

// blog routes

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })
})

//redirect
//app.get('/about-us', (req, res) => {
//  res.redirect('/about');
//});

//404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404', {title: '404 Page'});
});