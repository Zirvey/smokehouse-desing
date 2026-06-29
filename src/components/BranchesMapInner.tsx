"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { branches } from "@/lib/locations";
import { MAP_ATTRIBUTION, MAP_TILES } from "@/lib/map";

type BranchesMapInnerProps = {
  interactive: boolean;
};

function createMarkerIcon(label: string) {
  return L.divIcon({
    className: "branch-map-marker",
    html: `<span class="branch-map-marker__pin" aria-hidden="true"></span><span class="branch-map-marker__label">${label}</span>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
}

export function BranchesMapInner({ interactive }: BranchesMapInnerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true,
    });

    L.tileLayer(MAP_TILES, {
      attribution: MAP_ATTRIBUTION,
      maxZoom: 20,
    }).addTo(map);

    const bounds = L.latLngBounds([]);

    for (const branch of branches) {
      L.marker([branch.lat, branch.lng], { icon: createMarkerIcon(branch.name) })
        .addTo(map)
        .bindPopup(
          `<div class="branch-map-popup"><strong>${branch.name}</strong><br>${branch.address}<br><a href="${branch.maps}" target="_blank" rel="noopener noreferrer">Navigace →</a></div>`,
        );
      bounds.extend([branch.lat, branch.lng]);
    }

    map.fitBounds(bounds, { padding: [56, 56], maxZoom: 14 });
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (interactive) {
      map.scrollWheelZoom.enable();
    } else {
      map.scrollWheelZoom.disable();
    }
  }, [interactive]);

  return <div ref={containerRef} className="branch-map-canvas h-full w-full" />;
}
