// app.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./models/index');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.log('Error connecting to the database', err);
});
