"use client"

import { useState } from "react";
import AdvancedSettingsHeader from "./AdvancedSettingsHeader";
import { HourInput } from "./HourInput";
import { PanelWattsInput } from "./PanelWattsInput";

interface AdvancedSettingsProps {
  autonomyHours: number
  panelWatts: number
  onAutonomyChange: (hours: number) => void
  onPanelWattsChange: (watts: number) => void
}

export function AdvancedSettings({
  autonomyHours,
  panelWatts,
  onAutonomyChange,
  onPanelWattsChange,
}: AdvancedSettingsProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-t border-border/60 pt-5">
      <AdvancedSettingsHeader
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {isOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <HourInput 
            autonomyHours={autonomyHours}
            onAutonomyChange={onAutonomyChange}
          />

          <PanelWattsInput
            panelWatts={panelWatts}
            onPanelWattsChange={onPanelWattsChange}
          />
        </div>
      )}
    </div>
  )
}
