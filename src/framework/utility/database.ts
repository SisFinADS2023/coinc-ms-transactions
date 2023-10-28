import mongoose from 'mongoose'

mongoose.set("debug", true)

const db = {
  host: process.env.DB_HOST,
  userName: process.env.DB_USER,
  password: process.env.DB_PASSWORD
}
console.log({ db })
const URI = `mongodb+srv://${db.userName}:${db.password}@${db.host}/?retryWrites=true&w=majority`

try {
  Promise.resolve(mongoose.connect(URI))

  console.log('Succesfully connected to MongoDB.')
} catch (err) {
  console.log('MongoDB connection error: ', err)
  process.exit(1)
}
