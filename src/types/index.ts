export interface SimulatorForm {
  cityFrom: string;
  cityTo: string;
  distanceKm: string;
}

export interface PriceResult {
  price: number;
  hasSurcharge: boolean;
  ratePerKm: number;
}

export interface PlaceInfo {
  label: string;  // nom court (ex: "Paris")
  value: string;  // nom complet pour WhatsApp (ex: "Paris, Île-de-France, France")
  lon: number;
  lat: number;
}

export type ClientType = "particulier" | "professionnel";
export type DriverMode = "sans-voiture" | "avec-voiture";
