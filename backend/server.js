const express = require('express');
const app = express();
const port = 8084;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/upload', (req, res) => {
    const photo = req.files.photo;
    const filePath = path.join(__dirname, photo.name);
  
    photo.mv(filePath, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.send('File uploaded successfully');
    });
  });

app.listen(port, () => console.log(`Server running on port ${port}`));
