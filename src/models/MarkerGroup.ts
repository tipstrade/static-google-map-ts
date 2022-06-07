import { AnchorType, ColorType, LocationType, MarkerSizeType, ScaleType } from "./Types";

export interface MarkerGroup {
  /** Specifies the size of marker */
  size?: MarkerSizeType;
  /** Specifies a 24-bit color */
  color?: ColorType;
  /** The URL to the custom icon. */
  iconURL?: string;
  /** Specifies a single uppercase alphanumeric character from the set {A-Z, 0-9}. */
  label?: string;
  /** The scale of the marker. */
  scale?: ScaleType;
  /** The position where the marker icon is anchored. */
  anchor?: AnchorType;
  /** The locations of all the markers. */
  location: LocationType | LocationType[];
}
