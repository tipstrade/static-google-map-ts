# static-google-map-ts
A strongly typed URL builder for Google Maps Static.

# Overview
This is designed to be [mostly] compatible with the [static-google-map](https://github.com/DaddyWarbucks/static-google-map) package, but is written
entirely in TypeScript. To reduce dependencies, it doesn't have implement asynchronous `asyncStaticMapUrl` method, however it supports
[Encoded Polyline Algorithm Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). See 

## Installation
```
npm install static-google-map-ts
```

## Basic Usage
``` ts
import { staticMapUrl, GoogleMapImage } from "static-google-map-ts";

const options: GoogleMapImage = {
  key: "Your API Key",
  size: {width: 600, height: 600}, // Also accepts a string, eg. "600x600"
  zoom: 8,
  markers: {
    location: "TipsTrade,GBR", // Also accepts a google.maps.LatLng or google.maps.LatLngLiteral
},
const url = staticMapUrl(options);
```
