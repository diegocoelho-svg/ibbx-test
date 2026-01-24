import { Thermometer, MapPin } from 'lucide-react'

type Props = {
  temperature: number
  vibration: number
}

export function AssetMetrics({ temperature, vibration }: Props) {
  return (
    <div className="flex items-center gap-6 text-sm text-zinc-400">
      
      <div className="flex items-center gap-1.5">
        <Thermometer className="w-4 h-4 text-orange-500" />
        <span>
          Temp:
          <strong className="ml-1 font-medium text-zinc-100">
            {temperature}°C
          </strong>
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        <MapPin className="w-4 h-4 text-orange-500" />
        <span>
          Vibração:
          <strong className="ml-1 font-medium text-zinc-100">
            {vibration} mm/s
          </strong>
        </span>
      </div>

    </div>
  )
}