import { MultiGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppPopulation() {
  return (
    <div className='undp-container flex-div flex-wrap'>
      <MultiGraphDashboardFromConfig config='https://raw.githubusercontent.com/UNDP-Data/dv-bangladesh/refs/heads/main/public/config/configPopulation.json?token=GHSAT0AAAAAACVJJDKJMKA2NODKUOZJUEDYZZB5OIQ' />
    </div>
  );
}

export default AppPopulation;
