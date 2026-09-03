# 3D Tree Placement on Map

This project is a Cesium-based web application that displays a map and places 3D tree items at specific geographic locations. It combines map visualization with 3D model rendering to create a realistic scene where trees can be positioned on the terrain.

## Features

- Interactive map viewer using Cesium
- 3D tree models placed on map coordinates
- Marker and location-based visualization
- Real-world geospatial positioning
- Lightweight front-end setup for quick map rendering

## Screenshot
<img width="1917" height="911" alt="image" src="https://github.com/user-attachments/assets/c99b75a6-de5d-4b46-8585-c40fbaea31ae" />



## Project Purpose

The goal of this project is to showcase how 3D items such as trees can be placed and displayed on a map at real-world locations. This is useful for urban planning, landscaping, simulation, and map-based visualization prototypes.

## Live Demo

- Deployment: https://cisum-mapping.vercel.app

## Project Structure

- `index.html` — Main HTML entry point
- `css/style.css` — Styling for the page and layout
- `js/index.js` — Application bootstrap and map logic
- `js/CesiumFun.js` — Cesium-related functions
- `js/cesiumConfig.js` — Cesium configuration
- `js/coordinates.js` — Location/coordinate handling
- `data/trees.geojson` — GeoJSON data for tree locations
- `glbData/` — 3D model assets

## Run Locally

1. Open the project folder in a browser-friendly local server environment.
2. Start a local web server in the project directory.
3. Open the browser and navigate to the local server URL.

Example using a simple local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

This project is intended as a map visualization example for placing 3D tree items in real-world locations using Cesium and GeoJSON data.
