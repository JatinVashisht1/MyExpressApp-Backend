const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname,'routes/myRoutes.js')))



app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
});



