/**
 * Snazzy Maps "108 burgers" adapted for Smokehouse:
 * https://snazzymaps.com/style/285732/108-burgers
 */
import type { MapStyleRule } from "@/lib/mapStyleTypes";

export const burgersMapStyle: MapStyleRule[] = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ saturation: 20 }, { color: "#e8e8e8" }, { lightness: 8 }],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "on" }, { color: "#0a0a0a" }, { lightness: 10 }],
  },
  { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#000000" }, { lightness: 20 }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 20 }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 21 }],
  },
  { featureType: "poi.attraction", elementType: "labels.text", stylers: [{ visibility: "on" }] },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ color: "#ca8a04" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#d4a853" }, { lightness: 0 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 18 }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [{ color: "#ca8a04" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f0f0f0" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.stroke",
    stylers: [
      { saturation: 100 },
      { lightness: -33 },
      { gamma: 10 },
      { visibility: "on" },
      { color: "#202020" },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 16 }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 19 }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 17 }],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#565656" }],
  },
];
