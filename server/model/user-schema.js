import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
     
    firstname: {
         type: String,
         required: true,
         unique: true,
         trim: true,
         min: 5,
         max: 20
    },
    
    lastname: {
         type: String,
         required: true,
         unique: true,
         trim: true,
         indexing: true,
         lowercase: true  
    },
    email: {
         type: String,
         required: true,
         unique: true,
         trim: true,
         lowercase: true  
    },
    
    password: {
         type: String,
         required: true,
          
    },
    username: {
     type: String,
     required: true,
     unique: true,
     
},
    phone: {
         type: String,
         required: true,
          
    },
    

}
);

const user = mongoose.model('user', userSchema);
export default user;