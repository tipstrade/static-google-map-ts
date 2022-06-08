import { MarkerGroup } from "./MarkerGroup";
import { Path } from "./Path";
import { ImageFormatType, LocationType, MapType, ScaleType, SizeType } from "./Types";

/** Represents the options used for creating a Static Maps URL. */
export interface GoogleMapImage {
  /**
   * Defines the center of the map, equidistant from all edges of the map.
   * @description Can be either a literal string, a `LatLng` object or a `LatLngLiteral` object
   */
  center?: LocationType;
  /** Defines the zoom level of the map. */
  zoom?: number;

  /**
   * The dimensions of the image in pixels.
   * @description Can be either a literal string ("600x400") or a `Size` object.
   */
  size: SizeType;
  /** The scale of the image. */
  scale?: ScaleType;
  /** The format of the image to return. */
  format?: ImageFormatType;
  /** The type of map to return. */
  mapType?: MapType;
  /** The language to use for the text on the map. */
  language?: string;
  /** Defines the appropriate borders to display, based on geo-political sensitivities. */
  region?: string;

  /** The identifier for a specific map. */
  mapId?: string;
  /**
   * The markers to attach to the image at specified locations.
   * @description Can be either a single `MarkerGroup` object or an array of `MarkerGroup` objects.
   */
  markers?: MarkerGroup | MarkerGroup[];
  /**
   * A single path of two or more connected points to overlay on the image at specified locations.
   * @description Can be either a single `Path` object or an array of `Path` objects.
   */
  paths?: Path | Path[];
  /**
   * One or more locations that should remain visible on the map, though no markers or other indicators will be displayed.
   * @description Can be a single `LocationType` or an array of `LocationType` objects.
   */
  visible?: LocationType | LocationType[];
  /** Defines a custom style to alter the presentation of a specific feature (roads, parks, and other features) of the map. */
  style?: string;

  /** The API key. */
  key: string;
  /** A digital signature used to verify that any site generating requests using your API key is authorized to do so. */
  signature?: string;
}
