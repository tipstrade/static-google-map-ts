import { LocationType } from "../models";

function buildLocation(location: LocationType): string;
function buildLocation(location: LocationType | undefined): string | undefined;
function buildLocation(location: LocationType | undefined): string | undefined {
  if (!location) {
    return;
  } else if (typeof location === "string") {
    return location;
  }

  const lat = typeof location.lat === "number" ? location.lat : location.lat();
  const lng = typeof location.lng === "number" ? location.lng : location.lng();

  return `${lat},${lng}`;
}

export {
  buildLocation,
} 
