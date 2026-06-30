declare global {
  interface Window {
    google?: {
      maps: {
        Map: new (element: HTMLElement, options: Record<string, unknown>) => GoogleMapInstance;
        LatLngBounds: new () => {
          extend: (latLng: { lat: number; lng: number }) => void;
          getCenter: () => { lat: () => number; lng: () => number };
        };
        InfoWindow: new (options?: { content?: string }) => {
          open: (options: { map: GoogleMapInstance; position?: { lat: number; lng: number } }) => void;
          close: () => void;
        };
        OverlayView: new () => GoogleOverlayView;
      };
    };
  }
}

type GoogleMapInstance = {
  fitBounds: (bounds: unknown, padding?: number) => void;
  setOptions: (options: Record<string, unknown>) => void;
};

type GoogleOverlayView = {
  setMap: (map: GoogleMapInstance | null) => void;
  getPanes: () => { overlayMouseTarget: HTMLElement } | null;
  getProjection: () => {
    fromLatLngToDivPixel: (latLng: { lat: number; lng: number }) => { x: number; y: number } | null;
  };
  onAdd: () => void;
  draw: () => void;
  onRemove: () => void;
};

export {};
