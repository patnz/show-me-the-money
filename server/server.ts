import express from 'express'
import { join } from 'node:path'
import attendees from './routes/attendees'
import meetings from './routes/meetings'

const server = express()

server.use(express.json())
server.use(express.static(join('server', 'public')))

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

server.use('/api/v1/attendees', attendees)
server.use('/api/v1/attendees', meetings)

export default server
