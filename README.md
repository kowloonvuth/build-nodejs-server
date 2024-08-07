------------- Summary of What Content is in the lesson 8 --------------

In this lesson 8, it primary talked about middleware:

1. What is middleware? ☝️

Middleware is simply a middle part function of the resquest made to the route '/' and the response made to get the data back.

It acts as a server part and improtantly useful for 4 things such as:

-Logger middleware to log details of every requests

-Authentication check middleware for protected routes

-Middleware to parse JSON data from requests

-Return 404 pages 

So to use a middleware, follow this structure in the app.js:

app.use((req, res) => {
  ................
})

Futhremore, we can get to see its express properties by using these:

- console.log('host', req.hostname);

- console.log('path', req.path);

- console.log('method: ', req.method);

2. Using next() ✌️

In the previous, we can see that it cannot loading or do something, so in order to do we must add next(); at the end f the app.use();

app.use((req, res, next) => {

  ......
  
  next();
  
})

This will tell the server what to do or which routes need to take next after clicking on.

3. Third party middleware 👌

Some of the third party tool like morgan can be useful for seeing the full details of different propteries in the terminal

for install morgan: npm install morgan

then to declare it, => app.use(morgan('dev'));

4. Static file hand 🖖

to make it available or appear as a public in using in other places of the file code

simply place this code in the app.js: app.use(express.static('public'));


-------------- that was it, easy right? :) --------------
