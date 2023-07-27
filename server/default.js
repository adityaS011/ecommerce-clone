import {products} from './constants/data.js';
import Product from './model/product-schema.js';


const DefaultData = async()=>{
    try {
       
        await Product.insertMany(products);

        console.log('Data imported successfuly');
    } catch (error) {
        console.log('Error while inserting data:', error.message);  
    }
} 
export default DefaultData;