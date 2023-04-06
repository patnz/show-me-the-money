import express from 'express'
import { join } from 'node:path'
import attendees from './routes/attendees'
import meetings from './routes/meetings'

const server = express()

server.use(express.json())
server.use(express.static(join('server', 'public')))

server.use('/api/attendees', attendees)
server.use('/api/meetings', meetings)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server
