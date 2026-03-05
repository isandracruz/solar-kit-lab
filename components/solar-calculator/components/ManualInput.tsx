"use client"

import { Zap } from "lucide-react"

interface ManualInputProps {
  watts: number
  onWattsChange: (watts: number) => void
}

function ManualInput({ watts, onWattsChange }: ManualInputProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground">
          Consumo Total Estimado (Watts)
        </label>
        <div className="relative">
          <Zap className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="number"
            value={watts || ""}
            onChange={(e) => onWattsChange(Number(e.target.value))}
            placeholder="Ej: 1500"
            className="w-full h-12 rounded-xl border border-border bg-card pl-10 pr-12 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
            W
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          La suma de la potencia de todo lo que quieres encender a la vez.
        </p>
      </div>
    </div>
  )
}

export default ManualInput;