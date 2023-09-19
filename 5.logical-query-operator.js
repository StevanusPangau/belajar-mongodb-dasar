// Logical Query Operator
db.products.find({
  $and: [
    {
      category: {
        $in: ['laptop', 'handphone'],
      },
    },
    {
      price: {
        $gt: 9000000,
      },
    },
  ],
});

// Not
db.products.find({
  category: {
    $not: {
      $in: ['laptop', 'handphone'],
    },
  },
});
