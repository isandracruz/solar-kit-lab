"use client"

import { Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import SolarCalculatorTabs from "./components/SolarCalculatorTabs";
import ApplianceGrid from "./components/ApplianceGrid";
import { appliances, calculateSystem } from "@/lib/appliances";
import ManualInput from "./components/ManualInput";
import { AdvancedSettings } from "./components/AdvancedSettings";

type InputMode = "equipment" | "manual";

interface SolarCalculatorProps {
    autonomyHours: number;
    panelWatts: number;
    totalWatts: number;
    setAutonomyHours: (hours: number) => void;
    setPanelWatts: (watts: number) => void;
    setTotalWatts: (watts: number) => void;
}

function SolarCalculator({
    autonomyHours,
    panelWatts,
    totalWatts,
    setAutonomyHours,
    setPanelWatts,
    setTotalWatts
}: SolarCalculatorProps) {
    const [mode, setMode] = useState<InputMode>("equipment");
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    const [manualWatts, setManualWatts] = useState(0);

    const calculateTotalWatts = () => {
        if (mode === "manual") return setTotalWatts(manualWatts);
        const total = appliances.reduce((total, appliance) => {
            return total + (quantities[appliance.id] || 0) * appliance.watts
        }, 0)
        setTotalWatts(total);
    }

    useEffect(() => {
        calculateTotalWatts();
    }, [mode, manualWatts, quantities]);

    return (
        <div className="rounded-2xl border border-border bg-card p-5 md:p-7 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                    <Zap className="size-5 text-accent" />
                    <h2 className="font-semibold text-lg text-foreground">
                        1. Configura tu consumo
                    </h2>
                </div>

                <SolarCalculatorTabs
                    mode={mode}
                    setMode={setMode}
                />
            </div>

            {mode === "manual" ? (
                <ManualInput
                    watts={manualWatts}
                    onWattsChange={setManualWatts}
                />
            ) : (
                <ApplianceGrid
                    totalWatts={totalWatts}
                    quantities={quantities}
                    setQuantities={setQuantities}
                />
            )}

            <AdvancedSettings
                autonomyHours={autonomyHours}
                panelWatts={panelWatts}
                onAutonomyChange={setAutonomyHours}
                onPanelWattsChange={setPanelWatts}
            />
        </div>
    );
}

export default SolarCalculator;