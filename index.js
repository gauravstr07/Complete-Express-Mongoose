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

const save = async () => {
  const Product = new mongoose.Schema({
    name: String,
    price: Number,
    beand: String,
    category: String,
  });

  const ProductModel = mongoose.model("products", Product);
  let data = new ProductModel({
    name: "Redmi 9A",
    price: 1100,
    brand: "MI",
    category: "Mobile",
  });

  let result = await data.save();
  console.log(result);
};

save();
