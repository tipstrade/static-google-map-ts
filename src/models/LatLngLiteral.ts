/** Represents a location similar to Google's LatLngLiteral. */
export interface LatLngLiteral {
  /** The latitude of the location. */
  lat: number;
  /** The longitude of the location. */
  lng: number;
}

/** Represents a location similar to Google's LatLng object. */
export interface LatLng {
  /** The latitude of the location. */
  lat(): number;
  /** The longitude of the location. */
  lng(): number;
}
