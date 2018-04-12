# Using CARTO VL

## With npm and webpack

### Install CARTO VL 

    yarn add @carto/carto-vl

### Install mapbox-gl
(Currently you need a custom fork)

    yarn add @carto/mapbox-gl

### Use it in your javascript code


```js
const mapboxgl = require('@carto/mapbox-gl');
const carto = require('@carto/carto-vl');
```


## Working example
Build the source and open the `index.html` file.

    yarn
    yarn build
    open index.html