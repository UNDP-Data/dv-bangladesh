import { GeoHubMap } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppInfrastructure() {
  return (
    <div>
      <GeoHubMap
        mapStyle={[
          {
            style: 'https://geohub.data.undp.org/api/style/357.json',
            name: 'Affected buildings (Percentage)',
          },
          {
            style: 'https://geohub.data.undp.org/api/style/356.json',
            name: 'Affected Roads (Percentage)',
          },
          {
            style: 'https://geohub.data.undp.org/api/style/355.json',
            name: 'Affected Electricity Grids (Percentage)',
          },
        ]}
        height={700}
        zoomLevel={6.8}
        center={[91.49090645000001, 22.80350688816563]}
      />
    </div>
  );
}

export default AppInfrastructure;
