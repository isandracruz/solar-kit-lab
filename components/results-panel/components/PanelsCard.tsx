import { SunMedium } from "lucide-react"

interface PanelsCardProps {
    panelsNeeded: number;
    panelWatts: number;
}

function PanelsCard({
    panelsNeeded,
    panelWatts
}: PanelsCardProps) {
    return (
        <div className="rounded-xl bg-sidebar-accent/30 p-4 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
                <SunMedium className="size-3.5 text-sidebar-primary" />
                <span className="text-xs font-medium text-sidebar-primary uppercase tracking-wide">
                    Paneles Solares (Est.)
                </span>
            </div>
            <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold tabular-nums">
                    {panelsNeeded}
                </span>
                <span className="text-sm text-sidebar-foreground/70">paneles</span>
            </div>
            <p className="text-xs text-sidebar-foreground/50 leading-relaxed">
                {`Paneles de ${panelWatts}W calculados para 5 horas de sol pleno diario.`}
            </p>
        </div>
    )
}

export default PanelsCard;