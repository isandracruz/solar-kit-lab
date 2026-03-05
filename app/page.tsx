"use client"

import HeroBanner from '@/components/HeroBanner';
import Layout from '@/components/layout/Layout';
import ResultsPanel from '@/components/results-panel/ResultsPanel';
import SolarCalculator from '@/components/solar-calculator/SolarCalculator';
import { useState } from 'react';

export default function Page() {
  const [totalWatts, setTotalWatts] = useState(0);
  const [autonomyHours, setAutonomyHours] = useState(24);
  const [panelWatts, setPanelWatts] = useState(500);

  return (
    <Layout>
      <HeroBanner />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
        <SolarCalculator 
          autonomyHours={autonomyHours}
          panelWatts={panelWatts}
          totalWatts={totalWatts}
          setAutonomyHours={setAutonomyHours}
          setPanelWatts={setPanelWatts}
          setTotalWatts={setTotalWatts}        
        />

        <ResultsPanel 
          autonomyHours={autonomyHours}
          panelWatts={panelWatts}
          totalWatts={totalWatts}
        />
      </div>
    </Layout>
  );
}
