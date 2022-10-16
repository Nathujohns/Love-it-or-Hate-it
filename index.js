const express = require('express')
const app = express()
const PORT = 3000

// Middleware
app.set('view engine', 'ejs')

// Routes

app.listen(PORT, ()=>{
    console.log('You are running the ahbek-akerha app')
})