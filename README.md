# ⚠️ ARCHIVED - This repository is no longer maintained

**This repository has been archived and is no longer actively maintained.**

This project was last updated on 2019-01-07 and is preserved for historical reference only.

- 🔒 **Read-only**: No new issues, pull requests, or changes will be accepted
- 📦 **No support**: This code is provided as-is with no support or updates
- 🔍 **For reference only**: You may fork this repository if you wish to continue development

For current CARTO projects and actively maintained repositories, please visit: https://github.com/CartoDB

---

# Using CARTO VL

## Working example
If you just want to try with this already configured webpack project just build the source and open the `index.html` file with:

    yarn
    yarn build
    open index.html

## With npm and webpack

If you want to replicate this configuration in another project, these are the steps we have followed here:

### Install CARTO VL
(>= v1.0.0)

    yarn add @carto/carto-vl

### Install mapbox-gl
(>= v0.50.0)

    yarn add mapbox-gl

Note: Check the installed version is the same as the one referenced at `index.html` stylesheet link for the .css

### Use it in your javascript code

```js
const mapboxgl = require('mapbox-gl');
const carto = require('@carto/carto-vl');
```
