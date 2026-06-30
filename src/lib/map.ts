export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

export const HAS_GOOGLE_MAPS = Boolean(GOOGLE_MAPS_API_KEY);

const STADIA_API_KEY = process.env.NEXT_PUBLIC_STADIA_API_KEY;

const CARTO_DARK_TILES =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

const STADIA_TILES = STADIA_API_KEY
  ? `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${STADIA_API_KEY}`
  : null;

/** Leaflet fallback when Google Maps key is not set. */
export const MAP_TILES = STADIA_TILES ?? CARTO_DARK_TILES;

export const MAP_TILE_SUBDOMAINS = STADIA_TILES ? undefined : "abcd";

export const MAP_ATTRIBUTION = STADIA_TILES
  ? '&copy; <a href="https://stadiamaps.com/" target="_blank" rel="noopener noreferrer">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank" rel="noopener noreferrer">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
  : '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>';
