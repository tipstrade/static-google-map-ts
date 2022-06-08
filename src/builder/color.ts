import { ColorType } from "../models";

export function buildColor(color: ColorType): string {
  if (typeof color === "string") {
    return color;
  }

  // Pad to 8 chararcters if 32-bit (RGBA), otherwise 6
  const padTo = color > 0xffffff ? 8 : 6;

  return "0x" + color.toString(16).padStart(padTo, "0");
}
