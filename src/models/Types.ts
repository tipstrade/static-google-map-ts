import { Anchor } from "./Anchor";
import { LatLng, LatLngLiteral } from "./LatLngLiteral";
import { Size } from "./Size";

export type AnchorType = "left" | "right" | "center" | "topleft" | "topright" | "bottomleft" | "bottomright" | string | Anchor;

export type ColorType = "black" | "brown" | "green" | "purple" | "yellow" | "blue" | "gray" | "orange" | "red" | "white" | number | string;

export type ImageFormatType = "png" | "png8" | "png32" | "gif" | "jpg" | "jpg-baseline";

export type LocationType = string | LatLngLiteral | LatLng;

export type MapType = "roadmap" | "satellite" | "terrain" | "hybrid";

export type MarkerSizeType = "tiny" | "mid" | "small" | "normal";

export type ScaleType = "1" | "2" | 1 | 2;

export type SizeType = string | Size;
