import { Zap } from "lucide-react";

interface InverterCardProps {
    inverterKw: number;
    totalWatts: number;
}

function InverterCard({
    inverterKw,
    totalWatts
}: InverterCardProps
) {
    return (
        <div className="rounded-xl bg-sidebar-accent/30 p-4 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
                <Zap className="size-3.5 text-sidebar-primary" />
                <span className="text-xs font-medium text-sidebar-primary uppercase tracking-wide">
                    Inversor Necesario
                </span>
            </div>
            <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold tabular-nums">
                    {inverterKw}
                </span>
                <span className="text-sm text-sidebar-foreground/70">kW</span>
            </div>
            <p className="text-xs text-sidebar-foreground/50 leading-relaxed">
                {`Soporta ${totalWatts}W simult\u00E1neos + 25% de margen de seguridad.`}
            </p>
        </div>
    );
}

export default InverterCard;