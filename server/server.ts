import express from 'express'
import { join } from 'node:path'
import attendees from './routes/attendees'
import meetings from './routes/meetings'

const server = express()

server.use(express.json())
server.use(express.static(join('server', 'public')))

server.use('/api/v1/attendees', attendees)
server.use('/api/v1/meetings', meetings)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server
