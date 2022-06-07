import { MarkerGroup } from "../models";
import { buildAnchor } from "./anchor";
import { buildColor } from "./color";
import { buildLocation } from "./location";

export function buildMarker(marker: MarkerGroup): string {
  const { size, color, label, scale, iconURL, anchor, location } = marker;
  const parts: string[] = [];

  if (size) {
    parts.push(`size:${size}`);
  }
  if (color !== undefined) {
    parts.push(`color:${buildColor(color)}`);
  }
  if (label) {
    parts.push(`label:${label[0].toLocaleUpperCase()}`);
  }
  if (scale) {
    parts.push(`scale:${scale}`);
  }
  if (iconURL) {
    parts.push(`icon:${encodeURIComponent(iconURL)}`);

    if (anchor) {
      parts.push(`anchor:${buildAnchor(anchor)}`);
    }
  }

  if (Array.isArray(location)) {
    location.forEach((x) => {
      parts.push(buildLocation(x));
    });
  } else if (location) {
    parts.push(buildLocation(location));
  }

  return parts.join("|");
}
