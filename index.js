const mapboxgl = require('@carto/mapbox-gl');
const carto = require('@carto/carto-vl');

const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    center: [0, 40],
    zoom: 4,
    dragRotate: false
});

carto.setDefaultAuth({
    user: 'cartogl',
    apiKey: 'YOUR_API_KEY'
});

const spainCitiesSource = new carto.source.SQL(`
    SELECT *
    FROM ne_10m_populated_places_simple
    WHERE adm0name = \'Spain\'
  `);
const spainCitiesStyle = new carto.Style(`
    width: 6
    color: rgb(237, 76, 89)
    strokeWidth: 1
    strokeColor: rgb(255, 255, 255)
  `);
const spainCitiesLayer = new carto.Layer('spainCitiesLayer', spainCitiesSource, spainCitiesStyle);

const europeCountriesSource = new carto.source.Dataset(`
    ne_adm0_europe
  `);
const europeCountriesStyle = new carto.Style(`
    color: rgba(127, 110, 186, 0.8)
  `);
const europeCountriesLayer = new carto.Layer('europeCountriesLayer', europeCountriesSource, europeCountriesStyle);

spainCitiesLayer.addTo(map, 'watername_ocean');
europeCountriesLayer.addTo(map, 'spainCitiesLayer');