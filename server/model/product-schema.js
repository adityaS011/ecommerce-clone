import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
         type: String,
         required: true,
         unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String

}
);

const Product = mongoose.model('product', productSchema);
export default Product;