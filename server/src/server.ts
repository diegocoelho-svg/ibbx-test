import fastify from 'fastify'
import { assetsRoutes } from './routes/assets.routes'
import { sensorReadingRoutes } from './routes/sensor-reading.routes'

const app = fastify()

app.register(assetsRoutes)
app.register(sensorReadingRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 Server running on http://localhost:3333')
})
