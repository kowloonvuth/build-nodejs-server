------------ Summary of What Content in the lesson 6 ---------------

In this lesson 6, It exclusively introduce about a nodejs framework called "Express js" following 
several functions of Express include:

1.Introducing to create an express app ☝️

Basically, to enable express js, All you got to do is using (npm i express) then set up a default form in the file:

/*
const express = require('express');
const [main file] = express();
[main file].listen(3000);
*/

2.Connecting routing to individual page in express app and html pages

In order to create a routing, you must follow this structure:

[main file].get('/', (req, res) => {
  res.sendFile('[File Path]', { root: ___dirname });
})

3.Introducing to redirects & 404 pages

For redirect:

[main file].get('/...', (req, res) => {
  res.redirect('/...');
})

For 404 page:

[main file].use(req, res) => {
  res.status(404).sendFile('./...', { root: ___dirname });
})
