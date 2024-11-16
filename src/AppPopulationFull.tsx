import { MultiGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppPopulationFull() {
  return (
    <div className='undp-container flex-div flex-wrap'>
      <MultiGraphDashboardFromConfig config='https://raw.githubusercontent.com/UNDP-Data/dv-bangladesh-data-repo/refs/heads/main/config/populationFull.json' />
    </div>
  );
}

export default AppPopulationFull;
