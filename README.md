# static-google-map-ts

A strongly typed URL builder for Google Maps Static.

# Overview

This is designed to be [mostly] compatible with the [static-google-map](https://github.com/DaddyWarbucks/static-google-map) package, but is written
entirely in TypeScript. To reduce dependencies, it doesn't have implement asynchronous `asyncStaticMapUrl` method, however it supports
[Encoded Polyline Algorithm Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). See [Paths](#paths)

## Installation

```
npm install static-google-map-ts
```

## Basic Usage

```ts
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

## Reference

Documentation isn't unavailable yet, however the properties usage is described in the [Maps Static API Documentation](https://developers.google.com/maps/documentation/maps-static/start#introduction). JSDoc comments are also provided for all types and interfaces.

### Parameter types

Most properties should be self explanatory, however some are Union types:

- `AnchorType` - Can be any of the following
- * a string containing an [anchor](https://developers.google.com/maps/documentation/maps-static/start#CustomIcons) ("left", "top", etc)
- * a string containing an x,y point ("16, 21")
- * an `Anchor` interface `{x:16, y:21}`
- `ColorType` - Can be any of the following
- * a string from the [set of colors](https://developers.google.com/maps/documentation/maps-static/start#PathStyles) ("black", "brown" etc)
- * a 24-bit RGB ("0xaabbcc") or 32-bit RGBA ("0xaabbccff") hex string
- * a number
- `LocationType` - Can be any of the following
- * a string cotnaining a place
- * a string containing a position, ("51.75, -1")
- * a `LatLng` interface, as used by the Google Maps API
- * a `LatLngLiteral` interface, as used by the Google Maps API
- `SizeType` - Can be any of the following
- * a string containing a size ("600x400")
- * a `Size` interface `{width: 600, height: 400}`

### Paths

The `Path` interface accepts both an array of `LocationType` objects or a string containing [Encoded Polyline Algorithm Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). 

#### Usage alongside the Google Directions API

``` ts
new google.maps.DirectionsService().route({
  origin: "Dublin",
  destination: "Limerick",
  travelMode: google.maps.TravelMode.DRIVING,
}, (result, status) => {
  if (!result || status !== google.maps.DirectionsStatus.OK) {
    return;
  }

  // The overview_polyline contains a simplified route path and is already encoded
  const points = result.routes[0].overview_polyline;

  const url = staticMapUrl({
    key: "Your API Key",
    size: {width: 600, height: 400},
    paths: {
      points,
    },
  })

  console.log(url);
});
```
