import { Battery } from "lucide-react"

interface BatteryCardProps {
    batteryKwh: number;
    autonomyHours: number;
}

function BatteryCard({
    batteryKwh,
    autonomyHours
}: BatteryCardProps) {
    return (
        <div className="rounded-xl bg-sidebar-accent/30 p-4 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
                <Battery className="size-3.5 text-sidebar-primary" />
                <span className="text-xs font-medium text-sidebar-primary uppercase tracking-wide">
                    {"Almacenamiento (Bater\u00EDas)"}
                </span>
            </div>
            <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold tabular-nums">
                    {batteryKwh}
                </span>
                <span className="text-sm text-sidebar-foreground/70">kWh</span>
            </div>
            <p className="text-xs text-sidebar-foreground/50 leading-relaxed">
                {`Capacidad para ${autonomyHours}h de autonom\u00EDa (descarga segura del 80%).`}
            </p>
        </div>
    )
}

export default BatteryCard;