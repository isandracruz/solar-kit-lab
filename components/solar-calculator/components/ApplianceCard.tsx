"use client"

import { Minus, Plus, Lightbulb, Fan, Tv, Laptop, Wifi, Snowflake } from "lucide-react"
import type { Appliance } from "@/lib/appliances"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  lightbulb: Lightbulb,
  fan: Fan,
  tv: Tv,
  laptop: Laptop,
  wifi: Wifi,
  refrigerator: ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
      <path d="M5 10h14" />
      <path d="M15 7v0" />
      <path d="M15 13v0" />
    </svg>
  ),
  snowflake: Snowflake,
}

interface ApplianceCardProps {
  appliance: Appliance;
  quantity: number;
  onQuantityChange: (id: string, quantity: number) => void;
}

export function ApplianceCard({
  appliance,
  quantity,
  onQuantityChange,
}: ApplianceCardProps) {
  const Icon = iconMap[appliance.icon] || Lightbulb;
  const isActive = quantity > 0;

  return (
    <div
      className={`
        group relative flex flex-col gap-3 rounded-2xl border p-4 transition-all duration-200
        ${isActive
          ? "border-primary/30 bg-primary/5 shadow-sm"
          : "border-border bg-card hover:border-primary/20 hover:shadow-sm"
        }
      `}
    >
      <div className="flex items-start gap-3">
        <div
          className={`
            flex items-center justify-center size-9 rounded-xl transition-colors duration-200
            ${isActive ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}
          `}
        >
          <Icon className="size-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm text-foreground leading-tight">
            {appliance.name}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {appliance.watts}W por unidad
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Cantidad:</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onQuantityChange(appliance.id, Math.max(0, quantity - 1))}
            className="flex items-center justify-center size-8 rounded-lg border border-border bg-card text-foreground hover:bg-muted transition-colors disabled:opacity-40"
            disabled={quantity === 0}
            aria-label={`Reducir ${appliance.name}`}
          >
            <Minus className="size-3.5" />
          </button>
          <span
            className={`
              w-10 text-center text-sm font-semibold tabular-nums
              ${isActive ? "text-primary" : "text-foreground"}
            `}
          >
            {quantity}
          </span>
          <button
            onClick={() => onQuantityChange(appliance.id, quantity + 1)}
            className="flex items-center justify-center size-8 rounded-lg border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
            aria-label={`Aumentar ${appliance.name}`}
          >
            <Plus className="size-3.5" />
          </button>
        </div>
      </div>

      {isActive && (
        <div className="flex items-center justify-between pt-1 border-t border-primary/10">
          <span className="text-xs text-muted-foreground">Subtotal</span>
          <span className="text-xs font-semibold text-primary">
            {quantity * appliance.watts}W
          </span>
        </div>
      )}
    </div>
  )
}
