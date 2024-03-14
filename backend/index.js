import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConnect.js';
import userRouter from './Routers/user.router.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use('/api', userRouter);

app.get('/',(req,res) => {
    res.status(200).send('<h4>API Calls</h4>');
})

const port = process.env.PORT;

app.listen(port,()=>{
    console.log("App running in port -", port);
})