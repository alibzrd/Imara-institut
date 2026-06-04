"use client";

import { useState, useMemo } from "react";
import { calculatePrice, formatPrice } from "@/lib/pricing";
import type { PlaceInfo, PriceResult, ClientType, DriverMode } from "@/types";

export interface UseSimulatorReturn {
  // Geo
  placeFrom: PlaceInfo | null;
  placeTo: PlaceInfo | null;
  distanceKm: number | null;
  isLoadingDistance: boolean;
  distanceError: string | null;
  // Price
  result: PriceResult | null;
  priceFormatted: string | null;
  // UI choices
  clientType: ClientType | null;
  driverMode: DriverMode | null;
  hasPassengers: boolean | null;
  // Setters
  setPlaceFrom: (place: PlaceInfo | null) => void;
  setPlaceTo: (place: PlaceInfo | null) => void;
  setDistanceKm: (km: number | null) => void;
  setIsLoadingDistance: (v: boolean) => void;
  setDistanceError: (msg: string | null) => void;
  setClientType: (t: ClientType | null) => void;
  setDriverMode: (m: DriverMode | null) => void;
  setHasPassengers: (v: boolean | null) => void;
  reset: () => void;
}

export function useSimulator(): UseSimulatorReturn {
  const [placeFrom, _setPlaceFrom] = useState<PlaceInfo | null>(null);
  const [placeTo, _setPlaceTo] = useState<PlaceInfo | null>(null);
  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [isLoadingDistance, setIsLoadingDistance] = useState(false);
  const [distanceError, setDistanceError] = useState<string | null>(null);
  const [clientType, setClientType] = useState<ClientType | null>(null);
  const [driverMode, setDriverMode] = useState<DriverMode | null>(null);
  const [hasPassengers, setHasPassengers] = useState<boolean | null>(null);

  const setPlaceFrom = (place: PlaceInfo | null) => {
    _setPlaceFrom(place);
    setDistanceKm(null);
    setDistanceError(null);
  };

  const setPlaceTo = (place: PlaceInfo | null) => {
    _setPlaceTo(place);
    setDistanceKm(null);
    setDistanceError(null);
  };

  const result = useMemo<PriceResult | null>(() => {
    if (distanceKm === null) return null;
    return calculatePrice(distanceKm);
  }, [distanceKm]);

  const priceFormatted = result ? formatPrice(result.price) : null;

  const reset = () => {
    _setPlaceFrom(null);
    _setPlaceTo(null);
    setDistanceKm(null);
    setDistanceError(null);
    setClientType(null);
    setDriverMode(null);
    setHasPassengers(null);
  };

  return {
    placeFrom,
    placeTo,
    distanceKm,
    isLoadingDistance,
    distanceError,
    result,
    priceFormatted,
    clientType,
    driverMode,
    hasPassengers,
    setPlaceFrom,
    setPlaceTo,
    setDistanceKm,
    setIsLoadingDistance,
    setDistanceError,
    setClientType,
    setDriverMode,
    setHasPassengers,
    reset,
  };
}
