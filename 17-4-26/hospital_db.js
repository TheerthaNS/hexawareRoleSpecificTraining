use hospital_db
switched to db hospital_db
db.patients.find()
{
  _id: ObjectId('69e1d1985d059690588a2c71'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c72'),
  patient_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  age: 34,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d1985d059690588a2c73'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c74'),
  patient_id: 4,
  name: 'Sneha',
  city: 'Delhi',
  age: 26,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d1985d059690588a2c75'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c76'),
  patient_id: 6,
  name: 'Meera',
  city: 'Chennai',
  age: 31,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a46396195'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396196'),
  patient_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  age: 34,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a46396197'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396198'),
  patient_id: 4,
  name: 'Sneha',
  city: 'Delhi',
  age: 26,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a46396199'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a4639619a'),
  patient_id: 6,
  name: 'Meera',
  city: 'Chennai',
  age: 31,
  gender: 'Female'
}
db.doctors.find()
{
  _id: ObjectId('69e1d1b35d059690588a2c77'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c78'),
  doctor_id: 102,
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800,
  city: 'Bangalore'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c79'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7a'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7b'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a4639619e'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a4639619f'),
  doctor_id: 102,
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800,
  city: 'Bangalore'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a0'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a1'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a2'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
db.appointments.find()
{
  _id: ObjectId('69e1d1c15d059690588a2c7c'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7d'),
  appointment_id: 1002,
  patient_id: 2,
  doctor_id: 102,
  visit_date: '2026-03-02',
  status: 'Completed',
  bill_amount: 800
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7e'),
  appointment_id: 1003,
  patient_id: 1,
  doctor_id: 105,
  visit_date: '2026-03-04',
  status: 'Pending',
  bill_amount: 2000
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7f'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500
}
{
  _id: ObjectId('69e1d1c15d059690588a2c80'),
  appointment_id: 1005,
  patient_id: 5,
  doctor_id: 101,
  visit_date: '2026-03-07',
  status: 'Cancelled',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d1c15d059690588a2c81'),
  appointment_id: 1006,
  patient_id: 6,
  doctor_id: 104,
  visit_date: '2026-03-08',
  status: 'Completed',
  bill_amount: 900
}
{
  _id: ObjectId('69e1d1c15d059690588a2c82'),
  appointment_id: 1007,
  patient_id: 4,
  doctor_id: 104,
  visit_date: '2026-03-09',
  status: 'Pending',
  bill_amount: 900
}
{
  _id: ObjectId('69e1d1c15d059690588a2c83'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a6'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a7'),
  appointment_id: 1002,
  patient_id: 2,
  doctor_id: 102,
  visit_date: '2026-03-02',
  status: 'Completed',
  bill_amount: 800
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a8'),
  appointment_id: 1003,
  patient_id: 1,
  doctor_id: 105,
  visit_date: '2026-03-04',
  status: 'Pending',
  bill_amount: 2000
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a9'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500
}
{
  _id: ObjectId('69e1d2abfdf4874a463961aa'),
  appointment_id: 1005,
  patient_id: 5,
  doctor_id: 101,
  visit_date: '2026-03-07',
  status: 'Cancelled',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ab'),
  appointment_id: 1006,
  patient_id: 6,
  doctor_id: 104,
  visit_date: '2026-03-08',
  status: 'Completed',
  bill_amount: 900
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ac'),
  appointment_id: 1007,
  patient_id: 4,
  doctor_id: 104,
  visit_date: '2026-03-09',
  status: 'Pending',
  bill_amount: 900
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ad'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000
}
db.patients.find({ city: "Hyderabad" })
{
  _id: ObjectId('69e1d1985d059690588a2c71'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c75'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396195'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396199'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
db.doctors.find({ specialization: "Cardiology" })
{
  _id: ObjectId('69e1d1b35d059690588a2c77'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a4639619e'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
db.appointments.find({ status: "Completed" })
{
  _id: ObjectId('69e1d1c15d059690588a2c7c'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7d'),
  appointment_id: 1002,
  patient_id: 2,
  doctor_id: 102,
  visit_date: '2026-03-02',
  status: 'Completed',
  bill_amount: 800
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7f'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500
}
{
  _id: ObjectId('69e1d1c15d059690588a2c81'),
  appointment_id: 1006,
  patient_id: 6,
  doctor_id: 104,
  visit_date: '2026-03-08',
  status: 'Completed',
  bill_amount: 900
}
{
  _id: ObjectId('69e1d1c15d059690588a2c83'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a6'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a7'),
  appointment_id: 1002,
  patient_id: 2,
  doctor_id: 102,
  visit_date: '2026-03-02',
  status: 'Completed',
  bill_amount: 800
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a9'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ab'),
  appointment_id: 1006,
  patient_id: 6,
  doctor_id: 104,
  visit_date: '2026-03-08',
  status: 'Completed',
  bill_amount: 900
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ad'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000
}
db.patients.find({ age: { $gt: 30 } })
{
  _id: ObjectId('69e1d1985d059690588a2c72'),
  patient_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  age: 34,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d1985d059690588a2c73'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c75'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c76'),
  patient_id: 6,
  name: 'Meera',
  city: 'Chennai',
  age: 31,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a46396196'),
  patient_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  age: 34,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a46396197'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396199'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a4639619a'),
  patient_id: 6,
  name: 'Meera',
  city: 'Chennai',
  age: 31,
  gender: 'Female'
}
db.doctors.find({ consultation_fee: { $gt: 1000 } })
{
  _id: ObjectId('69e1d1b35d059690588a2c77'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c79'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7b'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a4639619e'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a0'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a2'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
db.doctors.find({ consultation_fee: { $gte: 900, $lte: 1600 } })
{
  _id: ObjectId('69e1d1b35d059690588a2c77'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c79'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7a'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi'
}
{
  _id: ObjectId('69e1d29afdf4874a4639619e'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a0'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a1'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi'
}
db.appointments.find({ bill_amount: { $gt: 1000 } })
{
  _id: ObjectId('69e1d1c15d059690588a2c7c'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7e'),
  appointment_id: 1003,
  patient_id: 1,
  doctor_id: 105,
  visit_date: '2026-03-04',
  status: 'Pending',
  bill_amount: 2000
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7f'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500
}
{
  _id: ObjectId('69e1d1c15d059690588a2c80'),
  appointment_id: 1005,
  patient_id: 5,
  doctor_id: 101,
  visit_date: '2026-03-07',
  status: 'Cancelled',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d1c15d059690588a2c83'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a6'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a8'),
  appointment_id: 1003,
  patient_id: 1,
  doctor_id: 105,
  visit_date: '2026-03-04',
  status: 'Pending',
  bill_amount: 2000
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a9'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500
}
{
  _id: ObjectId('69e1d2abfdf4874a463961aa'),
  appointment_id: 1005,
  patient_id: 5,
  doctor_id: 101,
  visit_date: '2026-03-07',
  status: 'Cancelled',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ad'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000
}
db.appointments.find({ status: { $ne: "Cancelled" } })
{
  _id: ObjectId('69e1d1c15d059690588a2c7c'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7d'),
  appointment_id: 1002,
  patient_id: 2,
  doctor_id: 102,
  visit_date: '2026-03-02',
  status: 'Completed',
  bill_amount: 800
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7e'),
  appointment_id: 1003,
  patient_id: 1,
  doctor_id: 105,
  visit_date: '2026-03-04',
  status: 'Pending',
  bill_amount: 2000
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7f'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500
}
{
  _id: ObjectId('69e1d1c15d059690588a2c81'),
  appointment_id: 1006,
  patient_id: 6,
  doctor_id: 104,
  visit_date: '2026-03-08',
  status: 'Completed',
  bill_amount: 900
}
{
  _id: ObjectId('69e1d1c15d059690588a2c82'),
  appointment_id: 1007,
  patient_id: 4,
  doctor_id: 104,
  visit_date: '2026-03-09',
  status: 'Pending',
  bill_amount: 900
}
{
  _id: ObjectId('69e1d1c15d059690588a2c83'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a6'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a7'),
  appointment_id: 1002,
  patient_id: 2,
  doctor_id: 102,
  visit_date: '2026-03-02',
  status: 'Completed',
  bill_amount: 800
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a8'),
  appointment_id: 1003,
  patient_id: 1,
  doctor_id: 105,
  visit_date: '2026-03-04',
  status: 'Pending',
  bill_amount: 2000
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a9'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ab'),
  appointment_id: 1006,
  patient_id: 6,
  doctor_id: 104,
  visit_date: '2026-03-08',
  status: 'Completed',
  bill_amount: 900
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ac'),
  appointment_id: 1007,
  patient_id: 4,
  doctor_id: 104,
  visit_date: '2026-03-09',
  status: 'Pending',
  bill_amount: 900
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ad'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000
}
db.patients.find({ city: { $in: ["Hyderabad", "Mumbai"] } })
{
  _id: ObjectId('69e1d1985d059690588a2c71'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c73'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c75'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396195'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396197'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396199'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
db.doctors.find({ city: { $in: ["Hyderabad", "Delhi"] } })
{
  _id: ObjectId('69e1d1b35d059690588a2c77'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7a'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7b'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a4639619e'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a1'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a2'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
db.patients.find({}, { _id: 0, name: 1, city: 1 })
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
db.doctors.find({}, { _id: 0, name: 1, specialization: 1, consultation_fee: 1 })
{
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200
}
{
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800
}
{
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500
}
{
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900
}
{
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000
}
{
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200
}
{
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800
}
{
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500
}
{
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900
}
{
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000
}
db.appointments.find({}, { _id: 0, appointment_id: 1, status: 1, bill_amount: 1 })
{
  appointment_id: 1001,
  status: 'Completed',
  bill_amount: 1200
}
{
  appointment_id: 1002,
  status: 'Completed',
  bill_amount: 800
}
{
  appointment_id: 1003,
  status: 'Pending',
  bill_amount: 2000
}
{
  appointment_id: 1004,
  status: 'Completed',
  bill_amount: 1500
}
{
  appointment_id: 1005,
  status: 'Cancelled',
  bill_amount: 1200
}
{
  appointment_id: 1006,
  status: 'Completed',
  bill_amount: 900
}
{
  appointment_id: 1007,
  status: 'Pending',
  bill_amount: 900
}
{
  appointment_id: 1008,
  status: 'Completed',
  bill_amount: 2000
}
{
  appointment_id: 1001,
  status: 'Completed',
  bill_amount: 1200
}
{
  appointment_id: 1002,
  status: 'Completed',
  bill_amount: 800
}
{
  appointment_id: 1003,
  status: 'Pending',
  bill_amount: 2000
}
{
  appointment_id: 1004,
  status: 'Completed',
  bill_amount: 1500
}
{
  appointment_id: 1005,
  status: 'Cancelled',
  bill_amount: 1200
}
{
  appointment_id: 1006,
  status: 'Completed',
  bill_amount: 900
}
{
  appointment_id: 1007,
  status: 'Pending',
  bill_amount: 900
}
{
  appointment_id: 1008,
  status: 'Completed',
  bill_amount: 2000
}
db.doctors.find().sort({ consultation_fee: 1 })
{
  _id: ObjectId('69e1d1b35d059690588a2c78'),
  doctor_id: 102,
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800,
  city: 'Bangalore'
}
{
  _id: ObjectId('69e1d29afdf4874a4639619f'),
  doctor_id: 102,
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800,
  city: 'Bangalore'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7a'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a1'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c77'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a4639619e'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c79'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a0'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7b'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a2'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
db.doctors.find().sort({ consultation_fee: -1 })
{
  _id: ObjectId('69e1d1b35d059690588a2c7b'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a2'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c79'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a0'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c77'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a4639619e'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7a'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a1'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c78'),
  doctor_id: 102,
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800,
  city: 'Bangalore'
}
{
  _id: ObjectId('69e1d29afdf4874a4639619f'),
  doctor_id: 102,
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800,
  city: 'Bangalore'
}
db.doctors.find().sort({ consultation_fee: -1 }).limit(3)
{
  _id: ObjectId('69e1d29afdf4874a463961a2'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7b'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad'
}
{
  _id: ObjectId('69e1d29afdf4874a463961a0'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai'
}
db.doctors.find().sort({ consultation_fee: 1 }).limit(2)
{
  _id: ObjectId('69e1d29afdf4874a4639619f'),
  doctor_id: 102,
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800,
  city: 'Bangalore'
}
{
  _id: ObjectId('69e1d1b35d059690588a2c78'),
  doctor_id: 102,
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800,
  city: 'Bangalore'
}
db.patients.find().skip(2)
{
  _id: ObjectId('69e1d1985d059690588a2c73'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c74'),
  patient_id: 4,
  name: 'Sneha',
  city: 'Delhi',
  age: 26,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d1985d059690588a2c75'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c76'),
  patient_id: 6,
  name: 'Meera',
  city: 'Chennai',
  age: 31,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a46396195'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396196'),
  patient_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  age: 34,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a46396197'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396198'),
  patient_id: 4,
  name: 'Sneha',
  city: 'Delhi',
  age: 26,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a46396199'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a4639619a'),
  patient_id: 6,
  name: 'Meera',
  city: 'Chennai',
  age: 31,
  gender: 'Female'
}
db.patients.find().sort({ age: -1 })
{
  _id: ObjectId('69e1d1985d059690588a2c73'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396197'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c75'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396199'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c72'),
  patient_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  age: 34,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a46396196'),
  patient_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  age: 34,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d1985d059690588a2c76'),
  patient_id: 6,
  name: 'Meera',
  city: 'Chennai',
  age: 31,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a4639619a'),
  patient_id: 6,
  name: 'Meera',
  city: 'Chennai',
  age: 31,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d1985d059690588a2c71'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d288fdf4874a46396195'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male'
}
{
  _id: ObjectId('69e1d1985d059690588a2c74'),
  patient_id: 4,
  name: 'Sneha',
  city: 'Delhi',
  age: 26,
  gender: 'Female'
}
{
  _id: ObjectId('69e1d288fdf4874a46396198'),
  patient_id: 4,
  name: 'Sneha',
  city: 'Delhi',
  age: 26,
  gender: 'Female'
}
db.doctors.updateOne(
  { name: "Dr. Sharma" },
  { $set: { consultation_fee: 1300 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.appointments.updateMany(
  { status: "Pending" },
  { $set: { priority: "High" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 4,
  modifiedCount: 4,
  upsertedCount: 0
}
db.doctors.updateMany(
  { city: "Hyderabad" },
  { $set: { available: true } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 4,
  modifiedCount: 4,
  upsertedCount: 0
}
db.patients.updateOne(
  { name: "Meera" },
  { $set: { city: "Bangalore" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.doctors.deleteOne({ name: "Dr. Iyer" })
{
  acknowledged: true,
  deletedCount: 1
}
db.appointments.deleteMany({ status: "Cancelled" })
{
  acknowledged: true,
  deletedCount: 2
}
db.patients.deleteMany({ city: "Delhi" })
{
  acknowledged: true,
  deletedCount: 2
}
db.patients.countDocuments()
10
db.doctors.countDocuments({ city: "Hyderabad" })
4
db.appointments.countDocuments({ status: "Completed" })
10
db.patients.countDocuments({ city: "Hyderabad" })
4
db.doctors.aggregate([
  { $group: { _id: "$specialization", avg_fee: { $avg: "$consultation_fee" } } }
])
{
  _id: 'Orthopedics',
  avg_fee: 1500
}
{
  _id: 'Cardiology',
  avg_fee: 1250
}
{
  _id: 'Pediatrics',
  avg_fee: 900
}
{
  _id: 'Dermatology',
  avg_fee: 800
}
{
  _id: 'Neurology',
  avg_fee: 2000
}
db.doctors.aggregate([
  { $group: { _id: null, max_fee: { $max: "$consultation_fee" } } }
])
{
  _id: null,
  max_fee: 2000
}
db.doctors.aggregate([
  { $group: { _id: null, min_fee: { $min: "$consultation_fee" } } }
])
{
  _id: null,
  min_fee: 800
}
db.appointments.aggregate([
  { $group: { _id: "$status", total_bill: { $sum: "$bill_amount" } } }
])
{
  _id: 'Completed',
  total_bill: 12800
}
{
  _id: 'Pending',
  total_bill: 5800
}
db.appointments.aggregate([
  { $group: { _id: "$doctor_id", total_appointments: { $sum: 1 } } }
])
{
  _id: 103,
  total_appointments: 2
}
{
  _id: 102,
  total_appointments: 2
}
{
  _id: 101,
  total_appointments: 2
}
{
  _id: 105,
  total_appointments: 4
}
{
  _id: 104,
  total_appointments: 4
}
db.appointments.aggregate([
  { $group: { _id: "$patient_id", total_appointments: { $sum: 1 } } }
])
{
  _id: 6,
  total_appointments: 2
}
{
  _id: 3,
  total_appointments: 4
}
{
  _id: 1,
  total_appointments: 4
}
{
  _id: 2,
  total_appointments: 2
}
{
  _id: 4,
  total_appointments: 2
}
db.patients.aggregate([
  { $group: { _id: "$city", avg_age: { $avg: "$age" } } }
])
{
  _id: 'Chennai',
  avg_age: 31
}
{
  _id: 'Mumbai',
  avg_age: 41
}
{
  _id: 'Hyderabad',
  avg_age: 33
}
{
  _id: 'Bangalore',
  avg_age: 33
}
db.appointments.aggregate([
  { $group: { _id: "$doctor_id", total_bill: { $sum: "$bill_amount" } } }
])
{
  _id: 103,
  total_bill: 3000
}
{
  _id: 102,
  total_bill: 1600
}
{
  _id: 101,
  total_bill: 2400
}
{
  _id: 105,
  total_bill: 8000
}
{
  _id: 104,
  total_bill: 3600
}
db.appointments.aggregate([
  {
    $lookup: {
      from: "patients",
      localField: "patient_id",
      foreignField: "patient_id",
      as: "patient"
    }
  },
  { $unwind: "$patient" },
  {
    $group: {
      _id: "$patient.city",
      total_bill: { $sum: "$bill_amount" }
    }
  }
])
{
  _id: 'Mumbai',
  total_bill: 14000
}
{
  _id: 'Hyderabad',
  total_bill: 12800
}
{
  _id: 'Bangalore',
  total_bill: 5000
}
{
  _id: 'Chennai',
  total_bill: 1800
}
db.appointments.aggregate([
  {
    $lookup: {
      from: "patients",
      localField: "patient_id",
      foreignField: "patient_id",
      as: "patient_details"
    }
  }
])
{
  _id: ObjectId('69e1d1c15d059690588a2c7c'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200,
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c71'),
      patient_id: 1,
      name: 'Aarav',
      city: 'Hyderabad',
      age: 29,
      gender: 'Male'
    },
    {
      _id: ObjectId('69e1d288fdf4874a46396195'),
      patient_id: 1,
      name: 'Aarav',
      city: 'Hyderabad',
      age: 29,
      gender: 'Male'
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7d'),
  appointment_id: 1002,
  patient_id: 2,
  doctor_id: 102,
  visit_date: '2026-03-02',
  status: 'Completed',
  bill_amount: 800,
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c72'),
      patient_id: 2,
      name: 'Priya',
      city: 'Bangalore',
      age: 34,
      gender: 'Female'
    },
    {
      _id: ObjectId('69e1d288fdf4874a46396196'),
      patient_id: 2,
      name: 'Priya',
      city: 'Bangalore',
      age: 34,
      gender: 'Female'
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7e'),
  appointment_id: 1003,
  patient_id: 1,
  doctor_id: 105,
  visit_date: '2026-03-04',
  status: 'Pending',
  bill_amount: 2000,
  priority: 'High',
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c71'),
      patient_id: 1,
      name: 'Aarav',
      city: 'Hyderabad',
      age: 29,
      gender: 'Male'
    },
    {
      _id: ObjectId('69e1d288fdf4874a46396195'),
      patient_id: 1,
      name: 'Aarav',
      city: 'Hyderabad',
      age: 29,
      gender: 'Male'
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7f'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500,
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c73'),
      patient_id: 3,
      name: 'Rahul',
      city: 'Mumbai',
      age: 41,
      gender: 'Male'
    },
    {
      _id: ObjectId('69e1d288fdf4874a46396197'),
      patient_id: 3,
      name: 'Rahul',
      city: 'Mumbai',
      age: 41,
      gender: 'Male'
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c81'),
  appointment_id: 1006,
  patient_id: 6,
  doctor_id: 104,
  visit_date: '2026-03-08',
  status: 'Completed',
  bill_amount: 900,
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c76'),
      patient_id: 6,
      name: 'Meera',
      city: 'Bangalore',
      age: 31,
      gender: 'Female'
    },
    {
      _id: ObjectId('69e1d288fdf4874a4639619a'),
      patient_id: 6,
      name: 'Meera',
      city: 'Chennai',
      age: 31,
      gender: 'Female'
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c82'),
  appointment_id: 1007,
  patient_id: 4,
  doctor_id: 104,
  visit_date: '2026-03-09',
  status: 'Pending',
  bill_amount: 900,
  priority: 'High',
  patient_details: []
}
{
  _id: ObjectId('69e1d1c15d059690588a2c83'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000,
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c73'),
      patient_id: 3,
      name: 'Rahul',
      city: 'Mumbai',
      age: 41,
      gender: 'Male'
    },
    {
      _id: ObjectId('69e1d288fdf4874a46396197'),
      patient_id: 3,
      name: 'Rahul',
      city: 'Mumbai',
      age: 41,
      gender: 'Male'
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a6'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200,
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c71'),
      patient_id: 1,
      name: 'Aarav',
      city: 'Hyderabad',
      age: 29,
      gender: 'Male'
    },
    {
      _id: ObjectId('69e1d288fdf4874a46396195'),
      patient_id: 1,
      name: 'Aarav',
      city: 'Hyderabad',
      age: 29,
      gender: 'Male'
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a7'),
  appointment_id: 1002,
  patient_id: 2,
  doctor_id: 102,
  visit_date: '2026-03-02',
  status: 'Completed',
  bill_amount: 800,
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c72'),
      patient_id: 2,
      name: 'Priya',
      city: 'Bangalore',
      age: 34,
      gender: 'Female'
    },
    {
      _id: ObjectId('69e1d288fdf4874a46396196'),
      patient_id: 2,
      name: 'Priya',
      city: 'Bangalore',
      age: 34,
      gender: 'Female'
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a8'),
  appointment_id: 1003,
  patient_id: 1,
  doctor_id: 105,
  visit_date: '2026-03-04',
  status: 'Pending',
  bill_amount: 2000,
  priority: 'High',
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c71'),
      patient_id: 1,
      name: 'Aarav',
      city: 'Hyderabad',
      age: 29,
      gender: 'Male'
    },
    {
      _id: ObjectId('69e1d288fdf4874a46396195'),
      patient_id: 1,
      name: 'Aarav',
      city: 'Hyderabad',
      age: 29,
      gender: 'Male'
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a9'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500,
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c73'),
      patient_id: 3,
      name: 'Rahul',
      city: 'Mumbai',
      age: 41,
      gender: 'Male'
    },
    {
      _id: ObjectId('69e1d288fdf4874a46396197'),
      patient_id: 3,
      name: 'Rahul',
      city: 'Mumbai',
      age: 41,
      gender: 'Male'
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ab'),
  appointment_id: 1006,
  patient_id: 6,
  doctor_id: 104,
  visit_date: '2026-03-08',
  status: 'Completed',
  bill_amount: 900,
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c76'),
      patient_id: 6,
      name: 'Meera',
      city: 'Bangalore',
      age: 31,
      gender: 'Female'
    },
    {
      _id: ObjectId('69e1d288fdf4874a4639619a'),
      patient_id: 6,
      name: 'Meera',
      city: 'Chennai',
      age: 31,
      gender: 'Female'
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ac'),
  appointment_id: 1007,
  patient_id: 4,
  doctor_id: 104,
  visit_date: '2026-03-09',
  status: 'Pending',
  bill_amount: 900,
  priority: 'High',
  patient_details: []
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ad'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000,
  patient_details: [
    {
      _id: ObjectId('69e1d1985d059690588a2c73'),
      patient_id: 3,
      name: 'Rahul',
      city: 'Mumbai',
      age: 41,
      gender: 'Male'
    },
    {
      _id: ObjectId('69e1d288fdf4874a46396197'),
      patient_id: 3,
      name: 'Rahul',
      city: 'Mumbai',
      age: 41,
      gender: 'Male'
    }
  ]
}
db.appointments.aggregate([
  {
    $lookup: {
      from: "doctors",
      localField: "doctor_id",
      foreignField: "doctor_id",
      as: "doctor_details"
    }
  }
])
{
  _id: ObjectId('69e1d1c15d059690588a2c7c'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200,
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c77'),
      doctor_id: 101,
      name: 'Dr. Sharma',
      specialization: 'Cardiology',
      consultation_fee: 1300,
      city: 'Hyderabad',
      available: true
    },
    {
      _id: ObjectId('69e1d29afdf4874a4639619e'),
      doctor_id: 101,
      name: 'Dr. Sharma',
      specialization: 'Cardiology',
      consultation_fee: 1200,
      city: 'Hyderabad',
      available: true
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7d'),
  appointment_id: 1002,
  patient_id: 2,
  doctor_id: 102,
  visit_date: '2026-03-02',
  status: 'Completed',
  bill_amount: 800,
  doctor_details: [
    {
      _id: ObjectId('69e1d29afdf4874a4639619f'),
      doctor_id: 102,
      name: 'Dr. Iyer',
      specialization: 'Dermatology',
      consultation_fee: 800,
      city: 'Bangalore'
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7e'),
  appointment_id: 1003,
  patient_id: 1,
  doctor_id: 105,
  visit_date: '2026-03-04',
  status: 'Pending',
  bill_amount: 2000,
  priority: 'High',
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c7b'),
      doctor_id: 105,
      name: 'Dr. Mehta',
      specialization: 'Neurology',
      consultation_fee: 2000,
      city: 'Hyderabad',
      available: true
    },
    {
      _id: ObjectId('69e1d29afdf4874a463961a2'),
      doctor_id: 105,
      name: 'Dr. Mehta',
      specialization: 'Neurology',
      consultation_fee: 2000,
      city: 'Hyderabad',
      available: true
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c7f'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500,
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c79'),
      doctor_id: 103,
      name: 'Dr. Khan',
      specialization: 'Orthopedics',
      consultation_fee: 1500,
      city: 'Mumbai'
    },
    {
      _id: ObjectId('69e1d29afdf4874a463961a0'),
      doctor_id: 103,
      name: 'Dr. Khan',
      specialization: 'Orthopedics',
      consultation_fee: 1500,
      city: 'Mumbai'
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c81'),
  appointment_id: 1006,
  patient_id: 6,
  doctor_id: 104,
  visit_date: '2026-03-08',
  status: 'Completed',
  bill_amount: 900,
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c7a'),
      doctor_id: 104,
      name: 'Dr. Reddy',
      specialization: 'Pediatrics',
      consultation_fee: 900,
      city: 'Delhi'
    },
    {
      _id: ObjectId('69e1d29afdf4874a463961a1'),
      doctor_id: 104,
      name: 'Dr. Reddy',
      specialization: 'Pediatrics',
      consultation_fee: 900,
      city: 'Delhi'
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c82'),
  appointment_id: 1007,
  patient_id: 4,
  doctor_id: 104,
  visit_date: '2026-03-09',
  status: 'Pending',
  bill_amount: 900,
  priority: 'High',
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c7a'),
      doctor_id: 104,
      name: 'Dr. Reddy',
      specialization: 'Pediatrics',
      consultation_fee: 900,
      city: 'Delhi'
    },
    {
      _id: ObjectId('69e1d29afdf4874a463961a1'),
      doctor_id: 104,
      name: 'Dr. Reddy',
      specialization: 'Pediatrics',
      consultation_fee: 900,
      city: 'Delhi'
    }
  ]
}
{
  _id: ObjectId('69e1d1c15d059690588a2c83'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000,
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c7b'),
      doctor_id: 105,
      name: 'Dr. Mehta',
      specialization: 'Neurology',
      consultation_fee: 2000,
      city: 'Hyderabad',
      available: true
    },
    {
      _id: ObjectId('69e1d29afdf4874a463961a2'),
      doctor_id: 105,
      name: 'Dr. Mehta',
      specialization: 'Neurology',
      consultation_fee: 2000,
      city: 'Hyderabad',
      available: true
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a6'),
  appointment_id: 1001,
  patient_id: 1,
  doctor_id: 101,
  visit_date: '2026-03-01',
  status: 'Completed',
  bill_amount: 1200,
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c77'),
      doctor_id: 101,
      name: 'Dr. Sharma',
      specialization: 'Cardiology',
      consultation_fee: 1300,
      city: 'Hyderabad',
      available: true
    },
    {
      _id: ObjectId('69e1d29afdf4874a4639619e'),
      doctor_id: 101,
      name: 'Dr. Sharma',
      specialization: 'Cardiology',
      consultation_fee: 1200,
      city: 'Hyderabad',
      available: true
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a7'),
  appointment_id: 1002,
  patient_id: 2,
  doctor_id: 102,
  visit_date: '2026-03-02',
  status: 'Completed',
  bill_amount: 800,
  doctor_details: [
    {
      _id: ObjectId('69e1d29afdf4874a4639619f'),
      doctor_id: 102,
      name: 'Dr. Iyer',
      specialization: 'Dermatology',
      consultation_fee: 800,
      city: 'Bangalore'
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a8'),
  appointment_id: 1003,
  patient_id: 1,
  doctor_id: 105,
  visit_date: '2026-03-04',
  status: 'Pending',
  bill_amount: 2000,
  priority: 'High',
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c7b'),
      doctor_id: 105,
      name: 'Dr. Mehta',
      specialization: 'Neurology',
      consultation_fee: 2000,
      city: 'Hyderabad',
      available: true
    },
    {
      _id: ObjectId('69e1d29afdf4874a463961a2'),
      doctor_id: 105,
      name: 'Dr. Mehta',
      specialization: 'Neurology',
      consultation_fee: 2000,
      city: 'Hyderabad',
      available: true
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961a9'),
  appointment_id: 1004,
  patient_id: 3,
  doctor_id: 103,
  visit_date: '2026-03-05',
  status: 'Completed',
  bill_amount: 1500,
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c79'),
      doctor_id: 103,
      name: 'Dr. Khan',
      specialization: 'Orthopedics',
      consultation_fee: 1500,
      city: 'Mumbai'
    },
    {
      _id: ObjectId('69e1d29afdf4874a463961a0'),
      doctor_id: 103,
      name: 'Dr. Khan',
      specialization: 'Orthopedics',
      consultation_fee: 1500,
      city: 'Mumbai'
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ab'),
  appointment_id: 1006,
  patient_id: 6,
  doctor_id: 104,
  visit_date: '2026-03-08',
  status: 'Completed',
  bill_amount: 900,
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c7a'),
      doctor_id: 104,
      name: 'Dr. Reddy',
      specialization: 'Pediatrics',
      consultation_fee: 900,
      city: 'Delhi'
    },
    {
      _id: ObjectId('69e1d29afdf4874a463961a1'),
      doctor_id: 104,
      name: 'Dr. Reddy',
      specialization: 'Pediatrics',
      consultation_fee: 900,
      city: 'Delhi'
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ac'),
  appointment_id: 1007,
  patient_id: 4,
  doctor_id: 104,
  visit_date: '2026-03-09',
  status: 'Pending',
  bill_amount: 900,
  priority: 'High',
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c7a'),
      doctor_id: 104,
      name: 'Dr. Reddy',
      specialization: 'Pediatrics',
      consultation_fee: 900,
      city: 'Delhi'
    },
    {
      _id: ObjectId('69e1d29afdf4874a463961a1'),
      doctor_id: 104,
      name: 'Dr. Reddy',
      specialization: 'Pediatrics',
      consultation_fee: 900,
      city: 'Delhi'
    }
  ]
}
{
  _id: ObjectId('69e1d2abfdf4874a463961ad'),
  appointment_id: 1008,
  patient_id: 3,
  doctor_id: 105,
  visit_date: '2026-03-10',
  status: 'Completed',
  bill_amount: 2000,
  doctor_details: [
    {
      _id: ObjectId('69e1d1b35d059690588a2c7b'),
      doctor_id: 105,
      name: 'Dr. Mehta',
      specialization: 'Neurology',
      consultation_fee: 2000,
      city: 'Hyderabad',
      available: true
    },
    {
      _id: ObjectId('69e1d29afdf4874a463961a2'),
      doctor_id: 105,
      name: 'Dr. Mehta',
      specialization: 'Neurology',
      consultation_fee: 2000,
      city: 'Hyderabad',
      available: true
    }
  ]
}
db.appointments.aggregate([
  { $lookup: { from: "patients", localField: "patient_id", foreignField: "patient_id", as: "p" }},
  { $lookup: { from: "doctors", localField: "doctor_id", foreignField: "doctor_id", as: "d" }},
  { $unwind: "$p" },
  { $unwind: "$d" },
  { $project: { _id: 0, patient_name: "$p.name", doctor_name: "$d.name" } }
])
{
  patient_name: 'Aarav',
  doctor_name: 'Dr. Sharma'
}
{
  patient_name: 'Aarav',
  doctor_name: 'Dr. Sharma'
}
{
  patient_name: 'Aarav',
  doctor_name: 'Dr. Sharma'
}
{
  patient_name: 'Aarav',
  doctor_name: 'Dr. Sharma'
}
{
  patient_name: 'Priya',
  doctor_name: 'Dr. Iyer'
}
{
  patient_name: 'Priya',
  doctor_name: 'Dr. Iyer'
}
{
  patient_name: 'Aarav',
  doctor_name: 'Dr. Mehta'
}
{
  patient_name: 'Aarav',
  doctor_name: 'Dr. Mehta'
}
{
  patient_name: 'Aarav',
  doctor_name: 'Dr. Mehta'
}
{
  patient_name: 'Aarav',
  doctor_name: 'Dr. Mehta'
}
{
  patient_name: 'Rahul',
  doctor_name: 'Dr. Khan'
}
{
  patient_name: 'Rahul',
  doctor_name: 'Dr. Khan'
}
{
  patient_name: 'Rahul',
  doctor_name: 'Dr. Khan'
}
{
  patient_name: 'Rahul',
  doctor_name: 'Dr. Khan'
}
{
  patient_name: 'Meera',
  doctor_name: 'Dr. Reddy'
}
{
  patient_name: 'Meera',
  doctor_name: 'Dr. Reddy'
}
{
  patient_name: 'Meera',
  doctor_name: 'Dr. Reddy'
}
{
  patient_name: 'Meera',
  doctor_name: 'Dr. Reddy'
}
{
  patient_name: 'Rahul',
  doctor_name: 'Dr. Mehta'
}
{
  patient_name: 'Rahul',
  doctor_name: 'Dr. Mehta'
}
Type "it" for more
db.appointments.aggregate([
  { $lookup: { from: "patients", localField: "patient_id", foreignField: "patient_id", as: "p" }},
  { $lookup: { from: "doctors", localField: "doctor_id", foreignField: "doctor_id", as: "d" }},
  { $unwind: "$p" },
  { $unwind: "$d" },
  {
    $project: {
      _id: 0,
      patient_name: "$p.name",
      city: "$p.city",
      doctor_name: "$d.name",
      specialization: "$d.specialization",
      status: 1,
      bill_amount: 1
    }
  }
])
{
  status: 'Completed',
  bill_amount: 1200,
  patient_name: 'Aarav',
  city: 'Hyderabad',
  doctor_name: 'Dr. Sharma',
  specialization: 'Cardiology'
}
{
  status: 'Completed',
  bill_amount: 1200,
  patient_name: 'Aarav',
  city: 'Hyderabad',
  doctor_name: 'Dr. Sharma',
  specialization: 'Cardiology'
}
{
  status: 'Completed',
  bill_amount: 1200,
  patient_name: 'Aarav',
  city: 'Hyderabad',
  doctor_name: 'Dr. Sharma',
  specialization: 'Cardiology'
}
{
  status: 'Completed',
  bill_amount: 1200,
  patient_name: 'Aarav',
  city: 'Hyderabad',
  doctor_name: 'Dr. Sharma',
  specialization: 'Cardiology'
}
{
  status: 'Completed',
  bill_amount: 800,
  patient_name: 'Priya',
  city: 'Bangalore',
  doctor_name: 'Dr. Iyer',
  specialization: 'Dermatology'
}
{
  status: 'Completed',
  bill_amount: 800,
  patient_name: 'Priya',
  city: 'Bangalore',
  doctor_name: 'Dr. Iyer',
  specialization: 'Dermatology'
}
{
  status: 'Pending',
  bill_amount: 2000,
  patient_name: 'Aarav',
  city: 'Hyderabad',
  doctor_name: 'Dr. Mehta',
  specialization: 'Neurology'
}
{
  status: 'Pending',
  bill_amount: 2000,
  patient_name: 'Aarav',
  city: 'Hyderabad',
  doctor_name: 'Dr. Mehta',
  specialization: 'Neurology'
}
{
  status: 'Pending',
  bill_amount: 2000,
  patient_name: 'Aarav',
  city: 'Hyderabad',
  doctor_name: 'Dr. Mehta',
  specialization: 'Neurology'
}
{
  status: 'Pending',
  bill_amount: 2000,
  patient_name: 'Aarav',
  city: 'Hyderabad',
  doctor_name: 'Dr. Mehta',
  specialization: 'Neurology'
}
{
  status: 'Completed',
  bill_amount: 1500,
  patient_name: 'Rahul',
  city: 'Mumbai',
  doctor_name: 'Dr. Khan',
  specialization: 'Orthopedics'
}
{
  status: 'Completed',
  bill_amount: 1500,
  patient_name: 'Rahul',
  city: 'Mumbai',
  doctor_name: 'Dr. Khan',
  specialization: 'Orthopedics'
}
{
  status: 'Completed',
  bill_amount: 1500,
  patient_name: 'Rahul',
  city: 'Mumbai',
  doctor_name: 'Dr. Khan',
  specialization: 'Orthopedics'
}
{
  status: 'Completed',
  bill_amount: 1500,
  patient_name: 'Rahul',
  city: 'Mumbai',
  doctor_name: 'Dr. Khan',
  specialization: 'Orthopedics'
}
{
  status: 'Completed',
  bill_amount: 900,
  patient_name: 'Meera',
  city: 'Bangalore',
  doctor_name: 'Dr. Reddy',
  specialization: 'Pediatrics'
}
{
  status: 'Completed',
  bill_amount: 900,
  patient_name: 'Meera',
  city: 'Bangalore',
  doctor_name: 'Dr. Reddy',
  specialization: 'Pediatrics'
}
{
  status: 'Completed',
  bill_amount: 900,
  patient_name: 'Meera',
  city: 'Chennai',
  doctor_name: 'Dr. Reddy',
  specialization: 'Pediatrics'
}
{
  status: 'Completed',
  bill_amount: 900,
  patient_name: 'Meera',
  city: 'Chennai',
  doctor_name: 'Dr. Reddy',
  specialization: 'Pediatrics'
}
{
  status: 'Completed',
  bill_amount: 2000,
  patient_name: 'Rahul',
  city: 'Mumbai',
  doctor_name: 'Dr. Mehta',
  specialization: 'Neurology'
}
{
  status: 'Completed',
  bill_amount: 2000,
  patient_name: 'Rahul',
  city: 'Mumbai',
  doctor_name: 'Dr. Mehta',
  specialization: 'Neurology'
}
Type "it" for more
db.patients.aggregate([
  {
    $lookup: {
      from: "appointments",
      localField: "patient_id",
      foreignField: "patient_id",
      as: "appointments"
    }
  }
])
{
  _id: ObjectId('69e1d1985d059690588a2c71'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7c'),
      appointment_id: 1001,
      patient_id: 1,
      doctor_id: 101,
      visit_date: '2026-03-01',
      status: 'Completed',
      bill_amount: 1200
    },
    {
      _id: ObjectId('69e1d1c15d059690588a2c7e'),
      appointment_id: 1003,
      patient_id: 1,
      doctor_id: 105,
      visit_date: '2026-03-04',
      status: 'Pending',
      bill_amount: 2000,
      priority: 'High'
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a6'),
      appointment_id: 1001,
      patient_id: 1,
      doctor_id: 101,
      visit_date: '2026-03-01',
      status: 'Completed',
      bill_amount: 1200
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a8'),
      appointment_id: 1003,
      patient_id: 1,
      doctor_id: 105,
      visit_date: '2026-03-04',
      status: 'Pending',
      bill_amount: 2000,
      priority: 'High'
    }
  ]
}
{
  _id: ObjectId('69e1d1985d059690588a2c72'),
  patient_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  age: 34,
  gender: 'Female',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7d'),
      appointment_id: 1002,
      patient_id: 2,
      doctor_id: 102,
      visit_date: '2026-03-02',
      status: 'Completed',
      bill_amount: 800
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a7'),
      appointment_id: 1002,
      patient_id: 2,
      doctor_id: 102,
      visit_date: '2026-03-02',
      status: 'Completed',
      bill_amount: 800
    }
  ]
}
{
  _id: ObjectId('69e1d1985d059690588a2c73'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7f'),
      appointment_id: 1004,
      patient_id: 3,
      doctor_id: 103,
      visit_date: '2026-03-05',
      status: 'Completed',
      bill_amount: 1500
    },
    {
      _id: ObjectId('69e1d1c15d059690588a2c83'),
      appointment_id: 1008,
      patient_id: 3,
      doctor_id: 105,
      visit_date: '2026-03-10',
      status: 'Completed',
      bill_amount: 2000
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a9'),
      appointment_id: 1004,
      patient_id: 3,
      doctor_id: 103,
      visit_date: '2026-03-05',
      status: 'Completed',
      bill_amount: 1500
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961ad'),
      appointment_id: 1008,
      patient_id: 3,
      doctor_id: 105,
      visit_date: '2026-03-10',
      status: 'Completed',
      bill_amount: 2000
    }
  ]
}
{
  _id: ObjectId('69e1d1985d059690588a2c75'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male',
  appointments: []
}
{
  _id: ObjectId('69e1d1985d059690588a2c76'),
  patient_id: 6,
  name: 'Meera',
  city: 'Bangalore',
  age: 31,
  gender: 'Female',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c81'),
      appointment_id: 1006,
      patient_id: 6,
      doctor_id: 104,
      visit_date: '2026-03-08',
      status: 'Completed',
      bill_amount: 900
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961ab'),
      appointment_id: 1006,
      patient_id: 6,
      doctor_id: 104,
      visit_date: '2026-03-08',
      status: 'Completed',
      bill_amount: 900
    }
  ]
}
{
  _id: ObjectId('69e1d288fdf4874a46396195'),
  patient_id: 1,
  name: 'Aarav',
  city: 'Hyderabad',
  age: 29,
  gender: 'Male',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7c'),
      appointment_id: 1001,
      patient_id: 1,
      doctor_id: 101,
      visit_date: '2026-03-01',
      status: 'Completed',
      bill_amount: 1200
    },
    {
      _id: ObjectId('69e1d1c15d059690588a2c7e'),
      appointment_id: 1003,
      patient_id: 1,
      doctor_id: 105,
      visit_date: '2026-03-04',
      status: 'Pending',
      bill_amount: 2000,
      priority: 'High'
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a6'),
      appointment_id: 1001,
      patient_id: 1,
      doctor_id: 101,
      visit_date: '2026-03-01',
      status: 'Completed',
      bill_amount: 1200
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a8'),
      appointment_id: 1003,
      patient_id: 1,
      doctor_id: 105,
      visit_date: '2026-03-04',
      status: 'Pending',
      bill_amount: 2000,
      priority: 'High'
    }
  ]
}
{
  _id: ObjectId('69e1d288fdf4874a46396196'),
  patient_id: 2,
  name: 'Priya',
  city: 'Bangalore',
  age: 34,
  gender: 'Female',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7d'),
      appointment_id: 1002,
      patient_id: 2,
      doctor_id: 102,
      visit_date: '2026-03-02',
      status: 'Completed',
      bill_amount: 800
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a7'),
      appointment_id: 1002,
      patient_id: 2,
      doctor_id: 102,
      visit_date: '2026-03-02',
      status: 'Completed',
      bill_amount: 800
    }
  ]
}
{
  _id: ObjectId('69e1d288fdf4874a46396197'),
  patient_id: 3,
  name: 'Rahul',
  city: 'Mumbai',
  age: 41,
  gender: 'Male',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7f'),
      appointment_id: 1004,
      patient_id: 3,
      doctor_id: 103,
      visit_date: '2026-03-05',
      status: 'Completed',
      bill_amount: 1500
    },
    {
      _id: ObjectId('69e1d1c15d059690588a2c83'),
      appointment_id: 1008,
      patient_id: 3,
      doctor_id: 105,
      visit_date: '2026-03-10',
      status: 'Completed',
      bill_amount: 2000
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a9'),
      appointment_id: 1004,
      patient_id: 3,
      doctor_id: 103,
      visit_date: '2026-03-05',
      status: 'Completed',
      bill_amount: 1500
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961ad'),
      appointment_id: 1008,
      patient_id: 3,
      doctor_id: 105,
      visit_date: '2026-03-10',
      status: 'Completed',
      bill_amount: 2000
    }
  ]
}
{
  _id: ObjectId('69e1d288fdf4874a46396199'),
  patient_id: 5,
  name: 'Kiran',
  city: 'Hyderabad',
  age: 37,
  gender: 'Male',
  appointments: []
}
{
  _id: ObjectId('69e1d288fdf4874a4639619a'),
  patient_id: 6,
  name: 'Meera',
  city: 'Chennai',
  age: 31,
  gender: 'Female',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c81'),
      appointment_id: 1006,
      patient_id: 6,
      doctor_id: 104,
      visit_date: '2026-03-08',
      status: 'Completed',
      bill_amount: 900
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961ab'),
      appointment_id: 1006,
      patient_id: 6,
      doctor_id: 104,
      visit_date: '2026-03-08',
      status: 'Completed',
      bill_amount: 900
    }
  ]
}
db.doctors.aggregate([
  {
    $lookup: {
      from: "appointments",
      localField: "doctor_id",
      foreignField: "doctor_id",
      as: "appointments"
    }
  }
])
{
  _id: ObjectId('69e1d1b35d059690588a2c77'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1300,
  city: 'Hyderabad',
  available: true,
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7c'),
      appointment_id: 1001,
      patient_id: 1,
      doctor_id: 101,
      visit_date: '2026-03-01',
      status: 'Completed',
      bill_amount: 1200
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a6'),
      appointment_id: 1001,
      patient_id: 1,
      doctor_id: 101,
      visit_date: '2026-03-01',
      status: 'Completed',
      bill_amount: 1200
    }
  ]
}
{
  _id: ObjectId('69e1d1b35d059690588a2c79'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7f'),
      appointment_id: 1004,
      patient_id: 3,
      doctor_id: 103,
      visit_date: '2026-03-05',
      status: 'Completed',
      bill_amount: 1500
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a9'),
      appointment_id: 1004,
      patient_id: 3,
      doctor_id: 103,
      visit_date: '2026-03-05',
      status: 'Completed',
      bill_amount: 1500
    }
  ]
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7a'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c81'),
      appointment_id: 1006,
      patient_id: 6,
      doctor_id: 104,
      visit_date: '2026-03-08',
      status: 'Completed',
      bill_amount: 900
    },
    {
      _id: ObjectId('69e1d1c15d059690588a2c82'),
      appointment_id: 1007,
      patient_id: 4,
      doctor_id: 104,
      visit_date: '2026-03-09',
      status: 'Pending',
      bill_amount: 900,
      priority: 'High'
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961ab'),
      appointment_id: 1006,
      patient_id: 6,
      doctor_id: 104,
      visit_date: '2026-03-08',
      status: 'Completed',
      bill_amount: 900
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961ac'),
      appointment_id: 1007,
      patient_id: 4,
      doctor_id: 104,
      visit_date: '2026-03-09',
      status: 'Pending',
      bill_amount: 900,
      priority: 'High'
    }
  ]
}
{
  _id: ObjectId('69e1d1b35d059690588a2c7b'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad',
  available: true,
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7e'),
      appointment_id: 1003,
      patient_id: 1,
      doctor_id: 105,
      visit_date: '2026-03-04',
      status: 'Pending',
      bill_amount: 2000,
      priority: 'High'
    },
    {
      _id: ObjectId('69e1d1c15d059690588a2c83'),
      appointment_id: 1008,
      patient_id: 3,
      doctor_id: 105,
      visit_date: '2026-03-10',
      status: 'Completed',
      bill_amount: 2000
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a8'),
      appointment_id: 1003,
      patient_id: 1,
      doctor_id: 105,
      visit_date: '2026-03-04',
      status: 'Pending',
      bill_amount: 2000,
      priority: 'High'
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961ad'),
      appointment_id: 1008,
      patient_id: 3,
      doctor_id: 105,
      visit_date: '2026-03-10',
      status: 'Completed',
      bill_amount: 2000
    }
  ]
}
{
  _id: ObjectId('69e1d29afdf4874a4639619e'),
  doctor_id: 101,
  name: 'Dr. Sharma',
  specialization: 'Cardiology',
  consultation_fee: 1200,
  city: 'Hyderabad',
  available: true,
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7c'),
      appointment_id: 1001,
      patient_id: 1,
      doctor_id: 101,
      visit_date: '2026-03-01',
      status: 'Completed',
      bill_amount: 1200
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a6'),
      appointment_id: 1001,
      patient_id: 1,
      doctor_id: 101,
      visit_date: '2026-03-01',
      status: 'Completed',
      bill_amount: 1200
    }
  ]
}
{
  _id: ObjectId('69e1d29afdf4874a4639619f'),
  doctor_id: 102,
  name: 'Dr. Iyer',
  specialization: 'Dermatology',
  consultation_fee: 800,
  city: 'Bangalore',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7d'),
      appointment_id: 1002,
      patient_id: 2,
      doctor_id: 102,
      visit_date: '2026-03-02',
      status: 'Completed',
      bill_amount: 800
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a7'),
      appointment_id: 1002,
      patient_id: 2,
      doctor_id: 102,
      visit_date: '2026-03-02',
      status: 'Completed',
      bill_amount: 800
    }
  ]
}
{
  _id: ObjectId('69e1d29afdf4874a463961a0'),
  doctor_id: 103,
  name: 'Dr. Khan',
  specialization: 'Orthopedics',
  consultation_fee: 1500,
  city: 'Mumbai',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7f'),
      appointment_id: 1004,
      patient_id: 3,
      doctor_id: 103,
      visit_date: '2026-03-05',
      status: 'Completed',
      bill_amount: 1500
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a9'),
      appointment_id: 1004,
      patient_id: 3,
      doctor_id: 103,
      visit_date: '2026-03-05',
      status: 'Completed',
      bill_amount: 1500
    }
  ]
}
{
  _id: ObjectId('69e1d29afdf4874a463961a1'),
  doctor_id: 104,
  name: 'Dr. Reddy',
  specialization: 'Pediatrics',
  consultation_fee: 900,
  city: 'Delhi',
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c81'),
      appointment_id: 1006,
      patient_id: 6,
      doctor_id: 104,
      visit_date: '2026-03-08',
      status: 'Completed',
      bill_amount: 900
    },
    {
      _id: ObjectId('69e1d1c15d059690588a2c82'),
      appointment_id: 1007,
      patient_id: 4,
      doctor_id: 104,
      visit_date: '2026-03-09',
      status: 'Pending',
      bill_amount: 900,
      priority: 'High'
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961ab'),
      appointment_id: 1006,
      patient_id: 6,
      doctor_id: 104,
      visit_date: '2026-03-08',
      status: 'Completed',
      bill_amount: 900
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961ac'),
      appointment_id: 1007,
      patient_id: 4,
      doctor_id: 104,
      visit_date: '2026-03-09',
      status: 'Pending',
      bill_amount: 900,
      priority: 'High'
    }
  ]
}
{
  _id: ObjectId('69e1d29afdf4874a463961a2'),
  doctor_id: 105,
  name: 'Dr. Mehta',
  specialization: 'Neurology',
  consultation_fee: 2000,
  city: 'Hyderabad',
  available: true,
  appointments: [
    {
      _id: ObjectId('69e1d1c15d059690588a2c7e'),
      appointment_id: 1003,
      patient_id: 1,
      doctor_id: 105,
      visit_date: '2026-03-04',
      status: 'Pending',
      bill_amount: 2000,
      priority: 'High'
    },
    {
      _id: ObjectId('69e1d1c15d059690588a2c83'),
      appointment_id: 1008,
      patient_id: 3,
      doctor_id: 105,
      visit_date: '2026-03-10',
      status: 'Completed',
      bill_amount: 2000
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961a8'),
      appointment_id: 1003,
      patient_id: 1,
      doctor_id: 105,
      visit_date: '2026-03-04',
      status: 'Pending',
      bill_amount: 2000,
      priority: 'High'
    },
    {
      _id: ObjectId('69e1d2abfdf4874a463961ad'),
      appointment_id: 1008,
      patient_id: 3,
      doctor_id: 105,
      visit_date: '2026-03-10',
      status: 'Completed',
      bill_amount: 2000
    }
  ]
}
db.appointments.aggregate([
  { $group: { _id: "$doctor_id", total_revenue: { $sum: "$bill_amount" } } }
])

// 50
db.doctors.aggregate([
  {
    $lookup: {
      from: "appointments",
      localField: "doctor_id",
      foreignField: "doctor_id",
      as: "a"
    }
  },
  { $unwind: "$a" },
  {
    $group: {
      _id: "$specialization",
      total_revenue: { $sum: "$a.bill_amount" }
    }
  }
])
{
  _id: 'Neurology',
  total_revenue: 16000
}
{
  _id: 'Orthopedics',
  total_revenue: 6000
}
{
  _id: 'Cardiology',
  total_revenue: 4800
}
{
  _id: 'Pediatrics',
  total_revenue: 7200
}
{
  _id: 'Dermatology',
  total_revenue: 1600
}
db.appointments.aggregate([
  { $group: { _id: "$patient_id", total: { $sum: "$bill_amount" } } },
  { $sort: { total: -1 } },
  { $limit: 1 }
])
{
  _id: 3,
  total: 7000
}
db.appointments.aggregate([
  { $group: { _id: "$doctor_id", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])
{
  _id: 105,
  count: 4
}
db.appointments.aggregate([
  { $match: { status: "Completed" } },
  { $group: { _id: null, total: { $sum: "$bill_amount" } } }
])
{
  _id: null,
  total: 12800
}
db.appointments.aggregate([
  {
    $lookup: {
      from: "patients",
      localField: "patient_id",
      foreignField: "patient_id",
      as: "p"
    }
  },
  { $unwind: "$p" },
  { $group: { _id: "$p.city", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])
{
  _id: 'Mumbai',
  count: 8
}
db.appointments.aggregate([
  {
    $lookup: {
      from: "patients",
      localField: "patient_id",
      foreignField: "patient_id",
      as: "p"
    }
  },
  { $unwind: "$p" },
  { $group: { _id: "$p.city", total: { $sum: "$bill_amount" } } },
  { $sort: { total: -1 } },
  { $limit: 1 }
])
{
  _id: 'Mumbai',
  total: 14000
}
db.doctors.aggregate([
  {
    $lookup: {
      from: "appointments",
      localField: "doctor_id",
      foreignField: "doctor_id",
      as: "a"
    }
  },
  { $unwind: "$a" },
  {
    $group: {
      _id: "$specialization",
      avg_bill: { $avg: "$a.bill_amount" }
    }
  },
  { $sort: { avg_bill: -1 } },
  { $limit: 1 }
])
{
  _id: 'Neurology',
  avg_bill: 2000
}
hospital_db


