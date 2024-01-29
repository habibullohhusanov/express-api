import express from 'express';
import connect from './config/dbConfig.js';

const PORT = process.env.PORT;
const URL = process.env.URL;

const app = express();



import prodRoute from './route/product.route.js'

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/product', prodRoute)

app.listen(PORT, () => {
    connect();
    console.log(`${URL}:${PORT}`);
})