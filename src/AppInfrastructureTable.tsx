import { SingleGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppInfrastructureTable() {
  return (
    <div>
      <SingleGraphDashboardFromConfig config='https://raw.githubusercontent.com/UNDP-Data/dv-bangladesh-data-repo/refs/heads/main/config/infrastructureTable.json' />
    </div>
  );
}

export default AppInfrastructureTable;
