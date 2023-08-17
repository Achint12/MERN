# Building a REST API Backend

with Node.js & Express





### Express 

It is a node js framework and it makes node js easier. by giving you a lot of utiliy functions parsing data easier.

### Middleware

bunch of functions that can be called on incoming requests and every function can do something with this incoming request or with this response which is about to be sent. but one can only send one response per request though.

### params 

this property holds an object where your dynamic segments here will exist as keys and the value will be the concrete value of the user who sent the request entered.



### Controllers

these are the files that hold the actual logic that should execute when a certain route is reached so they glue together the incoming request and then our models and the logic that should run for such an incoming request.

- If something was succesfully created one has to send a conventional code of 201, and in case of error one sends 404. if authentication fails code is 401. 422 is used when the user input is invalid.
- middlewares always get parsed top to bottom.
- If one enters something in the browser URL, it by default is a get request so if we have a post route handling that request one can use postman app.
- Postman is simply a tool that allows you to test or send or request to API's.

### UUID package

UUID package is a package that is capable of generating unique ID's. 

### Express Validators

express validators is a library to run various validations across our code one can also do that by adding multiple if statements to our code but this makes it easier as it contains the same logic middleware that will help us achieve the same.

