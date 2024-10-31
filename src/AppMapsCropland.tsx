import { GeoHubMapWithLayerSelection } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppMapsAll() {
  return (
    <div>
      <GeoHubMapWithLayerSelection
        mapStyle='https://geohub.data.undp.org/api/style/362.json'
        layerSelection={[
          {
            name: 'Affected Population',
            layerID: [
              '3991911f-4b86-494b-86a5-5ad142b43060',
              '3991911f-4b86-494b-86a5-5ad142b43060-label',
            ],
          },
          {
            name: 'Affected Female Population',
            layerID: [
              '2faea60e-bdf1-43b5-a83b-7a2e172e6668',
              '2faea60e-bdf1-43b5-a83b-7a2e172e6668-label',
            ],
          },
          {
            name: 'Affected Male Population',
            layerID: [
              'bda24728-8974-4075-aa82-2a4a23d1d882',
              'bda24728-8974-4075-aa82-2a4a23d1d882-label',
            ],
          },
          {
            name: 'Affected Population Above 65',
            layerID: [
              'f32dc78e-cfab-4df9-9fb8-662804e17ee8',
              'f32dc78e-cfab-4df9-9fb8-662804e17ee8-label',
            ],
          },
          {
            name: 'Affected Population Below 5',
            layerID: [
              'e098ff16-30ef-469f-a890-fd4ea19359d9',
              'e098ff16-30ef-469f-a890-fd4ea19359d9-label',
            ],
          },
          {
            name: 'Child Dependency Ratio',
            layerID: [
              'dd906f16-f5ae-4942-8cf5-ddb1ac58c072',
              'dd906f16-f5ae-4942-8cf5-ddb1ac58c072-label',
            ],
          },
          {
            name: 'Elderly Dependency Ratio',
            layerID: [
              'dd8f3ba7-9df3-44b6-8618-ea1f02f9fb12',
              'dd8f3ba7-9df3-44b6-8618-ea1f02f9fb12-label',
            ],
          },
          {
            name: 'Flooded Cropland Area',
            layerID: [
              'a3aed2ff-524e-4888-8a97-1359eb70303f',
              'a3aed2ff-524e-4888-8a97-1359eb70303f-label',
            ],
          },
          {
            name: 'Percentage of Flooded Cropland',
            layerID: [
              '996f49598-b3b5-42dd-9aa1-4b6571b8d828',
              '996f49598-b3b5-42dd-9aa1-4b6571b8d828-label',
            ],
          },
          {
            name: 'Flooded Built-Up Area',
            layerID: [
              '95cabf55-b81e-49ee-a817-c033eeb0b7e8',
              '95cabf55-b81e-49ee-a817-c033eeb0b7e8-label',
            ],
          },
          {
            name: 'Percentage of Flooded Built-Up Area',
            layerID: [
              'bb203d17-abb5-4ff5-923c-7ca2e47dbe74',
              'bb203d17-abb5-4ff5-923c-7ca2e47dbe74-label',
            ],
          },
          {
            name: 'Flooded Buildings Area',
            layerID: [
              'c8782d59-1dae-4285-8345-57f1a61ef5ae',
              'c8782d59-1dae-4285-8345-57f1a61ef5ae-label',
            ],
          },
          {
            name: 'Percentage of Flooded Buildings',
            layerID: [
              'fad574dd-5a37-4ef5-b814-ed4c9ee6ea8e',
              'fad574dd-5a37-4ef5-b814-ed4c9ee6ea8e-label',
            ],
          },
          {
            name: 'Percentage of Flooded Roads',
            layerID: [
              '5ed5ba15-4cc1-4ce7-8238-6e5cabd43981',
              '5ed5ba15-4cc1-4ce7-8238-6e5cabd43981-label',
            ],
          },
          {
            name: 'Percentage of Flooded Grids',
            layerID: [
              '180165c1-1b3f-4a8a-b31c-3b23adcb00fd',
              '180165c1-1b3f-4a8a-b31c-3b23adcb00fd-label',
            ],
          },
        ]}
        height={700}
        zoomLevel={6.8}
        center={[91.49090645000001, 22.80350688816563]}
      />
    </div>
  );
}

export default AppMapsAll;
