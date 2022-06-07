import { AnchorType } from "../models";

function buildAnchor(anchor: AnchorType): string;
function buildAnchor(anchor: AnchorType | undefined): string | undefined;
function buildAnchor(anchor: AnchorType | undefined): string | undefined {
  if (typeof anchor === "string") {
    return anchor;
  } else if (anchor) {
    return `${anchor.x},${anchor.y}`;
  }

  return;
}

export {
  buildAnchor,
} 
