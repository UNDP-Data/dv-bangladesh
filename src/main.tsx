import React from 'react';
import ReactDOM from 'react-dom/client';
import AppCropland from './AppCropland';
import AppPopulationFull from './AppPopulationFull';
import AppInfrastructureFull from './AppInfrastructureFull';
import AppCroplandFull from './AppCroplandFull';
import AppPopulationTop20 from './AppPopulationTop20';
import AppGeohubCompareMap from './AppGeohubCompareMap';
import AppDashboard from './AppUpazilasDashboard';
import AppInfrastructureTop20 from './AppInfrastructureTop20';
import AppGeohubMapAll from './AppMapsAll';
import AppCroplandMap from './AppCroplandMap';
import AppInfrastructureMap from './AppInfrastructureMap';
import AppInfrastructureTable from './AppInfrastructureTable';
import AppCroplandTable from './AppCroplandTable';
import AppPopulationTable from './AppPopulationTable';

const getEl = (embedSelector: string) => {
  if (typeof embedSelector === 'string') {
    const el = document.querySelector(embedSelector);
    if (!el) {
      // eslint-disable-next-line no-console
      console.error(`No div matching selector "${embedSelector}"`);
      return null;
    }
    return el;
  }
  return embedSelector;
};

const vizPopulationTop20 = getEl('[data-viz-population-top20]');
if (vizPopulationTop20) {
  const rootEmbed = ReactDOM.createRoot(vizPopulationTop20);
  rootEmbed.render(
    <React.StrictMode>
      <AppPopulationTop20 />
    </React.StrictMode>,
  );
}

const vizPopulationFull = getEl('[data-viz-population-full]');
if (vizPopulationFull) {
  const rootEmbed = ReactDOM.createRoot(vizPopulationFull);
  rootEmbed.render(
    <React.StrictMode>
      <AppPopulationFull />
    </React.StrictMode>,
  );
}
const vizCropland = getEl('[data-viz-cropland]');
if (vizCropland) {
  const rootEmbed = ReactDOM.createRoot(vizCropland);
  rootEmbed.render(
    <React.StrictMode>
      <AppCropland />
    </React.StrictMode>,
  );
}
const vizCroplandFull = getEl('[data-viz-cropland-full]');
if (vizCroplandFull) {
  const rootEmbed = ReactDOM.createRoot(vizCroplandFull);
  rootEmbed.render(
    <React.StrictMode>
      <AppCroplandFull />
    </React.StrictMode>,
  );
}
const vizGeohubCompareMap = getEl('[data-viz-geohub-compare-map]');
if (vizGeohubCompareMap) {
  const rootEmbed = ReactDOM.createRoot(vizGeohubCompareMap);
  rootEmbed.render(
    <React.StrictMode>
      <AppGeohubCompareMap />
    </React.StrictMode>,
  );
}

const vizDashboard = getEl('[data-viz-dashboard]');
if (vizDashboard) {
  const rootEmbed = ReactDOM.createRoot(vizDashboard);
  rootEmbed.render(
    <React.StrictMode>
      <AppDashboard />
    </React.StrictMode>,
  );
}
const vizInfrastructureTop20 = getEl('[data-viz-infrastructure-top20]');
if (vizInfrastructureTop20) {
  const rootEmbed = ReactDOM.createRoot(vizInfrastructureTop20);
  rootEmbed.render(
    <React.StrictMode>
      <AppInfrastructureTop20 />
    </React.StrictMode>,
  );
}
const vizInfrastructureFull = getEl('[data-viz-infrastructure-full]');
if (vizInfrastructureFull) {
  const rootEmbed = ReactDOM.createRoot(vizInfrastructureFull);
  rootEmbed.render(
    <React.StrictMode>
      <AppInfrastructureFull />
    </React.StrictMode>,
  );
}
const vizGeohubMapAll = getEl('[data-viz-geohub-map-all]');
if (vizGeohubMapAll) {
  const rootEmbed = ReactDOM.createRoot(vizGeohubMapAll);
  rootEmbed.render(
    <React.StrictMode>
      <AppGeohubMapAll />
    </React.StrictMode>,
  );
}
const vizMapsPopulationTop20 = getEl('[data-viz-maps-population-top20]');
if (vizMapsPopulationTop20) {
  const rootEmbed = ReactDOM.createRoot(vizMapsPopulationTop20);
  rootEmbed.render(
    <React.StrictMode>
      <AppPopulationTop20 />
    </React.StrictMode>,
  );
}
const vizCroplandMap = getEl('[data-viz-cropland-map]');
if (vizCroplandMap) {
  const rootEmbed = ReactDOM.createRoot(vizCroplandMap);
  rootEmbed.render(
    <React.StrictMode>
      <AppCroplandMap />
    </React.StrictMode>,
  );
}
const vizInfrastructureMap = getEl('[data-viz-infrastructure-map]');
if (vizInfrastructureMap) {
  const rootEmbed = ReactDOM.createRoot(vizInfrastructureMap);
  rootEmbed.render(
    <React.StrictMode>
      <AppInfrastructureMap />
    </React.StrictMode>,
  );
}

const vizInfrastructureTable = getEl('[data-viz-infrastructure-table]');
if (vizInfrastructureTable) {
  const rootEmbed = ReactDOM.createRoot(vizInfrastructureTable);
  rootEmbed.render(
    <React.StrictMode>
      <AppInfrastructureTable />
    </React.StrictMode>,
  );
}
const vizCroplandTable = getEl('[data-viz-cropland-table]');
if (vizCroplandTable) {
  const rootEmbed = ReactDOM.createRoot(vizCroplandTable);
  rootEmbed.render(
    <React.StrictMode>
      <AppCroplandTable />
    </React.StrictMode>,
  );
}
const vizPopulationTable = getEl('[data-viz-population-table]');
if (vizPopulationTable) {
  const rootEmbed = ReactDOM.createRoot(vizPopulationTable);
  rootEmbed.render(
    <React.StrictMode>
      <AppPopulationTable />
    </React.StrictMode>,
  );
}
