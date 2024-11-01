import { MultiGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppInfrastructureFull() {
  return (
    <div className='undp-container flex-div flex-wrap'>
      {/* <MultiGraphDashboardFromConfig config='/config/configCroplandFull.json' /> */}
      <MultiGraphDashboardFromConfig config='https://raw.githubusercontent.com/UNDP-Data/dv-bangladesh/refs/heads/main/public/config/configCroplandFull.json' />
    </div>
  );
}

export default AppInfrastructureFull;
