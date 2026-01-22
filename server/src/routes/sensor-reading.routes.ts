import { FastifyInstance } from 'fastify'
import { SensorReadingsController } from '../controllers/sensor-readings.controller'

export async function sensorReadingRoutes(app: FastifyInstance) {
  const sensorReadingsController = new SensorReadingsController()

  app.post('/sensor-readings', sensorReadingsController.create)
}
