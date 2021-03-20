const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('../src/routes/auth')
const adminRoutes = require('../src/routes/admin/auth')
const foodItemRoutes = require('../src/routes/fooditem')

env.config()


mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.nk53i.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('database connected')
})

app.use(express.json())
app.use('/api', userRoutes)
app.use('/api', adminRoutes)
app.use('/api', foodItemRoutes)

app.listen(process.env.PORT, (req, res) => {
    console.log(`server is running on port ${process.env.PORT}`)
})
