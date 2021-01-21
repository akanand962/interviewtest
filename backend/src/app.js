const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
const mongoose =  require('mongoose')
const{ MONGOURL} = require('./keys')

require('./models.js/user')

 app.use(express.json())
 app.use(cors())
 const routes = require('./routers/auth')
 app.use(routes)

mongoose.connect(MONGOURL,
{useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected',()=>{
    console.log('mongo daba connetct')
})


app.listen(port,()=>{
    console.log('running on port no aka ' + port)
})