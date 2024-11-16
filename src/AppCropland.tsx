import { MultiGraphDashboardWideToLongFormatFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppCropland() {
  return (
    <div>
      <MultiGraphDashboardWideToLongFormatFromConfig config='https://raw.githubusercontent.com/UNDP-Data/dv-bangladesh-data-repo/refs/heads/main/config/cropland.json' />
    </div>
  );
}

export default AppCropland;
