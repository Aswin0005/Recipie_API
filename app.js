require('dotenv').config()
const express = require('express')
const app = express();
//ConnectDB
const connectDb = require('./db/dbConnect')


//Error Handler 
const notFoundMiddleWare = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authentication = require('./middleware/authentication')

//routes
const authRouter = require('./routes/auth')
const searchRouter = require('./routes/search')
const jobsRouter = require('./routes/jobs');
const allRouter = require('./routes/alljob')
app.use(express.json())

app.get('/',(req,res) => {
    res.send('Hello')
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/search',searchRouter)
app.use('/api/v1/user',authentication,
)
app.use('/api/v1/jobs',allRouter)
app.use('/api/v1/jobs',authentication, jobsRouter);

//MiddleWare
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try{
        await connectDb(process.env.MANGO_URI);
        app.listen(port,() => {
        console.log(`Server is listening to port ${port}...`)
        })
    } catch(error){
        console.log(error)
    }
}
start()