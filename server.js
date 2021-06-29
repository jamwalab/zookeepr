//Just like hrml, this will read index.js by default
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
//const {animals} = require('./data/animals');
//const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming json data
app.use(express.json());
//front end html request have access to js and style
//Use before Api ones
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

/////Way to put static later
//app.use('/api/index.js', apiRoutes);
//app.use('/index.js', htmlRoutes);
//app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => {
    console.log('API server now on port 3001!!');
});