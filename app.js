

const express = require('express')
const config = require('config')
const mongoose=require('mongoose')

const app=express()
const cors = require('cors')
app.use(cors())
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/products', require('./routes/products.routes'))
app.use('/api/restaurants', require('./routes/restaurant.routes'))
app.use('/api/cart', require('./routes/cart.routes'))


app.use(express.json({ extended: true }))
const PORT=config.get('port') || 5000

async function start(){
    try{
       await mongoose.connect(config.get('mongoUrl'),{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
       })
        app.listen(PORT, ()=>console.log(`app started on port ${PORT}...`))
    }catch (e) {
     console.log('Server error', e.message)
     process.exit(1)
    }
}

start()

