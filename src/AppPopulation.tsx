import { MultiGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppPopulation() {
  return (
    <div className='undp-container flex-div flex-wrap'>
      <MultiGraphDashboardFromConfig config='/data/configPopulation.json' />
      <MultiGraphDashboardFromConfig config='/data/configPopulationFull.json' />
    </div>
  );
}

export default AppPopulation;
