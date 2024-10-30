import { MultiGraphDashboardWideToLongFormatFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppUpazilasDashboard() {
  return (
    <div>
      {/* <MultiGraphDashboardWideToLongFormatFromConfig config='/config/configUpazilasDashboard.json' /> */}
      <MultiGraphDashboardWideToLongFormatFromConfig config='https://raw.githubusercontent.com/UNDP-Data/dv-bangladesh/refs/heads/main/public/config/configUpazilasDashboard.json' />
    </div>
  );
}

export default AppUpazilasDashboard;
