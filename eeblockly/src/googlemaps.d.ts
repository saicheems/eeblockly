declare namespace google.maps {
  enum ControlPosition {
    TOP_RIGHT = 3
  }
  interface MapType {}
  class ImageMapType implements MapType {
    constructor(opts: ImageMapOptions);
  }
  interface ImageMapOptions {
    getTileUrl(coord: Point, zoom: number): string;
    tileSize: Size;
  }
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  class Map {
    constructor(mapDiv: Element, opts?: google.maps.MapOptions);
    controls: MVCArray<Node>[];
    overlayMapTypes: MVCArray<MapType>;
  }
  interface MapOptions {
    center?: google.maps.LatLngLiteral;
    disableDefaultUI?: boolean;
    zoom?: number;
  }
  class MVCArray<T> {
    clear(): void;
    push(elem: T): number;
    setAt(i: number, elem: T): void;
  }
  class Point {
    x: number;
    y: number;
  }
  class Size {
    constructor(
      width: number,
      height: number,
      widthUnit?: string,
      hegihtUnit?: string
    );
  }
}
