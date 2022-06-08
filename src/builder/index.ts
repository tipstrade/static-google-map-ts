import { GoogleMapImage, LocationType, MarkerGroup, Path, SizeType } from "../models";
import { buildLocation } from "./location";
import { buildMarker } from "./marker";
import { buildPath } from "./path";

const BaseUrl = "https://maps.googleapis.com/maps/api/staticmap";

function addParm(parms: [string, string][], key: string, value: string | number | undefined): void {
  if (value === undefined) {
    return;
  } else if (typeof value === "number") {
    value = `${value}`;
  }

  parms.push([key, value]);
}

function addMarkers(parms: [string, string][], markers: MarkerGroup | MarkerGroup[] | undefined) {
  if (Array.isArray(markers)) {
    markers.forEach((x) => {
      addParm(parms, "markers", buildMarker(x));
    });
  } else if (markers) {
    addParm(parms, "markers", buildMarker(markers));
  }
}

function addPaths(parms: [string, string][], paths: Path | Path[] | undefined) {
  if (Array.isArray(paths)) {
    paths.forEach((x) => {
      addParm(parms, "path", buildPath(x));
    });
  } else if (paths) {
    addParm(parms, "path", buildPath(paths));
  }
}

function addVisible(parms: [string, string][], visible: LocationType | LocationType[] | undefined) {
  if (Array.isArray(visible)) {
    visible.forEach((x) => {
      addParm(parms, "visible", buildLocation(x));
    });
  } else if (visible) {
    addParm(parms, "visible", buildLocation(visible));
  }
}

function getSize(size: SizeType): string {
  if (typeof size === "string") {
    return size;
  }

  return `${size.width}x${size.height}`;
}

/**
 * Returns a string containing the URL to the Static Map generated with the specified options.
 * @param options The map options.
 * @returns A string containing the URL to the map.
 */
export const staticMapUrl = (options: GoogleMapImage): string => {
  const { center, zoom } = options;
  const parms: [string, string][] = [];

  // Location parameters
  addParm(parms, "center", buildLocation(center));
  addParm(parms, "zoom", zoom);

  // Map parameters
  addParm(parms, "size", getSize(options.size));
  addParm(parms, "scale", options.scale);
  addParm(parms, "format", options.format);
  addParm(parms, "maptype", options.mapType);
  addParm(parms, "language", options.language);
  addParm(parms, "region", options.region);

  // Feature parameters
  addParm(parms, "map_id", options.mapId);
  addMarkers(parms, options.markers);
  addPaths(parms, options.paths);
  addVisible(parms, options.visible);
  addParm(parms, "style", options.style);

  // Key and signature parameters
  addParm(parms, "key", options.key);
  addParm(parms, "signature", options.signature);

  return parms.reduce((uri, item, index) => {
    return uri
      + (index ? "&" : "?")
      + item[0] + "=" + encodeURIComponent(item[1])
      ;
  }, BaseUrl);
}
