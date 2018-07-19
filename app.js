import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// FILE METADATA
const upload = multer({ dest: 'uploads/' });

// API ROUTE
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
