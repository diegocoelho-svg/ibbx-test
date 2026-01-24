import fastify from 'fastify'
import cors from '@fastify/cors'
import { assetsRoutes } from './routes/assets.routes'
import { sensorReadingRoutes } from './routes/sensor-reading.routes'

const app = fastify()

app.register(cors, {
  origin: '*',
})
app.register(assetsRoutes)
app.register(sensorReadingRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 Server running on http://localhost:3333')
})
