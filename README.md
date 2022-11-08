This project was done for the test and was built using the MEAN stack (https://www.mongodb.com/mean-stack).
#FrontEnd 

## Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version  14.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Server
We will need to install the last version of node for the backend with the version 16.14.0.

The server is running in the live server Express with version 4.18.2, Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

In our config we will need to run the command ' npm install' to install every package needed.

To run our server we will run the command 'npm run dev' and check on the url browser 'http://localhost:400/'.

## Database
In this case we built a non-relational database with MongoDB (https://www.mongodb.com/) and integrated with mongoose (https://mongoosejs.com/) to connect our backend.

To work with the project we will need to create a database with mongoDB, in our case we used the tool MongoDB Compass (https://www.mongodb.com/products/compass), in our case we created a database called algorath on the port 27017, as specified in the server project.

After we created our database we will create a collection called users and we will populate it inserting our JSON file (https://www.mongodb.com/docs/compass/current/documents/insert/) on the folder of our project 'algorath-db'.

## Test the webapp
After you got everything setup with the MEAN framework you can go to the angular folder and run it with the command 'ng serve' (in case it fails run the command 'ng built').

The web app will let you do all the requirements and you can see the options on the list of users or on the navegation bar if you make sure you got the server well configurated.

We can appreciate these different sections:
| Section | Access |
| --- | --- |
| List User | Via the navegation bar |
| Create User | Via navegation bar or the button on the list |
| Conect/Edit Users | Via the users list |
| Stats of the connection | Via the navigation bar |

In case you got any questions or need a deeper explanation contact my email: abdelamesquini@gmail.com .


