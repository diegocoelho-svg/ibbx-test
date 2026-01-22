import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { HTTP_STATUS } from '../constants/httpStatus'
import { createSensorReading } from '../store/sensor-reading.store'
import { findAssetById, updateAssetStatus } from '../store/assets.store'

class SensorReadingsController {
  create(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
      assetId: z.uuid(),
      temperature: z.number(),
      vibration: z.number().positive(),
    })

    const bodySafe = bodySchema.safeParse(request.body)

    if (!bodySafe.success) {
      return reply.status(HTTP_STATUS.BAD_REQUEST).send({
        message: 'Dados Inválidos',
        errors: bodySafe.error.issues,
      })
    }

    const { assetId, temperature, vibration } = bodySafe.data

    const assetExists = findAssetById(assetId)

    if (!assetExists) {
      return reply.status(HTTP_STATUS.NOT_FOUND).send({
        message: 'Asset não encontrado',
      })
    }

    const reading = createSensorReading(assetId, temperature, vibration)

    updateAssetStatus(assetId)

    return reply.status(HTTP_STATUS.CREATED).send(reading)
  }
}

export { SensorReadingsController }
