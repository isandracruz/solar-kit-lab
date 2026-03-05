"use client"
import { Clock } from "lucide-react";

interface HourInputProps {
    autonomyHours: number;
    onAutonomyChange: (hours: number) => void;
}

export function HourInput({
    autonomyHours,
    onAutonomyChange,
}: HourInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
                {"Horas de autonom\u00EDa garantizada"}
            </label>
            <div className="relative">
                <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                    type="number"
                    value={autonomyHours}
                    onChange={(e) => onAutonomyChange(Number(e.target.value))}
                    className="w-full h-11 rounded-xl border border-border bg-card pl-10 pr-10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground">
                    h
                </span>
            </div>
            <p className="text-xs text-muted-foreground">
                {"Tiempo de respaldo con bater\u00EDas. Por defecto: 24h."}
            </p>
        </div>
    )
}
