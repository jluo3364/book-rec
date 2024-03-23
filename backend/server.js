const express = require('express')  //importing express framework
const app = express() //initiating the express app
const port = 3000 //telling app to listen to port 3000

app.get('/', (req, res) => { //running the get method which will respond with this text
    res.send('hi<3'); //anyone running this endpoint will get this back in the browser
});

app.listen(port, () => console.log(`Running the app. We are listening on port ${port}!`)) //telling app to listen on port 3000