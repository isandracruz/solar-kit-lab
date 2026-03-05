import { Info } from "lucide-react";

function ResultsPanelEmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
            <div className="flex items-center justify-center size-12 rounded-full bg-sidebar-accent/40">
                <Info className="size-5 text-sidebar-foreground/60" />
            </div>
            <p className="text-sm text-sidebar-foreground/60 max-w-50 leading-relaxed">
                {"Agrega equipos a tu lista para ver los requerimientos t\u00E9cnicos."}
            </p>
        </div>
    );
}

export default ResultsPanelEmptyState;