import { X } from "lucide-react"
import { Button } from "../Button"
import { useState } from "react"

type Props = {
  onClose: () => void
  setRefresh: (arg0: boolean) => void
}

export function AddAssetModal({ onClose, setRefresh }: Props) {
  const [name, setName] = useState("")

  const handleRegisterAsset = async () => {

    if (!name.trim()) {
      alert("Insira uma palavra válida")
      return
    }

    try {
      await fetch("http://localhost:3333/assets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        })
      })

      setRefresh(true)
      onClose()
    } catch (error) {
      alert("Erro ao cadastrar ativo")
      console.error("Erro ao cadastrar ativo", error)
    }

  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded-lg bg-zinc-900 p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-100">
            Cadastrar Novo Ativo
          </h2>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-200"
          >
            <X className="h-5 w-5 cursor-pointer" />
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-zinc-400">
              Nome do Ativo
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Bomba Hidráulica"
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>

            <Button onClick={handleRegisterAsset}>
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
