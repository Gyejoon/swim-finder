declare namespace kakao.maps {
  class Map {
    constructor(container: HTMLElement, options: MapOptions);
    setCenter(latlng: LatLng): void;
    setZoom(level: number): void;
    getCenter(): LatLng;
    getZoom(): number;
    setLevel(level: number): void;
  }

  class LatLng {
    constructor(lat: number, lng: number);
    getLat(): number;
    getLng(): number;
  }

  class Marker {
    constructor(options: MarkerOptions);
    setMap(map: Map | null): void;
    getPosition(): LatLng;
  }

  interface MapOptions {
    center: LatLng;
    level: number;
  }

  interface MarkerOptions {
    position: LatLng;
    map?: Map;
  }

  interface Event {
    addListener(target: Marker | Map, type: string, handler: () => void): void;
  }

  const event: Event;
  function load(callback: () => void): void;
}

declare global {
  interface Window {
    kakao: {
      maps: typeof kakao.maps;
    }
  }
}

export = kakao;
export as namespace kakao; 