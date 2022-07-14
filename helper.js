import { client } from "./index.js";

export async function getAllMobiles(request) {
 return await client.db("Mobiles")
 .collection("Mobiles")
 .find(request.query).toArray();
}

export async function createNewMobile(data){
 return await client.db("Mobiles")
 .collection("Mobiles").insertMany([data]);
}