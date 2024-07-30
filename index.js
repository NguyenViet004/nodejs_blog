const express = require('express');
const app = express()
const port = 3000

var a = 1;
var b = 2;
var c = a + b;

app.get('/',(req, res) => res.send('Hello world!'))
app.listen(port, () => console.log(`Examle app listening at http://localhost:${port}`))