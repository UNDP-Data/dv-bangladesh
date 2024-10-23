import { GeoHubMap } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppFloodedArea() {
  return (
    <div className='undp-container flex-div flex-wrap'>
      <div className='grow'>
        <GeoHubMap
          mapStyle='https://geohub.data.undp.org/api/style/350.json'
          graphTitle='Flooded area'
          height={700}
          graphDescription='Description of the graph'
          source='[Placeholder for Source]'
        />
      </div>
    </div>
  );
}

export default AppFloodedArea;
