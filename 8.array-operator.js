// insert data yang memilik array
db.products.insertMany([
  {
    _id: 6,
    name: 'Logitech Wireless Mouse',
    price: new NumberLong(150000),
    tags: ['logitech', 'accessories', 'mouse'],
  },
  {
    _id: 7,
    name: 'Cooler Pad Gaming',
    price: new NumberLong(200000),
    tags: ['laptop', 'fan', 'accessories'],
  },
  {
    _id: 8,
    name: 'Samsung Curved Monitor',
    price: new NumberLong(1750000),
    tags: ['samsung', 'monitor', 'computer'],
  },
]);

// ======================= $all =======================
// $all digunakan untuk mencari data yang memiliki array yang sama

db.products.find({
  tags: {
    $all: ['samsung', 'monitor'],
  },
});

// ======================= $elemMatch =======================
// $elemMatch digunakan untuk mencari data yang memiliki array yang sama
db.products.find({
  tags: {
    $elemMatch: {
      $in: ['samsung', 'logitech'],
    },
  },
});

// ======================= $size =======================
// $size digunakan untuk mencari data yang memiliki array yang sama
db.products.find({
  tags: {
    $size: 3,
  },
});
