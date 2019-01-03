const mapboxgl = require('mapbox-gl');
const carto = require('@carto/carto-vl');

const map = new mapboxgl.Map({
  container: 'map',
  style: carto.basemaps.voyager,
  center: [0, 40],
  zoom: 4
});

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');


carto.setDefaultAuth({
  user: 'cartovl',
  apiKey: 'default_public' /* use the proper API_KEY when loading your datasets */
});


const spainCitiesSource = new carto.source.SQL(`
    SELECT *
    FROM ne_10m_populated_places_simple
    WHERE adm0name = \'Spain\'
  `);
const spainCitiesViz = new carto.Viz(`
    width: 6
    color: rgb(237, 76, 89)
    strokeWidth: 1
    strokeColor: rgb(255, 255, 255)
  `);
const spainCitiesLayer = new carto.Layer('spainCitiesLayer', spainCitiesSource, spainCitiesViz);
spainCitiesLayer.addTo(map, 'watername_ocean');


const europeCountriesSource = new carto.source.Dataset('ne_adm0_europe');
const europeCountriesViz = new carto.Viz(`
    color: rgba(127, 110, 186, 0.8)
  `);
const europeCountriesLayer = new carto.Layer('europeCountriesLayer', europeCountriesSource, europeCountriesViz);
europeCountriesLayer.addTo(map, 'spainCitiesLayer');
