const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
let port = 3001;

const UserModel = require("./models/Users");

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB not connected", err));

// Base route
app.get("/", (req, res) => {
  res.send("hi<3");
});

app.post("/login", async (req, res) => {
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
// port = 8086;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post("/upload", (req, res) => {
//   const photo = req.files.photo;
//   const filePath = path.join(__dirname, photo.name);
//   photo.mv(filePath, (err) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.send("File uploaded successfully");
//   });
// });

// app.listen(port, () => console.log(`Server running on port ${port}`));
module.exports = function startServer(port) {
  app.listen(port, () => {
    console.log(`Server 1 is listening on port ${port}`);
  });
};
