const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8086
// app.use(bodyParser()
app.get('/test', (req, res) => {
    res.status(400).send('Hello')
})


app.listen(PORT, () => {
    console.log("running at port", PORT)
})

exports.app = app;
