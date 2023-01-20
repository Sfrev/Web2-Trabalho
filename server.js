// Create a login backend with node.js

// Step 1: Import the necessary packages and modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');

// Step 2: Create an instance of the Express app
const app = express();

// Step 3: Set up the body-parser to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Step 4: Create a secret key
const SECRET_KEY = 'secret_key123';

// Step 5: Create a data store for users
const users = [
  {
    username: 'admin',
    password: 'password'
  }
];

// Step 6: Set up the route for authentication
app.post('/server', (req, res) => {
  // Step 6a: Retrieve the username and password from the request body
  const { username, password } = req.body;
  
  // Step 6b: Find the user in the data store
  const user = users.find(u => u.username === username && u.password === password);

  // Step 6c: If the user is found, generate a JWT
  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, {
      expiresIn: '24h'
    });
    res.json({
      message: 'Successfully logged in!',
      token
    });
  } else {
    // Step 6d: If the user is not found, return an error
    res.status(401).json({
      error: 'Invalid credentials!'
    });
  }
});

// Step 7: Set up the route for serving the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Step 8: Start the server
app.listen(3000, () => {
  console.log('Server is running at port 3000');
});