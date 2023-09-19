// ============= $expr Operator =============
db.customers.insertOne({
  _id: 'tivani',
  name: 'tivani',
});

// mencoba mencari mana id yang sama dengan name
db.customers.find({
  $expr: {
    $eq: ['$_id', '$name'],
  },
});

// ============= $jsonSchema Operator =============
db.products.find({
  $jsonSchema: {
    required: ['name', 'category'],
  },
});

db.products.find({
  $jsonSchema: {
    required: ['name'],
    properties: {
      name: {
        type: 'string',
      },
      price: {
        type: 'number',
      },
    },
  },
});

// ============= $mod Operator =============
db.products.find({
  price: {
    $mod: [5, 0],
  },
});

db.products.find({
  price: {
    $mod: [1000000, 0],
  },
});

// ============= $regex Operator =============
db.products.find({
  name: {
    $regex: /mie/,
    $options: 'i', // i = case insensitive
  },
});

db.products.find({
  name: {
    $regex: /^Mie/, // ^ = start with
  },
});

// ============= $where Operator =============
// $where = untuk mencari data yang tidak bisa dilakukan dengan operator lain misalnya mencari data dengan function
// tapi bukan function untuk memangil api, dll. jadi untuk func yang simple aja

db.customers.find({
  $where: function () {
    return this._id === this.name;
  },
});
// notes! jika dijalankan di compass maka akan error, karena compass tidak support $where untuk function
