import { SingleGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppPopulationTable() {
  return (
    <div>
      <SingleGraphDashboardFromConfig config='https://raw.githubusercontent.com/UNDP-Data/dv-bangladesh-data-repo/refs/heads/main/config/populationTable.json' />
    </div>
  );
}

export default AppPopulationTable;
