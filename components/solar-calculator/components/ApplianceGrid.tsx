import { appliances, calculateSystem } from "@/lib/appliances";
import { Dispatch, SetStateAction, useState } from "react";
import ApplianceSummaryBar from "./ApplianceSummaryBar";
import { ApplianceCard } from "./ApplianceCard";
import ClearButton from "./ClearButton";

interface ApplianceGridProps {
    totalWatts: number;
    quantities: Record<string, number>;
    setQuantities: Dispatch<SetStateAction<Record<string, number>>>;
}

function ApplianceGrid({ totalWatts, quantities, setQuantities }: ApplianceGridProps) {
    const handleQuantityChange = (id: string, qty: number) => {
        setQuantities((prev) => ({ ...prev, [id]: qty }))
    }

    const activeCount = Object.values(quantities).filter((q) => q > 0).length;

    return (
        <div className="flex flex-col gap-3">

            {activeCount > 0 && (
                <div className="flex items-center justify-between gap-2">
                    <div className="flex-1">
                        <ApplianceSummaryBar
                            totalWatts={totalWatts}
                            activeCount={activeCount}
                        />
                    </div>

                    <ClearButton setQuantities={setQuantities} />

                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {appliances.map((appliance) => (
                    <ApplianceCard
                        key={appliance.id}
                        appliance={appliance}
                        quantity={quantities[appliance.id] || 0}
                        onQuantityChange={handleQuantityChange}
                    />
                ))}
            </div>
        </div>
    )
}

export default ApplianceGrid;