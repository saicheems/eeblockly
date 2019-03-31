declare namespace google.maps {
  enum ControlPosition {
    TOP_RIGHT = 3
  }
  class ImageMapType implements MapType {}
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
  interface MapType {}
  class MVCArray<T> {
    clear(): void;
    push(elem: T): number;
    setAt(i: number, elem: T): void;
  }
}
