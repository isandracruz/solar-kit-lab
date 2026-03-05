import { useMemo } from "react";
import { Leaf } from "lucide-react";
import ResultsPanelEmptyState from "./components/ResultsPanelEmptyState";
import { calculateSystem } from "@/lib/appliances";

import InverterCard from "./components/InverterCard";
import BatteryCard from "./components/BatteryCard";
import PanelsCard from "./components/PanelsCard";

interface ResultsPanelProps {
    autonomyHours: number;
    panelWatts: number;
    totalWatts: number;
}

function ResultsPanel({
    autonomyHours,
    panelWatts,
    totalWatts
}: ResultsPanelProps) {
    const result = useMemo(() => {
        return calculateSystem(totalWatts, autonomyHours, panelWatts)
    }, [totalWatts, autonomyHours, panelWatts]);

    return (
        <div className="rounded-2xl bg-sidebar text-sidebar-foreground p-6 flex flex-col gap-5 sticky top-6">
            <div className="flex items-center gap-2.5">
                <Leaf className="size-4 text-sidebar-primary" />
                <h2 className="font-semibold text-lg">Tu Sistema Ideal</h2>
            </div>

            {!result ? <ResultsPanelEmptyState /> : (
                <div className="flex flex-col gap-3">
                    <InverterCard
                        inverterKw={result.inverterKw}
                        totalWatts={totalWatts}
                    />

                    <BatteryCard
                        batteryKwh={result.batteryKwh}
                        autonomyHours={autonomyHours}
                    />

                    <PanelsCard
                        panelsNeeded={result.panelsNeeded}
                        panelWatts={panelWatts}
                    />
                </div>
            )}
        </div>
    );
}

export default ResultsPanel;