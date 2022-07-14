
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
import { getAllMobiles } from './helper.js';
import { createNewMobile } from './helper.js';

import cors from "cors"
dotenv.config();


const app = express()

app.use(cors());

const PORT=process.env.PORT;
 app.use(express.json())
const MONGO_URL=process.env.MONGO_URL;
 async function createConnection(){
  const client =new MongoClient(MONGO_URL);
   await client.connect();
   console.log("mongo is connected😊👍");
   return client;
}
 export const client =await createConnection();
 app.get('/mobiles', async function (request, response) {
  const mobiles= await getAllMobiles(request);
  response.send(mobiles);
  
  })

app.post('/mobiles', async function (request, response) {
 const data=request.body;
 console.log(data)
 const result=await createNewMobile(data);
      response.send(result);
      console.log(result)
   
})
app.listen(PORT,()=>console.log(`App started in ${PORT}`));





 
 