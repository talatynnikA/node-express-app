
const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const {application} = require("express");
const PORT = process.env.port || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(todoRoutes)
app.use(express.urlencoded({extended: true}))

async function start() {
    try{

     await mongoose.connect('mongodb+srv://user_example:password_example@cluster0.pz98y.mongodb.net/todos',{

     } )

        console.log('koro4 conneht')
    }
    catch (e){
        console.log(e)
    }
}
app.listen(PORT, () =>{
    console.log('server has been started...')
})

start()
