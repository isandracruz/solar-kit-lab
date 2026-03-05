import { ClipboardList, Lightbulb } from "lucide-react";

interface SolarCalculatorTabsProps {
    mode: "equipment" | "manual";
    setMode: (mode: "equipment" | "manual") => void;
}

function SolarCalculatorTabs({ mode, setMode }: SolarCalculatorTabsProps) {
    return (
        <div className="flex items-center rounded-xl bg-muted p-1 text-sm">
            <button
                onClick={() => setMode("manual")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium transition-all duration-200 ${mode === "manual"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
            >
                <ClipboardList className="size-3.5" />
                Ingreso Manual
            </button>
            <button
                onClick={() => setMode("equipment")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium transition-all duration-200 ${mode === "equipment"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
            >
                <Lightbulb className="size-3.5" />
                Por Equipos
            </button>
        </div>
    )
}

export default SolarCalculatorTabs;