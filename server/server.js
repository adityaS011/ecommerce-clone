import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';
import {v4 as uuid} from 'uuid';
const app = express();
const BASE_URL= process.env.BASE_URL;
dotenv.config();





app.use(cors());
app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send('Hello, world!');
});
app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/', Router);


const PORT = process.env.PORT || 8080;


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL= process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-hyp4sxs-shard-00-00.hpfbplz.mongodb.net:27017,ac-hyp4sxs-shard-00-01.hpfbplz.mongodb.net:27017,ac-hyp4sxs-shard-00-02.hpfbplz.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-czb3lx-shard-0&authSource=admin&retryWrites=true&w=majority`

Connection(username, password);



app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT} `));
DefaultData();

export let paytmMerchantKey= process.env.PAYTM_MERCHANT_KEY;
export let paytmParams= {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'callback';
paytmParams['EMAIL'] = 'aditya.singh.lko2002@gmail.com';
paytmParams['MOBILE_NO'] = '8707297557';
