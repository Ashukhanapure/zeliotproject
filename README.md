# Node.js Rest APIs with Express, Sequelize & MySQL example



app folder

./ config dir:- which stores the database details & environment variables like database for production & development

./ controller dir:- which holds the functional files, these files are responsible to manage the data from models & responces.

./ model dir:- it stores database table schemas i.e each model have their table structure operations with that.

./route dir:- it keeps application or restful apis routes configuration.

server.js:- it is the main file which executes application & provides the listening port of requests.

package.json:- here, file keep tracks of application dependencies. node modules folder contain package dependent files which we install via npm.

* package.json installation npm init -y

* package installations 
         this restful application. we will install packages as express,sequelize, mysql2, nodemon, bodyparser etc.



express: web application framework for node application.

sequelize: its nodejs ORM for postgres,mysql etc.

mysql2: database driver for application.

nodemon: its tool which restarts node development server automatically when it listen any changes.

body-parser: it's a middleware to a accept body parameter values to methods.


npm install express sequelize sequelize-cli nodemon mysql2 bodyparser


HTTP METHODS:

Post: create
Delete: delete
Get: listall
put: update
1 get: single data


## Project setup
```
npm install
```

### Run
```
node server.js
```
