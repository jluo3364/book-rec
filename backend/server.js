const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3001;

const UserModel = require('./models/Users');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB not connected', err));

// Base route
app.get('/', (req, res) => {
    res.send('hi<3');
});

app.post('/login', async (req, res) => {
    console.log("Login route hit");
    const { username, password } = req.body;
    console.log(req.body);

    try {
        const user = await UserModel.findOne({ username }).lean();
        if (!user) {
            return res.status(404).json("User not found");
        }
        
        if (password === user.password) { 
            res.json("Login success");
        } else {
            res.status(401).json("Wrong password");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json("Server error");
    }
});

app.listen(port, () => console.log(`Running the app. We are listening on port ${port}!`));
