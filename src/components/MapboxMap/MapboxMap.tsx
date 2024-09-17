"use client";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import "mapbox-gl/dist/mapbox-gl.css";

type MapboxMapProps = {
  className?: string;
};
const MapboxMap: React.FC<MapboxMapProps> = ({ className }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map>();

  useEffect(() => {
    if (!mapContainerRef.current) {
      return;
    }

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      // style: "mapbox://styles/mapbox/satellite-v9",
      style: "mapbox://styles/mapbox/streets-v12",
      projection: "globe",
      // center: [137.915, 36.259],
      center: [-91.1267787, -0.4497914],
      zoom: 9,
    });

    mapRef.current.on("style.load", () => {
      mapRef.current?.setFog({});
    });

    return () => mapRef.current?.remove();
  }, []);

  return (
    <div ref={mapContainerRef} className={cn("w-screen h-screen", className)} />
  );
};

export default MapboxMap;
