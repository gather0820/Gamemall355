### README

#### 1.front-end:

Vue/Vue-route/Vuex/element-ui/webpack

#### 2.Management side:

express/node/jsonwebtoken/socket.io/nodemon/mongodb/nodemailer

#### 3.Environmental requirements:

3.1 The environment starts 3306; check whether localhost:3306 can be accessed, and if not, check whether the database is started.
3.2 Create a new database. The specific database environment can be found in the server/config configuration. The new database name and config need to correspond.

#### 4.Installation:

4.1 In client run `npm install`. 
  	In server run `npm install`.
  4.2 In server run `npm run start` (start the api interface)
  4.3 In client run `npm run dev`
  4.4 In client run `npm run dev:admin`
  4.5 front-end:*`localhost:8080`*; Management side:*`localhost:8081`*

#### 5.Mongdo Data:

The file `admins.json` is backend administrator data and needs to be imported into the database. 
The file `goodddetails.json` / `goods.json` / `types.json` is the product details, which can be imported as needed.

PS: The Mogodbdata is in the folder "data". Please install [mongodb compass](https://docs.mongodb.com/compass/master/install/) ；[Chrome](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en-GB) ；[Visual Studio Code2019](https://code.visualstudio.com/download) ; [Node.js](https://nodejs.org/en/) 