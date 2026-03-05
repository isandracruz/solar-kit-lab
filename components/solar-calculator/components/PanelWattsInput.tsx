"use client"
import { Sun } from "lucide-react";

interface PanelWattsInputProps {
    panelWatts: number;
    onPanelWattsChange: (watts: number) => void;
}

export function PanelWattsInput({
    panelWatts,
    onPanelWattsChange,
}: PanelWattsInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
                Potencia del panel solar
            </label>
            <div className="relative">
                <Sun className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                    type="number"
                    value={panelWatts}
                    onChange={(e) => onPanelWattsChange(Number(e.target.value))}
                    className="w-full h-11 rounded-xl border border-border bg-card pl-10 pr-10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground">
                    W
                </span>
            </div>
            <p className="text-xs text-muted-foreground">
                Para calcular cantidad de paneles. Por defecto: 500W.
            </p>
        </div>
    )
}
