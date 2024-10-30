import { GeoHubMap } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppPopulationMap() {
  return (
    <div>
      <GeoHubMap
        mapStyle={[
          {
            style: 'https://geohub.data.undp.org/api/style/361.json',
            name: 'Affected Total Population',
          },
          {
            style: 'https://geohub.data.undp.org/api/style/359.json',
            name: 'Affected Female Population',
          },
          {
            style: 'https://geohub.data.undp.org/api/style/360.json',
            name: 'Affected Male Population',
          },
        ]}
        height={700}
        zoomLevel={6.8}
        center={[91.49090645000001, 22.80350688816563]}
      />
    </div>
  );
}

export default AppPopulationMap;
