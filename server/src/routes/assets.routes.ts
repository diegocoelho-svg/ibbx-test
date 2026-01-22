import { FastifyInstance } from 'fastify'
import { AssetsController } from '../controllers/assets.controller'

export async function assetsRoutes(app: FastifyInstance) {
  const assetsController = new AssetsController()

  app.post('/assets', assetsController.create)
  app.get('/assets', assetsController.index)
  app.get('/assets/:id/readings', assetsController.show)
}
