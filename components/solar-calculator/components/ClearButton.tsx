import { Dispatch, SetStateAction } from "react";
import { RotateCcw } from "lucide-react";

interface ClearButtonProps {
    setQuantities: Dispatch<SetStateAction<Record<string, number>>>;
}

function ClearButton({ setQuantities }: ClearButtonProps) {
    const handleClearAll = () => {
        setQuantities({});
    };

    return (
        <button
            onClick={handleClearAll}
            className="flex h-10.5 items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-medium text-muted-foreground hover:text-destructive hover:border-destructive/30 hover:bg-destructive/5 transition-all duration-200"
            aria-label="Limpiar formulario"
        >
            <RotateCcw className="size-3.5" />
            <span className="hidden sm:inline">Limpiar</span>
        </button>
    );
}

export default ClearButton;