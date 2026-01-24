type Props = {
  name: string
  status: 'NORMAL' | 'ALERT' | null
}

export function AssetCardHeader({ name, status }: Props) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-base font-semibold text-zinc-100">
        {name}
      </h2>

      {status && (
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${status === 'NORMAL' ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}
        >
          {status}
        </span>
      )}
    </div>
  )
}
