## Problem Statement

A JavaScript application simulating house automation: Pressing a button on a control panel would visually turn on a light, change the temperature or close the curtains. Some constraints:

1. The application must use jQuery
2. The components must have HTTP based "server" interaction (use a static file for simplicity, data persistence is not required). For example, the heating component retrieves the current temperature from the server and also sends the desired one back to the server.


## Development model
A simple HomeAutomationSimulator application with Node JS, Express JS and Angular JS. jQuery has been utilized to listen to various events. The API request's response has been mocked and included in rooms.json file. There is no server side coding involved.

## Technology requirements

You should install Node globally before proceeding. Once the node is installed, Install "Express-Generator" in the directory from where the app is running, . 

1. [Node.js] (http://nodejs.org/download/)
2. <<app dir>> npm install -g express-generator
3. <<app dir>>npm install grunt
4. <<app dir>> npm install grunt-express-server

Once these are installed

```javascript
npm install
```
This will fetch all the dependies from package.json

```javascript
npm start
```
This starts the express server on port 9090 (I changed the default port in `bin/www` file).


