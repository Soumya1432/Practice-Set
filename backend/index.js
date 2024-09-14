import express from 'express'
import mongoose from 'mongoose'

const app = express()

mongoose
	.connect(
		'mongodb+srv://biswassoumya17:qs9tMFDGuXcqOKHM@cluster11.zd2b0.mongodb.net'
	)
	.then(() => console.log('MongoDB connected successfully'))
	.catch(error => console.error('MongoDB connection error:', error))

const schemaOne = new mongoose.Schema({}, { strict: false })
const YourModel = mongoose.model('comments', schemaOne)

// API endpoint with pagination
app.get('/api/data', async (req, res) => {
  const page = parseInt(req.query.page) || 1 // Default to page 1
  const limit = parseInt(req.query.limit) || 50 // Default to 50 items per page
  const skip = (page - 1) * limit
  try {
    const total = await YourModel.countDocuments() // Total number of documents
    const data = await YourModel.find().skip(skip).limit(limit)

    res.status(200).json({
      data,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total
    })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'An error occurred while fetching data.' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
