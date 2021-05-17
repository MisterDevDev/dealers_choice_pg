const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use('/packages', require('./routes/packages'))


app.get("/", (req, res) => {
    res.redirect("/packages");
})


const Port = 1337;
app.listen(Port, () => {
    console.log(`App is listening on Port ${Port}`)
})