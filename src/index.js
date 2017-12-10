// Load polyfills, before running the server
//require("babel-polyfill")

// Register babel to have ES6 support on the server
//require("babel-register")

// Force Intl to be polyfilled because NodeJS French date format does not use padding (1/1/2016)
// whereas npm intl module does (01/01/2016). This leads to DOM mismatch between server and client in React.
//global.Intl = require("intl")

// Start the server app
//require("./src/server.js")


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


console.log("index.js");
ReactDOM.render(<App />, document.getElementById('root'));
