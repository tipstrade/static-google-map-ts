import { ColorType } from "../models";

export function buildColor(color: ColorType): string {
  if (typeof color === "string") {
    return color;
  }

  return "0x" + color.toString(16).padStart(6, "0");
}
