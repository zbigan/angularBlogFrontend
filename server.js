//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// var path = require('path');
 
// // serve angular front end files from root path
// app.use('/', express.static('app', { redirect: false }));
 
// // rewrite virtual urls to angular app to enable refreshing of internal pages
// app.get('*', function (req, res, next) {
//     res.sendFile(path.resolve('app/index.html'));
// });
