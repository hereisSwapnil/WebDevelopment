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

const order = new Schema({
  item: String,
  price: Number,
});

const customer = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", order);
const Customer = mongoose.model("Customer", customer);

const addCustomer = async (name) => {
  let customer_ = new Customer({ name });
  customer_.save();
};

const addItems = async (item, price, id) => {
  let customer_ = await Customer.findById(id);
  let orders_ = new Order({ item: item, price: price });
  orders_.save();
  customer_.orders.push(orders_);
  customer_.save();
};

const viewCustomer = async (id) => {
  // this will populate the customer with orders not object ids
  let customer_ = await Customer.findById(id).populate("orders");
  console.log(customer_);
};

// addCustomer("Rahul");
// addItems("Handi Paneer", 240, "654e190b39ef14d5eefd6041");
viewCustomer("654e190b39ef14d5eefd6041");
