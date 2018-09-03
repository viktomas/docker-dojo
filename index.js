const express = require('express');
const app = express();

const name = process.env.GREET_NAME || "World";
app.get('/', (req, res) => res.send(`Hello ${name}`));

app.listen(80, () => console.log('app listening on port 80!'));
