const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// my url of database
mongoose.connect('mongodb://127.0.0.1:27017/node-crud-app', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', UserSchema);

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a user
app.post('/users', (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
});

// Read all users
app.get('/users', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err));
});

// Read a user
app.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
});

// Update a user
app.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
});

const port = 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
