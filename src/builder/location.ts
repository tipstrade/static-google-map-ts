import { LocationType } from "../models";

function buildLocation(location: LocationType): string;
function buildLocation(location: LocationType | undefined): string | undefined;
function buildLocation(location: LocationType | undefined): string | undefined {
  if (typeof location === "string") {
    return location;
  } else if (location) {
    return `${location.lat},${location.lng}`;
  }

  return;
}

export {
  buildLocation,
} 
