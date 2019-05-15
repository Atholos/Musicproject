**Music Upload Project.**



**Authors**
```
Arttu Jokinen, Joachim Grotenfelt, Markus Saronsalo
```
This Project is currently running and can be accessed from [10.114.32.39/app/](http://10.114.32.39/app/).
**NOTE**: App can be only accessed from Metropolia UACs intranet! You'll either have to be on site or use a vpn to connect to vpn.metropolia.fi. For this you need student/teacher credentials!

**Built With**
```
WebStorm - Coding (CSS,HTML, JS)
PhpMyAdmin - SQL Database
ERD-Plus - Database ER model
```

**How to Deploy.**
 1. Download this project to your machine
 2. with node run NPM intstall package.json. This will get you all of the required dependencies 
 3. For the App to be ran you'll need an SQL database. Our database structure is in the musicproject.sql file.
    - Also a .env file needs to be setup with the following:
    
       DB_HOST: "host address for the database here" E.g. DB_HOST=localhost for localhost usage
       
       DB_USER: "database username here"
       
       DB_NAME: "database name here"
       
       DB_PASS: "database password here"
       
       
 4. After setting up a database and running the app for example with nodemon the app should work by going to your browser and typing in to 
    the address bar: localhost:3000
