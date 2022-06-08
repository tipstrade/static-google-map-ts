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
      addParm(parms, "paths", buildPath(x));
    });
  } else if (paths) {
    addParm(parms, "paths", buildPath(paths));
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

function buildQuery(parms: [string, string][]): string {
  const encoded = parms.map(([name, value]) => {
    return `${name}=${encodeURIComponent(value)}`;
  });

  return encoded.join("&");
}

function getSize(size: SizeType): string {
  if (typeof size === "string") {
    return size;
  }

  return `${size.width}x${size.height}`;
}

export const buildMap = (options: Omit<GoogleMapImage, "directions">, directions?: never): string => {
  if (directions) {
    throw new Error("directions are not supported.");
  }

  const { center, zoom, markers } = options;
  const hasMarkers = (Array.isArray(markers) && markers.length) || markers;

  /** Center and zoom are required if there are no markers. */
  if (!hasMarkers) {
    if (!center) {
      throw new Error("Center is required if no markers are set.");
    }

    if (!zoom) {
      throw new Error("Zoom is required if no markers are set.");
    }
  }

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

  return BaseUrl + "?" + buildQuery(parms);
}
