interface ApplianceSummaryBarProps {
    totalWatts: number;
    activeCount: number;
}

function ApplianceSummaryBar({ totalWatts, activeCount }: ApplianceSummaryBarProps) {
    return (

        <div className="flex items-center justify-between rounded-xl bg-primary/5 border border-primary/10 px-4 py-2.5 animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary">
                    {activeCount} {activeCount === 1 ? "equipo seleccionado" : "equipos seleccionados"}
                </span>
            </div>
            <span className="text-sm font-bold text-primary tabular-nums">
                {totalWatts}W total
            </span>
        </div>

    )
}

export default ApplianceSummaryBar;