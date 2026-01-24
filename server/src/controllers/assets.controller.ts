/* eslint-disable prettier/prettier */
import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { HTTP_STATUS } from '../constants/httpStatus'
import {
  createAsset,
  listAssets,
  findAssetById,
  updateAssetStatus,
} from '../store/assets.store'
import {
  findLastSensorReadingById,
  listSensorReadingsByAssetId,
} from '../store/sensor-reading.store'

class AssetsController {
  create(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
      name: z.string().min(1),
    })

    const bodySafe = bodySchema.safeParse(request.body)

    if (!bodySafe.success) {
      return reply.status(HTTP_STATUS.BAD_REQUEST).send({
        message: 'Dados inválidos',
        errors: bodySafe.error.issues,
      })
    }

    const { name } = bodySafe.data

    const asset = createAsset(name)

    return reply.status(HTTP_STATUS.CREATED).send(asset)
  }

  index(_request: FastifyRequest, reply: FastifyReply) {
    const assets = listAssets()

    const assetsWithLastReading = assets.map((asset) => {
      const lastReading = findLastSensorReadingById(asset.id)

      if (lastReading) {
        updateAssetStatus(asset.id)
      }

      return {
        ...asset,
        lastReading: lastReading
          ? {
            temperature: lastReading.temperature,
            vibration: lastReading.vibration,
            status: lastReading.status
          }
          : null,
      }
    })

    return reply.send(assetsWithLastReading)
  }

  show(request: FastifyRequest, reply: FastifyReply) {
    const paramsSchema = z.object({
      id: z.uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const asset = findAssetById(id)


    if (!asset) {
      return reply.status(HTTP_STATUS.NOT_FOUND).send({
        message: 'Asset não encontrado',
      })
    }

    const readings = listSensorReadingsByAssetId(id)
    const lastReading = findLastSensorReadingById(id)

    return reply.send({
      asset,
      lastReading,
      readings,
    })
  }
}

export { AssetsController }
