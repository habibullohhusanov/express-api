import express from 'express';
import connect from './config/dbConfig.js';
import prodRoute from './routes/productRoute.js';
import authRoute from './routes/authRoute.js';

const URL = process.env.URL;
const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/auth', authRoute);
app.use('/api/products', prodRoute);

app.listen(PORT, () => {
    connect();
    console.log(`${URL}:${PORT}`);
})