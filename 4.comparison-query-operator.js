// Comparison Query Operator
db.products.insertMany([
  {
    _id: 3,
    name: 'Pop Mie Rasa Baksi',
    price: new NumberLong('2500'),
    category: 'food',
  },
  {
    _id: 4,
    name: 'Samsung Galaxy S10',
    price: new NumberLong('9000000'),
    category: 'handphone',
  },
  {
    _id: 5,
    name: 'Acer Predator',
    price: new NumberLong('10000000'),
    category: 'laptop',
  },
]);

// cari = eq
db.customers.find({
  _id: {
    $eq: 'Evan',
  },
});

db.products.find({
  price: {
    $gt: 2000,
  },
});

// mencari data dengan array
db.products.find({
  category: {
    $in: ['laptop', 'handphone'],
  },
  price: {
    $gt: 9000000,
  },
});
