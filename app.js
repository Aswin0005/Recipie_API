require('dotenv').config()
const express = require('express')
let cors = require('cors');
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

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://your-frontend.com');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Private-Network', true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader('Access-Control-Max-Age', 7200);

  next();
});


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