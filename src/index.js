const express = require('express') // dowload express library
const path = require('path')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const { url } = require('inspector');
const { urlencoded } = require('express');
const { json } = require('express/lib/response');
const app = express()
const port = 3000

const route=require('./routes')
const db=require('./config/db')


//connect Db
db.connect()


app.use(express.static(path.join(__dirname,'public')))
// HTTP logger
// app.use(morgan('combined'))
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
// Template engine
app.engine('hbs', engine({
extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// route
route(app)
// 127.0.0.1 - localhost
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})