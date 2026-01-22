import { randomUUID } from 'crypto'

export type SensorReading = {
  id: string
  assetId: string
  temperature: number
  vibration: number
  createdAt: string
}

const readings: SensorReading[] = []

function createSensorReading(
  assetId: string,
  temperature: number,
  vibration: number,
) {
  const reading: SensorReading = {
    id: randomUUID(),
    assetId,
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
