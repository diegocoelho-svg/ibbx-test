import { AssetMetrics } from "./AssetMetrics"
import { AssetCardHeader } from "./AssetCardHeader"
import { Button } from "../Button"
import { useState } from "react"
import { ReadingsHistoryModal } from "../modal/ReadingsHistoryModal"

type AssetStatus = "NORMAL" | "ALERT" | null

type LastReading = {
  temperature: number
  vibration: number
}

type AssetCardProps = {
  name: string
  status: AssetStatus
  lastReading: LastReading | null
  assetId: string
}

export function AssetCard({
  name,
  status,
  lastReading,
  assetId,
}: AssetCardProps) {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)

  function handleOpenHistoryModal() {
    setIsHistoryModalOpen(true)
  }

  function handleCloseHistoryModal() {
    setIsHistoryModalOpen(false)
  }

  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-4">

      <div className="flex flex-col gap-2">
        <AssetCardHeader name={name} status={status} />
        <AssetMetrics
          temperature={lastReading?.temperature ?? 0}
          vibration={lastReading?.vibration ?? 0}
        />
      </div>

      <Button onClick={handleOpenHistoryModal} variant="terciary">
        Detalhes →
      </Button>

      {isHistoryModalOpen && (
        <ReadingsHistoryModal onClose={handleCloseHistoryModal} assetId={assetId} isOpen={isHistoryModalOpen} />
      )}

    </div>
  )
}
