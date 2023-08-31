require('dotenv').config();
const express = require('express');
const colors = require('colors');
const cors = require('cors');

const server = express();
server.use(cors());

server.listen(process.env.PORT, () => {
    console.log(`escuchado en el puerto: ${process.env.PORT}`.bgGreen);
});