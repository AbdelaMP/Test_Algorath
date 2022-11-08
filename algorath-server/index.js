const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

const app = express();
// Define port number for the server.
const PORT = 400;

//Conexion base de datos
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/algorath/users', require('./routes/users'));

// When visitors make a GET request to address "/", specify the response.

// app.get('/', (req, res) =>
//     res.send(`Node and Express server running on port ${PORT}`)
// );

// Send message to the console to confirm that the server is running on the specified port.
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);

