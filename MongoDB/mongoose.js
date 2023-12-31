const mongoose= require("mongoose");
const Product= require("./Models/product");

mongoose.connect('mongodb+srv://Achint:SHp0D8LNDbe7MVLm@cluster0.auwky5v.mongodb.net/products_test?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to the database!')
}).catch(()=> {
    console.log('connection failed')
});

const createProduct = async (req, res, next)=>{
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });
    const result= await createdProduct.save();
    console.log(typeof createdProduct._id);
    res.json(result);
};

const getProducts= async(req, res, next)=>{
    const products = await Product.find().exec();
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts= getProducts;
