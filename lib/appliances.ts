export interface Appliance {
  id: string;
  name: string;
  watts: number;
  icon: string;
}

export interface SystemResult {
  inverterKw: number;
  batteryKwh: number;
  panelsNeeded: number;
  panelWatts: number;
  autonomyHours: number;
}

export const appliances: Appliance[] = [
  { id: "led", name: "Bombillo LED", watts: 10, icon: "lightbulb" },
  { id: "fan", name: "Ventilador", watts: 60, icon: "fan" },
  { id: "tv", name: 'Televisor (32")', watts: 80, icon: "tv" },
  { id: "laptop", name: "Laptop", watts: 45, icon: "laptop" },
  { id: "router", name: "Router WiFi", watts: 15, icon: "wifi" },
  { id: "fridge", name: "Refrigerador", watts: 250, icon: "refrigerator" },
  { id: "ac", name: "Aire Split (1 Ton)", watts: 1200, icon: "snowflake" },
]

export function calculateSystem(totalWatts: number, autonomyHours: number, panelWatts: number): SystemResult | null {
  if (totalWatts <= 0) return null

  // Inverter: +25% safety margin, rounded up to nearest 0.1 kW
  const inverterKw = Math.ceil((totalWatts * 1.25) / 100) / 10

  // Battery: Wh needed = watts * hours, 80% depth of discharge, convert to kWh
  const batteryKwh = Math.round(((totalWatts * autonomyHours) / 0.8 / 1000) * 10) / 10

  // Panels: assuming 5 peak sun hours per day
  const peakSunHours = 5
  const dailyWh = totalWatts * autonomyHours
  const panelsNeeded = Math.ceil(dailyWh / (panelWatts * peakSunHours))

  return {
    inverterKw,
    batteryKwh,
    panelsNeeded,
    panelWatts,
    // totalWatts,
    autonomyHours,
  }
}
