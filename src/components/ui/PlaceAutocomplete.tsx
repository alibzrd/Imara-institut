"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MapPin, Loader2 } from "lucide-react";
import type { PlaceInfo } from "@/types";

interface MapboxFeature {
  text: string;
  place_name: string;
  center: [number, number];
}

interface Props {
  placeholder: string;
  onSelect: (place: PlaceInfo) => void;
  onClear: () => void;
}

export default function PlaceAutocomplete({ placeholder, onSelect, onClear }: Props) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<PlaceInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const fetchSuggestions = useCallback(
    async (q: string) => {
      if (!q.trim() || q.length < 2 || !token || token === "pk.ton_token_mapbox_copie_ici") return;
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(q)}.json?types=place&language=fr&limit=5&access_token=${token}`
        );
        const data = await res.json();
        const places: PlaceInfo[] = (data.features ?? []).map((f: MapboxFeature) => ({
          label: f.text,
          value: f.place_name,
          lon: f.center[0],
          lat: f.center[1],
        }));
        setSuggestions(places);
        setIsOpen(true);
      } catch {
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    },
    [token]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onClear();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (val.length >= 2) {
      debounceRef.current = setTimeout(() => fetchSuggestions(val), 300);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (place: PlaceInfo) => {
    setQuery(place.label);
    setSuggestions([]);
    setIsOpen(false);
    onSelect(place);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => suggestions.length > 0 && setIsOpen(true)}
          placeholder={placeholder}
          autoComplete="off"
          className="input-dark w-full px-4 py-3 rounded-xl text-sm pr-10"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {isLoading ? (
            <Loader2 size={14} className="animate-spin" style={{ color: "#A1E3F9" }} />
          ) : (
            <MapPin size={14} style={{ color: "rgba(161,227,249,0.35)" }} />
          )}
        </div>
      </div>

      {isOpen && suggestions.length > 0 && (
        <div
          style={{
            backgroundColor: "#050B18",
            border: "1px solid rgba(161,227,249,0.2)",
            zIndex: 50,
          }}
          className="absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-2xl"
        >
          {suggestions.map((place, i) => (
            <button
              key={i}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSelect(place)}
              style={{
                borderBottom:
                  i < suggestions.length - 1
                    ? "1px solid rgba(161,227,249,0.06)"
                    : "none",
              }}
              className="w-full text-left px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-[rgba(161,227,249,0.06)] transition-colors flex items-center gap-2.5"
            >
              <MapPin size={12} style={{ color: "#A1E3F9", flexShrink: 0 }} />
              <span className="truncate">{place.value}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
