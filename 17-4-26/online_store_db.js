use online_store_db
switched to db online_store_db
db.customers.find()
{
  _id: ObjectId('69e1f061fdf4874a463961c8'),
  customer_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  membership: 'Gold',
  age: 24
}
{
  _id: ObjectId('69e1f061fdf4874a463961c9'),
  customer_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  membership: 'Silver',
  age: 28
}
{
  _id: ObjectId('69e1f061fdf4874a463961ca'),
  customer_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  membership: 'Gold',
  age: 32
}
{
  _id: ObjectId('69e1f061fdf4874a463961cb'),
  customer_id: 4,
  name: 'Sneha',
  city: 'Delhi',
  membership: 'Silver',
  age: 26
}
{
  _id: ObjectId('69e1f061fdf4874a463961cc'),
  customer_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  membership: 'Gold',
  age: 30
}
{
  _id: ObjectId('69e1f061fdf4874a463961cd'),
  customer_id: 6,
  name: 'Meera',
  city: 'Chennai',
  membership: 'Bronze',
  age: 27
}
db.products.find()
{
  _id: ObjectId('69e1f051fdf4874a463961c0'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 75000,
  stock: 10
}
{
  _id: ObjectId('69e1f051fdf4874a463961c1'),
  product_id: 102,
  name: 'Phone',
  category: 'Electronics',
  price: 50000,
  stock: 15
}
{
  _id: ObjectId('69e1f051fdf4874a463961c2'),
  product_id: 103,
  name: 'Desk',
  category: 'Furniture',
  price: 15000,
  stock: 8
}
{
  _id: ObjectId('69e1f051fdf4874a463961c3'),
  product_id: 104,
  name: 'Chair',
  category: 'Furniture',
  price: 7000,
  stock: 20
}
{
  _id: ObjectId('69e1f051fdf4874a463961c4'),
  product_id: 105,
  name: 'Tablet',
  category: 'Electronics',
  price: 30000,
  stock: 12
}
{
  _id: ObjectId('69e1f051fdf4874a463961c5'),
  product_id: 106,
  name: 'Printer',
  category: 'Electronics',
  price: 12000,
  stock: 5
}
db.orders.find()
{
  _id: ObjectId('69e1f03ffdf4874a463961b6'),
  order_id: 1001,
  customer_id: 1,
  product_id: 101,
  quantity: 1,
  order_date: '2026-03-01',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b7'),
  order_id: 1002,
  customer_id: 2,
  product_id: 102,
  quantity: 2,
  order_date: '2026-03-02',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b8'),
  order_id: 1003,
  customer_id: 1,
  product_id: 105,
  quantity: 1,
  order_date: '2026-03-03',
  status: 'Pending'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b9'),
  order_id: 1004,
  customer_id: 3,
  product_id: 103,
  quantity: 1,
  order_date: '2026-03-05',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961ba'),
  order_id: 1005,
  customer_id: 5,
  product_id: 102,
  quantity: 3,
  order_date: '2026-03-07',
  status: 'Cancelled'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bb'),
  order_id: 1006,
  customer_id: 6,
  product_id: 104,
  quantity: 4,
  order_date: '2026-03-08',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bc'),
  order_id: 1007,
  customer_id: 4,
  product_id: 106,
  quantity: 2,
  order_date: '2026-03-09',
  status: 'Pending'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bd'),
  order_id: 1008,
  customer_id: 3,
  product_id: 101,
  quantity: 1,
  order_date: '2026-03-10',
  status: 'Delivered'
}
db.customers.find({ city: "Hyderabad" })
{
  _id: ObjectId('69e1f061fdf4874a463961c8'),
  customer_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  membership: 'Gold',
  age: 24
}
{
  _id: ObjectId('69e1f061fdf4874a463961cc'),
  customer_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  membership: 'Gold',
  age: 30
}
db.products.find({ category: "Electronics" })
{
  _id: ObjectId('69e1f051fdf4874a463961c0'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 75000,
  stock: 10
}
{
  _id: ObjectId('69e1f051fdf4874a463961c1'),
  product_id: 102,
  name: 'Phone',
  category: 'Electronics',
  price: 50000,
  stock: 15
}
{
  _id: ObjectId('69e1f051fdf4874a463961c4'),
  product_id: 105,
  name: 'Tablet',
  category: 'Electronics',
  price: 30000,
  stock: 12
}
{
  _id: ObjectId('69e1f051fdf4874a463961c5'),
  product_id: 106,
  name: 'Printer',
  category: 'Electronics',
  price: 12000,
  stock: 5
}
db.orders.find({ status: "Delivered" })
{
  _id: ObjectId('69e1f03ffdf4874a463961b6'),
  order_id: 1001,
  customer_id: 1,
  product_id: 101,
  quantity: 1,
  order_date: '2026-03-01',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b7'),
  order_id: 1002,
  customer_id: 2,
  product_id: 102,
  quantity: 2,
  order_date: '2026-03-02',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b9'),
  order_id: 1004,
  customer_id: 3,
  product_id: 103,
  quantity: 1,
  order_date: '2026-03-05',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bb'),
  order_id: 1006,
  customer_id: 6,
  product_id: 104,
  quantity: 4,
  order_date: '2026-03-08',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bd'),
  order_id: 1008,
  customer_id: 3,
  product_id: 101,
  quantity: 1,
  order_date: '2026-03-10',
  status: 'Delivered'
}
db.products.find({ price: { $gt: 30000 } })
{
  _id: ObjectId('69e1f051fdf4874a463961c0'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 75000,
  stock: 10
}
{
  _id: ObjectId('69e1f051fdf4874a463961c1'),
  product_id: 102,
  name: 'Phone',
  category: 'Electronics',
  price: 50000,
  stock: 15
}
db.products.find({ price: { $gte: 10000, $lte: 50000 } })
{
  _id: ObjectId('69e1f051fdf4874a463961c1'),
  product_id: 102,
  name: 'Phone',
  category: 'Electronics',
  price: 50000,
  stock: 15
}
{
  _id: ObjectId('69e1f051fdf4874a463961c2'),
  product_id: 103,
  name: 'Desk',
  category: 'Furniture',
  price: 15000,
  stock: 8
}
{
  _id: ObjectId('69e1f051fdf4874a463961c4'),
  product_id: 105,
  name: 'Tablet',
  category: 'Electronics',
  price: 30000,
  stock: 12
}
{
  _id: ObjectId('69e1f051fdf4874a463961c5'),
  product_id: 106,
  name: 'Printer',
  category: 'Electronics',
  price: 12000,
  stock: 5
}
db.customers.find({ age: { $gt: 26 } })
{
  _id: ObjectId('69e1f061fdf4874a463961c9'),
  customer_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  membership: 'Silver',
  age: 28
}
{
  _id: ObjectId('69e1f061fdf4874a463961ca'),
  customer_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  membership: 'Gold',
  age: 32
}
{
  _id: ObjectId('69e1f061fdf4874a463961cc'),
  customer_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  membership: 'Gold',
  age: 30
}
{
  _id: ObjectId('69e1f061fdf4874a463961cd'),
  customer_id: 6,
  name: 'Meera',
  city: 'Chennai',
  membership: 'Bronze',
  age: 27
}
db.orders.find({ quantity: { $gt: 1 } })
{
  _id: ObjectId('69e1f03ffdf4874a463961b7'),
  order_id: 1002,
  customer_id: 2,
  product_id: 102,
  quantity: 2,
  order_date: '2026-03-02',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961ba'),
  order_id: 1005,
  customer_id: 5,
  product_id: 102,
  quantity: 3,
  order_date: '2026-03-07',
  status: 'Cancelled'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bb'),
  order_id: 1006,
  customer_id: 6,
  product_id: 104,
  quantity: 4,
  order_date: '2026-03-08',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bc'),
  order_id: 1007,
  customer_id: 4,
  product_id: 106,
  quantity: 2,
  order_date: '2026-03-09',
  status: 'Pending'
}
db.products.find({ stock: { $lte: 10 } })
{
  _id: ObjectId('69e1f051fdf4874a463961c0'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 75000,
  stock: 10
}
{
  _id: ObjectId('69e1f051fdf4874a463961c2'),
  product_id: 103,
  name: 'Desk',
  category: 'Furniture',
  price: 15000,
  stock: 8
}
{
  _id: ObjectId('69e1f051fdf4874a463961c5'),
  product_id: 106,
  name: 'Printer',
  category: 'Electronics',
  price: 12000,
  stock: 5
}
db.orders.find({ status: { $ne: "Cancelled" } })
{
  _id: ObjectId('69e1f03ffdf4874a463961b6'),
  order_id: 1001,
  customer_id: 1,
  product_id: 101,
  quantity: 1,
  order_date: '2026-03-01',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b7'),
  order_id: 1002,
  customer_id: 2,
  product_id: 102,
  quantity: 2,
  order_date: '2026-03-02',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b8'),
  order_id: 1003,
  customer_id: 1,
  product_id: 105,
  quantity: 1,
  order_date: '2026-03-03',
  status: 'Pending'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b9'),
  order_id: 1004,
  customer_id: 3,
  product_id: 103,
  quantity: 1,
  order_date: '2026-03-05',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bb'),
  order_id: 1006,
  customer_id: 6,
  product_id: 104,
  quantity: 4,
  order_date: '2026-03-08',
  status: 'Delivered'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bc'),
  order_id: 1007,
  customer_id: 4,
  product_id: 106,
  quantity: 2,
  order_date: '2026-03-09',
  status: 'Pending'
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bd'),
  order_id: 1008,
  customer_id: 3,
  product_id: 101,
  quantity: 1,
  order_date: '2026-03-10',
  status: 'Delivered'
}
db.customers.find({ city: { $in: ["Hyderabad", "Mumbai"] } })
{
  _id: ObjectId('69e1f061fdf4874a463961c8'),
  customer_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  membership: 'Gold',
  age: 24
}
{
  _id: ObjectId('69e1f061fdf4874a463961ca'),
  customer_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  membership: 'Gold',
  age: 32
}
{
  _id: ObjectId('69e1f061fdf4874a463961cc'),
  customer_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  membership: 'Gold',
  age: 30
}
db.customers.find({}, { name: 1, city: 1, _id: 0 })
{
  name: 'Aarav',
  city: 'Hyderabad'
}
{
  name: 'Priya',
  city: 'Bangalore'
}
{
  name: 'Rahul',
  city: 'Mumbai'
}
{
  name: 'Sneha',
  city: 'Delhi'
}
{
  name: 'Kiran',
  city: 'Hyderabad'
}
{
  name: 'Meera',
  city: 'Chennai'
}
db.products.find({}, { name: 1, category: 1, price: 1, _id: 0 })
{
  name: 'Laptop',
  category: 'Electronics',
  price: 75000
}
{
  name: 'Phone',
  category: 'Electronics',
  price: 50000
}
{
  name: 'Desk',
  category: 'Furniture',
  price: 15000
}
{
  name: 'Chair',
  category: 'Furniture',
  price: 7000
}
{
  name: 'Tablet',
  category: 'Electronics',
  price: 30000
}
{
  name: 'Printer',
  category: 'Electronics',
  price: 12000
}
db.orders.find({}, { order_id: 1, quantity: 1, status: 1, _id: 0 })
{
  order_id: 1001,
  quantity: 1,
  status: 'Delivered'
}
{
  order_id: 1002,
  quantity: 2,
  status: 'Delivered'
}
{
  order_id: 1003,
  quantity: 1,
  status: 'Pending'
}
{
  order_id: 1004,
  quantity: 1,
  status: 'Delivered'
}
{
  order_id: 1005,
  quantity: 3,
  status: 'Cancelled'
}
{
  order_id: 1006,
  quantity: 4,
  status: 'Delivered'
}
{
  order_id: 1007,
  quantity: 2,
  status: 'Pending'
}
{
  order_id: 1008,
  quantity: 1,
  status: 'Delivered'
}
db.products.find().sort({ price: 1 })
{
  _id: ObjectId('69e1f051fdf4874a463961c3'),
  product_id: 104,
  name: 'Chair',
  category: 'Furniture',
  price: 7000,
  stock: 20
}
{
  _id: ObjectId('69e1f051fdf4874a463961c5'),
  product_id: 106,
  name: 'Printer',
  category: 'Electronics',
  price: 12000,
  stock: 5
}
{
  _id: ObjectId('69e1f051fdf4874a463961c2'),
  product_id: 103,
  name: 'Desk',
  category: 'Furniture',
  price: 15000,
  stock: 8
}
{
  _id: ObjectId('69e1f051fdf4874a463961c4'),
  product_id: 105,
  name: 'Tablet',
  category: 'Electronics',
  price: 30000,
  stock: 12
}
{
  _id: ObjectId('69e1f051fdf4874a463961c1'),
  product_id: 102,
  name: 'Phone',
  category: 'Electronics',
  price: 50000,
  stock: 15
}
{
  _id: ObjectId('69e1f051fdf4874a463961c0'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 75000,
  stock: 10
}
db.products.find().sort({ price: -1 })
{
  _id: ObjectId('69e1f051fdf4874a463961c0'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 75000,
  stock: 10
}
{
  _id: ObjectId('69e1f051fdf4874a463961c1'),
  product_id: 102,
  name: 'Phone',
  category: 'Electronics',
  price: 50000,
  stock: 15
}
{
  _id: ObjectId('69e1f051fdf4874a463961c4'),
  product_id: 105,
  name: 'Tablet',
  category: 'Electronics',
  price: 30000,
  stock: 12
}
{
  _id: ObjectId('69e1f051fdf4874a463961c2'),
  product_id: 103,
  name: 'Desk',
  category: 'Furniture',
  price: 15000,
  stock: 8
}
{
  _id: ObjectId('69e1f051fdf4874a463961c5'),
  product_id: 106,
  name: 'Printer',
  category: 'Electronics',
  price: 12000,
  stock: 5
}
{
  _id: ObjectId('69e1f051fdf4874a463961c3'),
  product_id: 104,
  name: 'Chair',
  category: 'Furniture',
  price: 7000,
  stock: 20
}
db.products.find().sort({ price: -1 }).limit(3)
{
  _id: ObjectId('69e1f051fdf4874a463961c0'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 75000,
  stock: 10
}
{
  _id: ObjectId('69e1f051fdf4874a463961c1'),
  product_id: 102,
  name: 'Phone',
  category: 'Electronics',
  price: 50000,
  stock: 15
}
{
  _id: ObjectId('69e1f051fdf4874a463961c4'),
  product_id: 105,
  name: 'Tablet',
  category: 'Electronics',
  price: 30000,
  stock: 12
}
db.products.find().sort({ price: 1 }).limit(2)
{
  _id: ObjectId('69e1f051fdf4874a463961c3'),
  product_id: 104,
  name: 'Chair',
  category: 'Furniture',
  price: 7000,
  stock: 20
}
{
  _id: ObjectId('69e1f051fdf4874a463961c5'),
  product_id: 106,
  name: 'Printer',
  category: 'Electronics',
  price: 12000,
  stock: 5
}
db.products.find().skip(2)
{
  _id: ObjectId('69e1f051fdf4874a463961c2'),
  product_id: 103,
  name: 'Desk',
  category: 'Furniture',
  price: 15000,
  stock: 8
}
{
  _id: ObjectId('69e1f051fdf4874a463961c3'),
  product_id: 104,
  name: 'Chair',
  category: 'Furniture',
  price: 7000,
  stock: 20
}
{
  _id: ObjectId('69e1f051fdf4874a463961c4'),
  product_id: 105,
  name: 'Tablet',
  category: 'Electronics',
  price: 30000,
  stock: 12
}
{
  _id: ObjectId('69e1f051fdf4874a463961c5'),
  product_id: 106,
  name: 'Printer',
  category: 'Electronics',
  price: 12000,
  stock: 5
}
db.customers.find().sort({ age: -1 })
{
  _id: ObjectId('69e1f061fdf4874a463961ca'),
  customer_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  membership: 'Gold',
  age: 32
}
{
  _id: ObjectId('69e1f061fdf4874a463961cc'),
  customer_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  membership: 'Gold',
  age: 30
}
{
  _id: ObjectId('69e1f061fdf4874a463961c9'),
  customer_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  membership: 'Silver',
  age: 28
}
{
  _id: ObjectId('69e1f061fdf4874a463961cd'),
  customer_id: 6,
  name: 'Meera',
  city: 'Chennai',
  membership: 'Bronze',
  age: 27
}
{
  _id: ObjectId('69e1f061fdf4874a463961cb'),
  customer_id: 4,
  name: 'Sneha',
  city: 'Delhi',
  membership: 'Silver',
  age: 26
}
{
  _id: ObjectId('69e1f061fdf4874a463961c8'),
  customer_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  membership: 'Gold',
  age: 24
}
db.products.updateOne(
  { name: "Laptop" },
  { $set: { price: 78000 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.updateMany(
  { category: "Electronics" },
  { $set: { discount: 10 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 4,
  modifiedCount: 4,
  upsertedCount: 0
}
db.orders.updateMany(
  { status: "Pending" },
  { $set: { priority: "High" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
db.customers.updateOne(
  { name: "Meera" },
  { $set: { membership: "Silver" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.deleteOne({ name: "Printer" })
{
  acknowledged: true,
  deletedCount: 1
}
db.products.deleteMany({ category: "Furniture" })
{
  acknowledged: true,
  deletedCount: 2
}
db.orders.deleteMany({ status: "Cancelled" })
{
  acknowledged: true,
  deletedCount: 1
}
db.customers.countDocuments()
6
db.products.countDocuments({ category: "Electronics" })
3
db.orders.countDocuments({ status: "Delivered" })
5
db.customers.countDocuments({ city: "Hyderabad" })
2
db.products.aggregate([
  { $group: { _id: "$category", total_stock: { $sum: "$stock" } } }
])
{
  _id: 'Electronics',
  total_stock: 37
}
db.products.aggregate([
  { $group: { _id: "$category", avg_price: { $avg: "$price" } } }
])
{
  _id: 'Electronics',
  avg_price: 52666.666666666664
}
db.products.aggregate([
  { $group: { _id: null, max_price: { $max: "$price" } } }
])
{
  _id: null,
  max_price: 78000
}
db.products.aggregate([
  { $group: { _id: null, min_price: { $min: "$price" } } }
])
{
  _id: null,
  min_price: 30000
}
db.products.aggregate([
  {
    $group: {
      _id: null,
      total_inventory_value: { $sum: { $multiply: ["$price", "$stock"] } }
    }
  }
])
{
  _id: null,
  total_inventory_value: 1890000
}
db.orders.aggregate([
  { $group: { _id: "$product_id", total_quantity: { $sum: "$quantity" } } }
])
{
  _id: 103,
  total_quantity: 1
}
{
  _id: 102,
  total_quantity: 2
}
{
  _id: 101,
  total_quantity: 2
}
{
  _id: 105,
  total_quantity: 1
}
{
  _id: 104,
  total_quantity: 4
}
{
  _id: 106,
  total_quantity: 2
}
db.orders.aggregate([
  { $group: { _id: "$customer_id", total_quantity: { $sum: "$quantity" } } }
])
{
  _id: 2,
  total_quantity: 2
}
{
  _id: 1,
  total_quantity: 2
}
{
  _id: 3,
  total_quantity: 2
}
{
  _id: 4,
  total_quantity: 2
}
{
  _id: 6,
  total_quantity: 4
}
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer_details"
    }
  }
])
{
  _id: ObjectId('69e1f03ffdf4874a463961b6'),
  order_id: 1001,
  customer_id: 1,
  product_id: 101,
  quantity: 1,
  order_date: '2026-03-01',
  status: 'Delivered',
  customer_details: [
    {
      _id: ObjectId('69e1f061fdf4874a463961c8'),
      customer_id: 1,
      name: 'Aarav',
      city: 'Hyderabad',
      membership: 'Gold',
      age: 24
    }
  ]
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b7'),
  order_id: 1002,
  customer_id: 2,
  product_id: 102,
  quantity: 2,
  order_date: '2026-03-02',
  status: 'Delivered',
  customer_details: [
    {
      _id: ObjectId('69e1f061fdf4874a463961c9'),
      customer_id: 2,
      name: 'Priya',
      city: 'Bangalore',
      membership: 'Silver',
      age: 28
    }
  ]
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b8'),
  order_id: 1003,
  customer_id: 1,
  product_id: 105,
  quantity: 1,
  order_date: '2026-03-03',
  status: 'Pending',
  priority: 'High',
  customer_details: [
    {
      _id: ObjectId('69e1f061fdf4874a463961c8'),
      customer_id: 1,
      name: 'Aarav',
      city: 'Hyderabad',
      membership: 'Gold',
      age: 24
    }
  ]
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b9'),
  order_id: 1004,
  customer_id: 3,
  product_id: 103,
  quantity: 1,
  order_date: '2026-03-05',
  status: 'Delivered',
  customer_details: [
    {
      _id: ObjectId('69e1f061fdf4874a463961ca'),
      customer_id: 3,
      name: 'Rahul',
      city: 'Mumbai',
      membership: 'Gold',
      age: 32
    }
  ]
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bb'),
  order_id: 1006,
  customer_id: 6,
  product_id: 104,
  quantity: 4,
  order_date: '2026-03-08',
  status: 'Delivered',
  customer_details: [
    {
      _id: ObjectId('69e1f061fdf4874a463961cd'),
      customer_id: 6,
      name: 'Meera',
      city: 'Chennai',
      membership: 'Silver',
      age: 27
    }
  ]
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bc'),
  order_id: 1007,
  customer_id: 4,
  product_id: 106,
  quantity: 2,
  order_date: '2026-03-09',
  status: 'Pending',
  priority: 'High',
  customer_details: [
    {
      _id: ObjectId('69e1f061fdf4874a463961cb'),
      customer_id: 4,
      name: 'Sneha',
      city: 'Delhi',
      membership: 'Silver',
      age: 26
    }
  ]
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bd'),
  order_id: 1008,
  customer_id: 3,
  product_id: 101,
  quantity: 1,
  order_date: '2026-03-10',
  status: 'Delivered',
  customer_details: [
    {
      _id: ObjectId('69e1f061fdf4874a463961ca'),
      customer_id: 3,
      name: 'Rahul',
      city: 'Mumbai',
      membership: 'Gold',
      age: 32
    }
  ]
}
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product_details"
    }
  }
])
{
  _id: ObjectId('69e1f03ffdf4874a463961b6'),
  order_id: 1001,
  customer_id: 1,
  product_id: 101,
  quantity: 1,
  order_date: '2026-03-01',
  status: 'Delivered',
  product_details: [
    {
      _id: ObjectId('69e1f051fdf4874a463961c0'),
      product_id: 101,
      name: 'Laptop',
      category: 'Electronics',
      price: 78000,
      stock: 10,
      discount: 10
    }
  ]
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b7'),
  order_id: 1002,
  customer_id: 2,
  product_id: 102,
  quantity: 2,
  order_date: '2026-03-02',
  status: 'Delivered',
  product_details: [
    {
      _id: ObjectId('69e1f051fdf4874a463961c1'),
      product_id: 102,
      name: 'Phone',
      category: 'Electronics',
      price: 50000,
      stock: 15,
      discount: 10
    }
  ]
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b8'),
  order_id: 1003,
  customer_id: 1,
  product_id: 105,
  quantity: 1,
  order_date: '2026-03-03',
  status: 'Pending',
  priority: 'High',
  product_details: [
    {
      _id: ObjectId('69e1f051fdf4874a463961c4'),
      product_id: 105,
      name: 'Tablet',
      category: 'Electronics',
      price: 30000,
      stock: 12,
      discount: 10
    }
  ]
}
{
  _id: ObjectId('69e1f03ffdf4874a463961b9'),
  order_id: 1004,
  customer_id: 3,
  product_id: 103,
  quantity: 1,
  order_date: '2026-03-05',
  status: 'Delivered',
  product_details: []
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bb'),
  order_id: 1006,
  customer_id: 6,
  product_id: 104,
  quantity: 4,
  order_date: '2026-03-08',
  status: 'Delivered',
  product_details: []
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bc'),
  order_id: 1007,
  customer_id: 4,
  product_id: 106,
  quantity: 2,
  order_date: '2026-03-09',
  status: 'Pending',
  priority: 'High',
  product_details: []
}
{
  _id: ObjectId('69e1f03ffdf4874a463961bd'),
  order_id: 1008,
  customer_id: 3,
  product_id: 101,
  quantity: 1,
  order_date: '2026-03-10',
  status: 'Delivered',
  product_details: [
    {
      _id: ObjectId('69e1f051fdf4874a463961c0'),
      product_id: 101,
      name: 'Laptop',
      category: 'Electronics',
      price: 78000,
      stock: 10,
      discount: 10
    }
  ]
}
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  {
    $project: {
      _id: 0,
      customer_name: "$customer.name",
      product_name: "$product.name"
    }
  }
])
{
  customer_name: 'Aarav',
  product_name: 'Laptop'
}
{
  customer_name: 'Priya',
  product_name: 'Phone'
}
{
  customer_name: 'Aarav',
  product_name: 'Tablet'
}
{
  customer_name: 'Rahul',
  product_name: 'Laptop'
}
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  {
    $project: {
      _id: 0,
      customer_name: "$customer.name",
      city: "$customer.city",
      product_name: "$product.name",
      quantity: 1,
      status: 1
    }
  }
])
{
  quantity: 1,
  status: 'Delivered',
  customer_name: 'Aarav',
  city: 'Hyderabad',
  product_name: 'Laptop'
}
{
  quantity: 2,
  status: 'Delivered',
  customer_name: 'Priya',
  city: 'Bangalore',
  product_name: 'Phone'
}
{
  quantity: 1,
  status: 'Pending',
  customer_name: 'Aarav',
  city: 'Hyderabad',
  product_name: 'Tablet'
}
{
  quantity: 1,
  status: 'Delivered',
  customer_name: 'Rahul',
  city: 'Mumbai',
  product_name: 'Laptop'
}
online_store_db
Selection deleted


