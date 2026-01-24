import { AssetCard } from "../components/card/AssetCard";
import { AppLayout } from "../components/AppLayout";
import { Container } from "../components/Container";
import { AssetsHeader } from "../components/AssetsHeader";
import { useEffect, useState } from "react";
import { AddAssetModal } from "../components/modal/AddAssetModal";

type AssetStatus = "NORMAL" | "ALERT" | null

type LastReading = {
  temperature: number
  vibration: number
}

type Asset = {
  id: string
  name: string
  status: AssetStatus
  lastReading: LastReading | null
}

export function Dashboard() {
  const [isAddAssetModalOpen, setIsAddAssetModalOpen] = useState(false)
  const [assets, setAssets] = useState<Asset[]>([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3333/assets')
      .then(response => response.json())
      .then(data => {
        setAssets(data)
        setRefresh(false)
      })
  }, [refresh])

  const totalAssets = assets.length
  const alertAssets = assets.filter(asset => asset.status === "ALERT").length

  function handleOpenAssetModal() {
    setIsAddAssetModalOpen(true)
  }

  function handleCloseAssetModal() {
    setIsAddAssetModalOpen(false)
  }


  return (
    <AppLayout>
      <Container>
        <AssetsHeader total={totalAssets} alerts={alertAssets} onAddAsset={handleOpenAssetModal} />

        <div className="flex flex-col gap-4">
          {assets.map(asset => (
            <AssetCard
              assetId={asset.id}
              key={asset.id}
              name={asset.name}
              status={asset.status}
              lastReading={asset.lastReading}
            />
          ))}

        </div>

        {isAddAssetModalOpen && (
          <AddAssetModal onClose={handleCloseAssetModal} setRefresh={setRefresh} />
        )}

      </Container>
    </AppLayout>
  );
}
