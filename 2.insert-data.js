// Insert Data
db.customers.insertOne({
  _id: 'Evan',
  name: 'Stevanus Evan Pangau',
});

db.products.insertMany([
  {
    _id: 1,
    name: 'Indomie Goreng',
    price: new NumberLong('2000'),
  },
  {
    _id: 2,
    name: 'Mie Sedap Soto',
    price: new NumberLong('2000'),
  },
]);

db.orders.insertOne({
  _id: new ObjectId(),
  total: new NumberLong('4000'),
  items: [
    {
      product_id: 1,
      price: new NumberLong('2000'),
      quantity: new NumberInt('2'),
    },
    {
      product_id: 2,
      price: new NumberLong('2000'),
      quantity: 2,
    },
  ],
});
