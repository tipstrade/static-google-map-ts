import { ColorType, LocationType } from "./Types";


export interface Path {
  /** Specifies the thickness of the path in pixels. */
  weight?: string | number;
  /** Specifieds the color of the path. */
  color?: ColorType;
  /** The fill color of the path. */
  fillColor?: ColorType;
  /** Indicates that the requested path should be interpreted as a geodesic line that follows the curvature of the earth. */
  geodesic?: boolean;
  /**
   * The list of points making up the path.
   * @description Can be an array of `LocationType` objects or a string containing an encoded polyline representation of the path.
   * @see https://developers.google.com/maps/documentation/utilities/polylinealgorithm
   */
  points: LocationType[] | string;
}
