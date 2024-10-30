import React from 'react';
import ReactDOM from 'react-dom/client';
import AppFloodedArea from './AppFloodedArea';
import AppCropland from './AppCropland';
import AppPopulation from './AppPopulation';
import AppInfrastructure from './AppInfrastructure';
import AppPopulationFull from './AppPopulationFull';

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
