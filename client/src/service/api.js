import axios from 'axios';

const URL = 'https://mern-flipkart-clone.onrender.com/';

export const authenticateSignup = async(data)=>{
     try {
        return await axios.post(`${URL}/signup`, data)
     } catch (error) {
        console.log('Error while calling api', error);
     }
}

export const authenticateLogin = async(data)=>{
     try {
        return await axios.post(`${URL}/login`, data)
     } catch (error) {
        console.log('Error while calling login api', error);
        return error.response;
     }
}
export const getProductById = async (id) => {
   try {
       return await axios.get(`${URL}/product/${id}`);
   } catch (error) {
       console.log('Error while getting product by id response', error);
   }
}
export const payUsingPaytm = async(data)=>{
   try {
      let response= await axios.get(`${URL}/payment`, data);
      return response.data;
   } catch (error) {
      console.log("error in paytm api")
      
   }
}
