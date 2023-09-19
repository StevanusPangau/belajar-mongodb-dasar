// Query Data
db.customers.find({
  _id: 'Evan',
});

db.customers.find({
  name: 'Stevanus Evan Pangau',
});

db.products.find({
  price: 2000,
});

db.orders.find({
  'items.product_id': 1,
});
