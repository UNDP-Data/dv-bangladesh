import { SingleGraphDashboard } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function AppPopulation() {
  return (
    <div className='undp-container flex-div flex-wrap'>
      <div style={{ width: 'calc(50% - 1rem)' }}>
        <SingleGraphDashboard
          dataSettings={{
            dataURL: '/data/dataPopulation.csv',
            fileType: 'csv',
          }}
          graphType='horizontalBarChart'
          dataSelectionOptions={[
            {
              label: 'Select indicator',
              allowedColumnIds: [
                {
                  value: 'flooded_pop_2024',
                  label: 'Total count',
                },
                {
                  value: 'flooded_pop_2024_perc',
                  label: 'Percentage of Population',
                },
              ],
              chartConfigId: 'size',
            },
          ]}
          graphDataConfiguration={[
            { columnId: 'shapeName', chartConfigId: 'label' },
            {
              columnId: ['flooded_pop_2024'],
              chartConfigId: 'size',
            },
          ]}
          graphSettings={{
            graphTitle: 'Number of People Affected by Flood',
            graphDescription: 'Top 20 most affected upazilas',
            leftMargin: 132,
            padding: '16px 32px 16px 16px',
            backgroundColor: '#FAFAFA',
            showValues: false,
            height: 700,
            tooltip: `<div class="padding-05">
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px; width: 340px;">
              <h6 class="undp-typography margin-bottom-00">{{d.data.shapeName}}</h6>
              <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <div style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #D4D6D8; margin-right: 5px;"></span>
                  <span>Total Population</span>
                </div>
                <div class="bold">{{d.data.pop_2024}}</div>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <div style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #006eb5; margin-right: 5px;"></span>
                  <span>Affected Population</span>
                </div>
                <div class="bold">{{d.data.flooded_pop_2024}} (XX%)</div>
              </div>
            </div>
          </div>`,
          }}
        />
      </div>
      <div style={{ width: 'calc(50% - 1rem)' }}>
        <SingleGraphDashboard
          dataSettings={{
            dataURL: '/data/dataPopulation.csv',
            fileType: 'csv',
          }}
          graphType='horizontalDumbbellChart'
          dataFilters={[
            {
              column: 'flooded_female_pop_2024',
              excludeValues: [''],
            },
            {
              column: 'flooded_male_pop_2024',
              excludeValues: [''],
            },
            {
              column: 'flooded_child_pop_2024',
              excludeValues: [''],
            },
            {
              column: 'flooded_active_pop_2024',
              excludeValues: [''],
            },
            {
              column: 'flooded_elderly_pop_2024',
              excludeValues: [''],
            },
          ]}
          filters={[
            {
              column: 'shapeName',
              singleSelect: false,
              clearable: true,
              label: 'Filter by upazilas',
            },
          ]}
          dataSelectionOptions={[
            {
              label: 'Select group',
              allowedColumnIds: [
                {
                  value: 'flooded_female_pop_2024',
                  label: 'Women',
                },
                {
                  value: 'flooded_male_pop_2024',
                  label: 'Men',
                },
                {
                  value: 'flooded_child_pop_2024',
                  label: 'Youth',
                },
                {
                  value: 'flooded_active_pop_2024',
                  label: 'Adults',
                },
                {
                  value: 'flooded_elderly_pop_2024',
                  label: 'Elderly',
                },
              ],
              chartConfigId: 'x',
            },
          ]}
          graphDataConfiguration={[
            { columnId: 'shapeName', chartConfigId: 'label' },
            {
              columnId: ['flooded_female_pop_2024', 'flooded_male_pop_2024'],
              chartConfigId: 'x',
            },
          ]}
          graphSettings={{
            graphTitle: 'Affected Population by Gender and Age Groups',
            graphDescription: 'Top 20 most affected upazilas',
            leftMargin: 132,
            padding: '16px 32px 16px 16px',
            backgroundColor: '#FAFAFA',
            topMargin: 32,
            height: 666,
            colorDomain: ['Women', 'Men', 'Youth', 'Adults', 'Elderly'],
            showValues: false,
            tooltip: `<div class="padding-05">
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px; width: 340px;">
              <h6 class="undp-typography margin-bottom-00">{{d.data.shapeName}}</h6>
              <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <div style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #757AF0; margin-right: 5px;"></span>
                  <span>Women</span>
                </div>
                <div class="bold">{{d.data.flooded_female_pop_2024}}</div>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <div style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #02A38A; margin-right: 5px;"></span>
                  <span>Men</span>
                </div>
                <div class="bold">{{d.data.flooded_male_pop_2024}}</div>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <div style="display: flex; align-items: center;">
                  <span>Difference</span>
                </div>
                <div class="bold">XX%</div>
              </div>
            </div>
          </div>`,
          }}
        />
      </div>
    </div>
  );
}

export default AppPopulation;
