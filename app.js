'use strict';

// 3rd Party Resources
require('dotenv').config();
const {db} = require('./src/auth/models/index');
const  app  = require('./src/server')
const port = process.env.PORT;


// make sure our tables are created, start up the HTTP server.
db.sync()
  .then(() => {
    app.start(port)
  }).catch(e => {
    console.error('Could not start server', e.message);
  });
