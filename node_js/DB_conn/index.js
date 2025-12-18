const express = require('express');
const mongoose = require('./db');
const {connect} = require("mongoose");
const {compileETag} = require("express/lib/utils");
const app = express();

app.use(express.json());
app.use('/api/users', require('./routes/User'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));