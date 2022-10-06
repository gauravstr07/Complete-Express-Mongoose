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
    name: "Galaxy s21 ultra",
    price: 2900,
    brand: "Samsung",
    category: "Mobile",
  });
  // let result = await data.save();
  // console.log(result);

  //Updaye In DB
  const updateInDB = async () => {
    const Product = mongoose.model("products", ProductSchema);
    let data = await Product.updateOne(
      { name: "Redmi 10A" },
      {
        $set: { name: "Redmi 10A", price: 1200 },
      }
    );
    console.log(data);
  };
  // updateInDB();

  const deleteInDB = async () => {
    let Product = mongoose.mongoose.model("products", ProductSchema);
    let data = await Product.deleteOne({ name: "Redmi 10A" });
    console.log(data);
  };
  // deleteInDB();

  const findInDb = async () => {
    let Product = mongoose.model("products", ProductSchema);
    let data = await Product.find({});
    console.log(data);
  };
  findInDb();
};

saveInDb();
