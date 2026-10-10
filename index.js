import express from 'express'
import dotenv from 'dotenv'
import  {logger} from './middlewares/logger.js'
import { notFound } from './middlewares/notFound.js'
import moviesRouter from './router/movies.js'


dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json)
app.use(logger)
app.use("/movies",moviesRouter)
app.use(notFound)


app.listen(PORT,() => {
    console.log("server is running")
})