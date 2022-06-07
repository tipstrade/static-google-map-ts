import { Path } from "../models";
import { buildColor } from "./color";
import { buildLocation } from "./location";

export function buildPath(path: Path): string {
  const { weight, color, fillColor, geodesic, points } = path;
  const parts: string[] = [];

  if (weight !== undefined) {
    parts.push(`weight:${weight}`);
  }
  if (color) {
    parts.push(`color:${buildColor(color)}`);
  }
  if (fillColor) {
    parts.push(`fillcolor:${buildColor(fillColor)}`);
  }
  if (geodesic !== undefined) {
    parts.push(`geodesic:${geodesic}`);
  }

  if (typeof points === "string") {
    parts.push(`enc:${points}`);
  } else {
    points.forEach((x) => {
      parts.push(buildLocation(x));
    });
  }

  return parts.join("|");
}
