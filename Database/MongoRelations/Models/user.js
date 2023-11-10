const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/MongoRelations");
}

const customer = new Schema({
  name: String,
  address: [
    {
      // _id: false,
      address: String,
      city: String,
      pincode: Number,
    },
  ],
});

const Customer = mongoose.model("customer", customer);

const addCustomer = async () => {
  const customer = new Customer({
    name: "Rahul",
    address: [
      { address: "shakti road", city: "kanpur", pincode: 12131 },
      { address: "road number 3", city: "kanpur", pincode: 21321 },
    ],
  });
  customer.save();
  console.log("Data Saved");
};

const addAddress = async (id) => {
  let customer = await Customer.findById(id);
  customer.address.push({
    address: "mayur vihar",
    city: "kanpur",
    pincode: 31313,
  });
  await customer.save();
};

// addCustomer();
// addAddress("654e0503af2dece57a6b549d");
