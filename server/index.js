
import mongoose from 'mongoose';
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './routers/routers.js';
import multer from 'multer'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const connectToMongoose = async () => {
    (await mongoose.connect("mongodb+srv://jinxforever8341:XTh0aGk4B04BrgD7@cluster0.8wynrga.mongodb.net/",{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(5000, () => console.log`connected sucessfully`))
    .catch((error) => 
        console.log(error.message)
    )

)

}

connectToMongoose();



app.use(router)