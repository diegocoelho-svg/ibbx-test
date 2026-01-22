import { randomUUID } from 'node:crypto'
import { findLastSensorReadingById } from './sensor-reading.store'

type AssetStatus = 'NORMAL' | 'ALERT' | null

interface Asset {
  id: string
  name: string
  status: AssetStatus
}

const assets: Asset[] = []

function createAsset(name: string) {
  const asset: Asset = {
    id: randomUUID(),
    name,
    status: null,
  }

  assets.push(asset)
  return asset
}

function listAssets() {
  return assets
}

function findAssetById(id: string) {
  return assets.find((asset) => asset.id === id)
}

function updateAssetStatus(assetId: string) {
  const asset = findAssetById(assetId)

  if (!asset) return

  const reading = findLastSensorReadingById(assetId)
  if (!reading) return

  const status =
    reading.temperature > 80 || reading.vibration > 15 ? 'ALERT' : 'NORMAL'

  asset.status = status

  return status
}

export {
  AssetStatus,
  Asset,
  createAsset,
  listAssets,
  findAssetById,
  updateAssetStatus,
}
