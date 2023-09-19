// Element Query Operator
// Mencari data yang memiliki category
db.products.find({
  category: {
    $exists: true,
  },
});

// Mencari data yang tidak memiliki category
db.products.find({
  category: {
    $exists: false,
  },
});

db.products.find({
  category: {
    $type: 'string',
  },
});

db.products.find({
  price: {
    $type: ['int', 'long'],
  },
});
