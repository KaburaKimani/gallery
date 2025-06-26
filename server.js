const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Routes
let index = require('./routes/index');
let image = require('./routes/image');

const app = express();

// MongoDB URI
const uri = "mongodb+srv://elizabethkimani:bahatigirls2020@clusterliz.wzbov18.mongodb.net/?retryWrites=true&w=majority&appName=ClusterLiz";

// Connect to MongoDB with Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Mongoose connected to MongoDB'))
.catch((err) => console.error('Mongoose connection error:', err));

// View Engine
app.set('view engine', 'ejs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', index);
app.use('/image', image);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

module.exports = app;
