-------------- Summary of What Content is in lesson 7 -------------

In this lesson 7, It primary cover about a useful feature that express provided, called "View Engine" which is for config

setting on app. Moreover, It further explans about passing data into views, and partial:

1. Setting up View Engine: ☝️

Firstly, you need to create a views folder in the directory, and move all the html file into it with a slang .ejs at the end.

To set up VE, you need to register it on the app file with the command: app.set('view engine', 'ejs');

Then to start implement it into routing: 

app.get('/', (req, res) => {

	res.render('html of ejs file');
 
})

2. Passing data into views: ✌️

Passing data from the main file like (app.js) to its views file like (index.ejs) is simply need to add this in the view files:

For example:

In the app.js:

app.get('/', (req, res) => {

 res.render('index', { title: 'Home' }); <=== (This is where we are passing the data)
 
})

to the index.ejs: <title>Blog Ninja | <%= title %></title> <=== (this will receive Home as a data for the title)

+More importantly, let's say you have an array of data that you wanna show:

For example:

const blogs = [

    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},

    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
		
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
		
  ];

So basically you can declare it below the: 

app.get('/', (req, res) => {

[Place it here]

---more code

})

and when you wanna call/pass it to the ejs file, simply follow this sample structure:

<% if (blogs.length > 0) { %>

      <% blogs.forEach(blog => { %>

        <h3 class="title"><%= blog.title %></h3> <=== data of title from the blogs
				
        <p class="snippet"><%= blog.snippet %></p> <=== data of snippet from the blogs

      <% }) %>
			
    <% } else { %>
		
      <p>There are no blogs to display...</p>
			
<% } %>

*Notice: All the <% %> must have a = after the <%. and every code line of calling those data need to have <% %> all the time. 

3. Partial: 👌

In view engine, you can also split the fragment of the codes into its specfici place called "partials" then have a follow up ejs file under 
it. With this, it helps you to reduce the repeat same code in different file and you can just update one code and it will worl
for others.

When you wanna call that back to the views, you just need to put this sample strucutre into it:

For example: 

In the partials/head.js, you have this code:

<head>
	
  <meta charset="UTF-8">
	
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	
  <title>Blog Ninja | <%= title %></title>
		
</head>

Back in the index js:

replace this below the <html lang="eng">

<%- include('./....') %>

Notice of the - sign in it. make sure not to forget the - sign.


--------- That was it, easy right? :) -------
