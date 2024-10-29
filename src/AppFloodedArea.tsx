import { GeoHubCompareMaps } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppFloodedArea() {
  return (
    <div className='undp-container flex-div flex-wrap'>
      <div className='grow'>
        <GeoHubCompareMaps
          graphTitle='Flooded area'
          center={[91.2, 24.5]}
          padding='0'
          zoomLevel={11}
          height={700}
          graphDescription='Description of the graph'
          source='[Placeholder for Source]'
          mapStyles={[
            'https://geohub.data.undp.org/api/style/354.json',
            'https://geohub.data.undp.org/api/style/353.json',
          ]}
        />
      </div>
    </div>
  );
}

export default AppFloodedArea;
