const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/useroute.js');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/reporter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
  app.use(cors());
// Apply the user routes middleware
app.use('/api', userRoutes);

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 3000');
});