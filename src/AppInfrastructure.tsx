import { GeoHubMap } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppInfrastructure() {
  return (
    <div>
      <GeoHubMap
        mapStyle={[
          {
            style: 'https://geohub.data.undp.org/api/style/357.json',
            name: 'Buildings',
          },
          {
            style: 'https://geohub.data.undp.org/api/style/356.json',
            name: 'Roads',
          },
          {
            style: 'https://geohub.data.undp.org/api/style/355.json',
            name: 'Electricity Grids',
          },
        ]}
        height={700}
        graphTitle='Affected infrastructure by type'
        zoomLevel={6.8}
        center={[91.49090645000001, 22.80350688816563]}
      />
    </div>
  );
}

export default AppInfrastructure;
