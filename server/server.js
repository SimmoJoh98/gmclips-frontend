const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3005
const auth = require('./controllers/auth-controller')
const cors = require('cors')
const postctrlr = require('./controllers/post-controller')

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/build')))

// GET
app.get('/', (req,res) => res.status(200).sendFile(path.join(__dirname, '../client/build', 'index.html')))
app.get('/api/login', auth.login)
// PUT
app.put('/api/likepost', postctrlr.likePost)
// POST
app.post('/api/register', auth.register)
// DELETE




app.listen(PORT, () => console.log(`GMClips running on ${PORT}`))