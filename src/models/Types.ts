import { Anchor } from "./Anchor";
import { LatLng, LatLngLiteral } from "./LatLngLiteral";
import { Size } from "./Size";

/**
 * An anchor position for a custom marker icon.
 * @see https://developers.google.com/maps/documentation/maps-static/start#MarkerLocations
 * @description Can be a string literal or an `Anchor` object.
 */
export type AnchorType = "left" | "right" | "center" | "topleft" | "topright" | "bottomleft" | "bottomright" | string | Anchor;

/**
 * A colour used for `MarkerGroup`, and `Path` objects.
 * @description Can be a color, or 24-bit number.
 */
export type ColorType = "black" | "brown" | "green" | "purple" | "yellow" | "blue" | "gray" | "orange" | "red" | "white" | number | string;

/** The possible image formats. */
export type ImageFormatType = "png" | "png8" | "png32" | "gif" | "jpg" | "jpg-baseline";

/**
 * A location.
 * @description Can be a string literal containing coordinates ("51,-1") or a place, a `LatLng` object or a `LatLngLiteral` object.
 */
export type LocationType = string | LatLngLiteral | LatLng;

/** The possible map types. */
export type MapType = "roadmap" | "satellite" | "terrain" | "hybrid";

/** The possible markers sizes. */
export type MarkerSizeType = "tiny" | "mid" | "small" | "normal";

/** The possible map scales. */
export type ScaleType = "1" | "2" | 1 | 2;

/** A size.
 * @description Can be a string literal containing a size ("600x400") or a `Size` object.
 */
export type SizeType = string | Size;
