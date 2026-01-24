import { X } from "lucide-react"
import { Button } from "../Button"
import { useEffect, useState } from "react"

type Props = {
  onClose: () => void
  assetId: string
  isOpen: boolean
}

type Reading = {
  id: string
  createdAt: string
  temperature: number
  vibration: number
  status: "NORMAL" | "ALERT" | null
}

export function ReadingsHistoryModal({ onClose, assetId, isOpen }: Props) {
  const [readings, setReadings] = useState<Reading[]>([])

  useEffect(() => {
    if (isOpen) {
      fetch(`http://localhost:3333/assets/${assetId}/readings`)
        .then(response => response.json())
        .then(data => {
          setReadings(data?.readings)
        })
    }
  }, [])

  console.log(readings)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-4xl rounded-lg bg-zinc-900 p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-100">
            Histórico de Leituras
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-200"
            >
              <X className="h-5 w-5 cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-zinc-800">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-zinc-800/60 text-left text-sm text-zinc-400">
                <th className="px-4 py-3">Data/Hora</th>
                <th className="px-4 py-3">Temperatura</th>
                <th className="px-4 py-3">Vibração</th>
                <th className="px-4 py-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {readings.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-6 text-center text-zinc-400"
                  >
                    Nenhuma leitura encontada
                  </td>
                </tr>
              )}

              {readings.map(reading => (
                <tr
                  key={reading.id}
                  className="text-sm text-zinc-100 hover:bg-zinc-800/40"
                >
                  <td className="px-4 py-3">
                    {new Date(reading.createdAt).toLocaleString("pt-BR")}
                  </td>
                  <td className="px-4 py-3">
                    {reading.temperature.toFixed(1)}°C
                  </td>
                  <td className="px-4 py-3">
                    {reading.vibration.toFixed(1)} mm/s
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${reading.status === "NORMAL" ? "bg-emerald-500/20 text-emerald-400" : "bg-orange-500/20 text-orange-400"}`}
                    >
                      {reading.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>


          </table>
        </div>

        <div className="mt-6 flex justify-end">
          <Button variant="secondary" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </div>
    </div>
  )
}
