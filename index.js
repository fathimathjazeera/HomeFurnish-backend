import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors'
import userRoute from './routes/user.js';
import connectDb from './config/db.js';
import adminRoute from './routes/admin.js';
configDotenv();

const app = express();
const port = process.env.PORT;
const db_url = process.env.DATABASE_URL;

app.use(cors())
app.use(express.json())
app.use('/api',userRoute,adminRoute)



app.listen(port, () => {
  console.log(`Server running on ${port}`);
  connectDb(db_url)
});