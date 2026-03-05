import { Dispatch, SetStateAction } from "react";
import { Settings2, ChevronDown } from "lucide-react";

interface AdvancedSettingsHeaderProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function AdvancedSettingsHeader({
  isOpen,
  setIsOpen
}: AdvancedSettingsHeaderProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
    >
      <Settings2 className="size-4" />
      <span>Ajustes Avanzados</span>
      <span className="text-xs text-muted-foreground/60">(Opcionales)</span>
      <ChevronDown
        className={`size-3.5 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  )
};

export default AdvancedSettingsHeader;
