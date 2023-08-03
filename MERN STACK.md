# MERN STACK

## Mongo DB 

Database Solution.

## Express

It's a framework for node js. and it makes building node.js applications easier.

## React

This is a javascript library that helps us build amazing user interfaces.

## Node js

Server-Side Javascript runtime, an environment where javascript code can be executed outside of the browser.

Combining these technologies form the MERN stack, they work particularly well and you can build amazing full stack web applications with these four technologies working together.





## What is React-

A client-side (browser) library which allows you to build highly reactive user interfaces. The user writes Javascript code that will be executed in the browser and since it runs there, it is responsible for what the users sees on the screen and how things there change when a button is clicked,when something is entered into an input box etc.

- Rendering UI with dynamic data and updating it when the data changes when certain events occur.
- Handling user input and providing feedback to the user 
- Communicating with backend services.

React is the front end and the other three (mongodb,express,nodjs.) together make up the backend. It's used to provide user a "mobile app"- like user experience where everything happens instantly, where we have a great reactivity, where things on the user interface really feel great and in standard provide a really awesome user experience.

## What is Node?

It's a javascript runtime typically used to create server side javascript applications. User can user node js to execute javascript outside of the browser and since it runs outside of the browser, one can use it to create web server with it, So to run it on some machine which is exposed to the internet which then accepts request and sends back responses, so we can then user JS as a server side programming language, as an alternative to PHP, ASP.net,..etc. With Node.js we can-

- Listen to requests and send responses

- Execute server-side logic

- Interact with Databases and files

  

Since we aren't tied to the browser one can't interact with the DOM(The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.), because there is no DOM, it's running outside the browser but there are new things one can do like write files. It's rarely used as a stand alone, typically we use it with express.

## What is Express?

A Node js. framework which simplifies writing server-side code and logic. We still write node js. javascript code but we get utility functions and a certain way of structuring and building our applications, so a certain ruleset we follow to which makes building node.js applications much easier.

- It's based on node.js but gives us new functionalities.
- It's strictly middleware based which means one have a clear way of handling requests, a clear funnel through which all requests are passed
- Includes routing, view-rendering etc.

there are variety of tools and clear rules that force us to write amazing and really well working nodejs. applications. Express really simplifies the usage of node.js.

## What is mongoDB ?

It's a NOSQL database engine which stores allows us to store documents in collections instead of records in tables as in SQL. It's a database engine its all about storing data-

- Store Application Data(users, products, etc.)
- Unlike SQL, it doesn't enforce a schema for our data. We can still build one and use one if we want to but we're not forced to and we also don't need to work with relations, we can still setup them but it's all a lot looser than it's in SQL.
- Databases like mongodb which are NOSQL databases often give you amazing performance because of their flexibility. 
- Easy to connet to node.js as writing queries against mongodb is really straightforward and super easy.

For security reasons users do not connect to MongoDB from inside our react application,Instead we do that with the help of node and express and that is how we then have all these technologies work together. It's a powerful database which can easily be integrated into a node express environment.

 

# MERN - The Big Picture



![image-20230803224815815](C:\Users\achin\AppData\Roaming\Typora\typora-user-images\image-20230803224815815.png)

The client and the server communicate through requests and responses which are called http requests. All these communications take place in json data format.



