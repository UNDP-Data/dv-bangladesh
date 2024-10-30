import { MultiGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppInfrastructureS() {
  return (
    <div className='undp-container flex-div flex-wrap'>
      {/* <MultiGraphDashboardFromConfig config='/config/configInfrastructureFull_2.json' /> */}
      <MultiGraphDashboardFromConfig config='https://raw.githubusercontent.com/UNDP-Data/dv-bangladesh/refs/heads/main/public/config/configInfrastructureFull_2.json' />
    </div>
  );
}

export default AppInfrastructureS;
