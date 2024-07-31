import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'
import visionaryRoutes from './routes/visionaryRoutes.js'

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/visionary',visionaryRoutes);

app.get('/', async (req, res) => {
  res.send("Hello World");
});


const startServer = async () => {
  
try{
  connectDB(process.env.MONGODB_URL)
  app.listen(8080, () => {
    console.log("Server has started");
  });
}catch(error){
  console.log(error);
}
};

startServer();
