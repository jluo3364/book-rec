const express = require('express')  //importing express framework
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const app = express() //initiating the express app
const port = 3001 //telling app to listen to port 3001

//middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB not connected', err));


app.get('/', (req, res) => { //running the get method which will respond with this text
    res.send('hi<3'); //anyone running this endpoint will get this back in the browser
});

app.listen(port, () => console.log(`Running the app. We are listening on port ${port}!`)) //telling app to listen on port 3000

module.exports = app;