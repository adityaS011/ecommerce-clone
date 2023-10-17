import mongoose from "mongoose";

  

export const Connection = async(username, password) =>{
    const URL=`mongodb://${username}:${password}@ac-hyp4sxs-shard-00-00.hpfbplz.mongodb.net:27017,ac-hyp4sxs-shard-00-01.hpfbplz.mongodb.net:27017,ac-hyp4sxs-shard-00-02.hpfbplz.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-czb3lx-shard-0&authSource=admin&retryWrites=true&w=majority`
 
    try {
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true });
       console.log("Database Connected Successfully")
    } catch (error) {
        console.log('Error while connecting to the database', error.message);
    }
}

export default Connection;