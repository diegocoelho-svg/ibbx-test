import { Plus } from "lucide-react"
import { Button } from "./Button"

type Props = {
  total: number
  alerts: number
  onAddAsset?: () => void
}

export function AssetsHeader({
  total,
  alerts,
  onAddAsset
}: Props) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div>
        <h1 className="text-xl font-semibold text-zinc-100">
          Ativos Monitorados
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          {total} ativos ·{" "}
          <span className="text-orange-500">
            {alerts} em alerta
          </span>
        </p>
      </div>

      <Button onClick={onAddAsset}>
        <Plus className="h-4 w-4" />
        Novo Ativo
      </Button>
    </div>
  )
}
