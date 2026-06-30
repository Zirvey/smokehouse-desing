"use client";

import { useEffect, useRef } from "react";
import { burgersMapStyle } from "@/lib/burgersMapStyle";
import { branches } from "@/lib/locations";
import { GOOGLE_MAPS_API_KEY } from "@/lib/map";

type BranchesMapGoogleProps = {
  interactive: boolean;
};

type GoogleMapInstance = {
  fitBounds: (bounds: unknown, padding?: number) => void;
  setOptions: (options: Record<string, unknown>) => void;
};

function createMarkerElement(label: string) {
  const el = document.createElement("div");
  el.className = "branch-map-marker";
  el.innerHTML = `<span class="branch-map-marker__pin" aria-hidden="true"></span><span class="branch-map-marker__label">${label}</span>`;
  return el;
}

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (window.google?.maps) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const callbackName = "__smokehouseGmapsInit";
    const win = window as unknown as Record<string, () => void>;

    win[callbackName] = () => {
      resolve();
      delete win[callbackName];
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}`;
    script.async = true;
    script.onerror = () => reject(new Error("Google Maps failed to load"));
    document.head.appendChild(script);
  });
}

export function BranchesMapGoogle({ interactive }: BranchesMapGoogleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<GoogleMapInstance | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!GOOGLE_MAPS_API_KEY || !container) return;

    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;

    const initMap = () => {
      if (cancelled || mapRef.current || !window.google?.maps || container.offsetWidth === 0) return;

      const googleMaps = window.google.maps;
      const bounds = new googleMaps.LatLngBounds();
      for (const branch of branches) {
        bounds.extend({ lat: branch.lat, lng: branch.lng });
      }

      const map = new googleMaps.Map(container, {
        center: bounds.getCenter(),
        zoom: 13,
        styles: burgersMapStyle,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: interactive ? "auto" : "none",
        backgroundColor: "#0a0a0a",
        clickableIcons: false,
      });

      map.fitBounds(bounds, 56);
      mapRef.current = map;

      for (const branch of branches) {
        const content = createMarkerElement(branch.name);
        const position = { lat: branch.lat, lng: branch.lng };
        const infoWindow = new googleMaps.InfoWindow({
          content: `<div class="branch-map-popup"><strong>${branch.name}</strong><br>${branch.address}<br><a href="${branch.maps}" target="_blank" rel="noopener noreferrer">Navigace →</a></div>`,
        });

        const overlay = new googleMaps.OverlayView();
        overlay.onAdd = () => {
          overlay.getPanes()?.overlayMouseTarget.appendChild(content);
        };
        overlay.draw = () => {
          const point = overlay.getProjection().fromLatLngToDivPixel(position);
          if (!point) return;
          content.style.position = "absolute";
          content.style.left = `${point.x}px`;
          content.style.top = `${point.y}px`;
        };
        overlay.onRemove = () => {
          content.remove();
        };
        overlay.setMap(map);

        content.style.cursor = "pointer";
        content.addEventListener("click", () => {
          infoWindow.open({ map, position });
        });
      }
    };

    loadGoogleMaps(GOOGLE_MAPS_API_KEY)
      .then(() => {
        if (cancelled) return;

        resizeObserver = new ResizeObserver(() => {
          if (mapRef.current) return;
          initMap();
        });
        resizeObserver.observe(container);
        initMap();
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      mapRef.current = null;
      container.replaceChildren();
    };
  }, []);

  useEffect(() => {
    mapRef.current?.setOptions({
      gestureHandling: interactive ? "auto" : "none",
    });
  }, [interactive]);

  return <div ref={containerRef} className="branch-map-canvas branch-map-canvas--google h-full w-full" />;
}
