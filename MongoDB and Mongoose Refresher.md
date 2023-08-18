# MongoDB and Mongoose Refresher

Mongoose models help us to define a structure for information stored in the mongoDB database.

MongoDb is a noSQL database, which stores documents in so called collection. what it does is-

- Store Application data(users, places,etc..)
- Enforces no data schema or relations.
- It can also be easily connected to node/Express.

Its a powerful database which can easily be integrated into a node/express environment.

## Difference between  NoSQL and SQL

| No SQL                                   | SQL                                           |
| ---------------------------------------- | --------------------------------------------- |
| MongoDB, CoutchDB                        | MySQL,MS SQL                                  |
| Enforces no data schema                  | Enforces a strict data schema                 |
| Less focused on relations                | Relations are a core feature                  |
| "Independent Documents"                  | Records are related                           |
| Great for : logs, orders,(chat) messages | Great for: shopping carts, contacts, networks |

  

## Why connecting React and MongoDB is not preffered.

Secure authentication is not possible if one directly interacts with the database, then it need access codes and emails one can embed it in the browser but anyone with the access to the browser has access to the credentials which is not very secure approach.



## Mongoose

Its a third party library and it builds up on the official mongodb driver, and its a third party library which makes up the interaction with mongodb very continent.

It uses schemas and they allow you to define the structure of the documents you want to store in your database.