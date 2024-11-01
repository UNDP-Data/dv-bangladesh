import React from 'react';
import ReactDOM from 'react-dom/client';
import AppFloodedArea from './AppFloodedArea';
import AppCropland from './AppCropland';
import AppPopulation from './AppPopulation';
import AppInfrastructure from './AppInfrastructure';
import AppPopulationFull from './AppPopulationFull';
import AppPopulationMap from './AppPopulationMap';
import AppUpazilasDashboard from './AppUpazilasDashboard';
import AppInfrastructureFull from './AppInfrastructureFull';
import AppInfrastructureCharts from './AppInfrastructureCharts';
import AppCroplandFull from './AppCroplandFull';
import AppMapsAll from './AppMapsAll';
import AppMapsPopulation from './AppMapsPopulation';
import AppMapsInfrastructure from './AppMapsInfrastructure';
import AppMapsCropland from './AppMapsCropland';

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

const vizPopulation = getEl('[data-viz-population]');
if (vizPopulation) {
  const rootEmbed = ReactDOM.createRoot(vizPopulation);
  rootEmbed.render(
    <React.StrictMode>
      <AppPopulation />
    </React.StrictMode>,
  );
}
const vizPopulationMap = getEl('[data-viz-population-map]');
if (vizPopulationMap) {
  const rootEmbed = ReactDOM.createRoot(vizPopulationMap);
  rootEmbed.render(
    <React.StrictMode>
      <AppPopulationMap />
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
const vizFloodedArea = getEl('[data-viz-flooded-area]');
if (vizFloodedArea) {
  const rootEmbed = ReactDOM.createRoot(vizFloodedArea);
  rootEmbed.render(
    <React.StrictMode>
      <AppFloodedArea />
    </React.StrictMode>,
  );
}
const vizInfrastructure = getEl('[data-viz-infrastructure]');
if (vizInfrastructure) {
  const rootEmbed = ReactDOM.createRoot(vizInfrastructure);
  rootEmbed.render(
    <React.StrictMode>
      <AppInfrastructure />
    </React.StrictMode>,
  );
}
const vizUpazilasDashboard = getEl('[data-viz-upazilas-dashboard]');
if (vizUpazilasDashboard) {
  const rootEmbed = ReactDOM.createRoot(vizUpazilasDashboard);
  rootEmbed.render(
    <React.StrictMode>
      <AppUpazilasDashboard />
    </React.StrictMode>,
  );
}
const vizInfrastructureCharts = getEl('[data-viz-infrastructure-charts]');
if (vizInfrastructureCharts) {
  const rootEmbed = ReactDOM.createRoot(vizInfrastructureCharts);
  rootEmbed.render(
    <React.StrictMode>
      <AppInfrastructureCharts />
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
const vizMapsAll = getEl('[data-viz-maps-all]');
if (vizMapsAll) {
  const rootEmbed = ReactDOM.createRoot(vizMapsAll);
  rootEmbed.render(
    <React.StrictMode>
      <AppMapsAll />
    </React.StrictMode>,
  );
}
const vizMapsPopulation = getEl('[data-viz-maps-population]');
if (vizMapsPopulation) {
  const rootEmbed = ReactDOM.createRoot(vizMapsPopulation);
  rootEmbed.render(
    <React.StrictMode>
      <AppMapsPopulation />
    </React.StrictMode>,
  );
}
const vizMapsCropland = getEl('[data-viz-maps-cropland]');
if (vizMapsCropland) {
  const rootEmbed = ReactDOM.createRoot(vizMapsCropland);
  rootEmbed.render(
    <React.StrictMode>
      <AppMapsCropland />
    </React.StrictMode>,
  );
}
const vizMapsInfrastructure = getEl('[data-viz-maps-infrastructure]');
if (vizMapsInfrastructure) {
  const rootEmbed = ReactDOM.createRoot(vizMapsInfrastructure);
  rootEmbed.render(
    <React.StrictMode>
      <AppMapsInfrastructure />
    </React.StrictMode>,
  );
}
