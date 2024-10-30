import { MultiGraphDashboardWideToLongFormatFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppCropland() {
  return (
    <div>
      <MultiGraphDashboardWideToLongFormatFromConfig config='/data/configCropland.json' />
    </div>
  );
}

export default AppCropland;
