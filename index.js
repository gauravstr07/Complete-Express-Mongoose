const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/e-comm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successfull to mongoDB😍");
  })
  .catch((err) => {
    console.log(`Something went wrong in DB 😪 --------- ${err}`);
  });

const saveInDb = async () => {
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    beand: String,
    category: String,
  });

  //Adding Data in DB
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = new ProductModel({
    name: "Redmi 9A",
    price: 1100,
    brand: "MI",
    category: "Mobile",
  });
  // let result = await data.save();
  // console.log(result);

 //Updaye In DB
  const updateInDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
      {name: "Redmi 10A"},
      {
        $set:{name: "Redmi 10A", price: 1200}
      }
    )
    console.log(data);
  }
  updateInDB();
};

saveInDb();


