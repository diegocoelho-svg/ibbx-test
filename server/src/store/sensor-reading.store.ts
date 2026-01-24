import { randomUUID } from 'crypto'
import { calculateStatus } from '../utils/calculate-status'

export type SensorReading = {
  id: string
  assetId: string
  temperature: number
  vibration: number
  createdAt: string
  status: 'NORMAL' | 'ALERT'
}

const readings: SensorReading[] = []

function createSensorReading(
  assetId: string,
  temperature: number,
  vibration: number,
): SensorReading {
  const status = calculateStatus(temperature, vibration)

  const reading: SensorReading = {
    id: randomUUID(),
    assetId,
    status,
    temperature,
    vibration,
    createdAt: new Date().toISOString(),
  }

  readings.push(reading)
  return reading
}

function listSensorReadingsByAssetId(assetId: string) {
  return readings.filter((reading) => reading.assetId === assetId)
}

function findLastSensorReadingById(assetId: string) {
  const assetReadings = readings.filter(
    (reading) => reading.assetId === assetId,
  )

  if (assetReadings.length === 0) {
    return null
  }

  return assetReadings[assetReadings.length - 1]
}

export {
  createSensorReading,
  findLastSensorReadingById,
  listSensorReadingsByAssetId,
}
