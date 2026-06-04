// ─── Grille tarifaire ────────────────────────────────────────────────
export const PRICE_PER_KM_SHORT = 0.95; // ≤ 275 km
export const PRICE_PER_KM_LONG = 0.88;  // > 275 km
export const KM_THRESHOLD = 275;
export const MINIMUM_FARE = 50;
export const NIGHT_SURCHARGE_RATE = 0.2;

// Frais de déplacement du chauffeur (péages, carburant, transport)
// sont TOUJOURS à la charge du client, non inclus dans ce tarif.

// Remplacer par le vrai numéro WhatsApp (sans + ni espaces)
export const WHATSAPP_NUMBER = "33600000000";

export function isNightSurcharge(date: Date = new Date()): boolean {
  const hour = date.getHours();
  const day = date.getDay(); // 0 = dimanche
  return hour >= 22 || hour < 6 || day === 0;
}

export function getRatePerKm(distanceKm: number): number {
  return distanceKm > KM_THRESHOLD ? PRICE_PER_KM_LONG : PRICE_PER_KM_SHORT;
}

export function calculatePrice(
  distanceKm: number,
  date: Date = new Date()
): { price: number; hasSurcharge: boolean; ratePerKm: number } {
  const ratePerKm = getRatePerKm(distanceKm);
  const base = Math.max(distanceKm * ratePerKm, MINIMUM_FARE);
  const hasSurcharge = isNightSurcharge(date);
  const price =
    Math.round(base * (hasSurcharge ? 1 + NIGHT_SURCHARGE_RATE : 1) * 100) / 100;
  return { price, hasSurcharge, ratePerKm };
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(price);
}

export interface WhatsAppOptions {
  driverMode?: "sans-voiture" | "avec-voiture";
  hasPassengers?: boolean;
}

export function buildWhatsAppLink(
  cityFrom: string,
  cityTo: string,
  distanceKm: number,
  price: number,
  options: WhatsAppOptions = {}
): string {
  const driver =
    options.driverMode === "avec-voiture"
      ? "un chauffeur avec son véhicule (service VTC)"
      : "un chauffeur pour conduire mon véhicule (convoyage)";
  const passengers =
    options.hasPassengers === true
      ? "La voiture transportera des passagers."
      : options.hasPassengers === false
      ? "La voiture sera vide."
      : "";
  const text =
    `Bonjour, je souhaite réserver ${driver} pour un trajet de ${cityFrom} vers ${cityTo} (${distanceKm} km). ` +
    `${passengers ? passengers + " " : ""}` +
    `Estimation affichée : ${price}€. ` +
    `Je prends en charge les frais de déplacement du chauffeur (péages, carburant, transport).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildProWhatsAppLink(): string {
  const text =
    "Bonjour, je souhaite obtenir un devis Rent Driver pour une mise à disposition professionnelle (un ou plusieurs jours). Pourriez-vous me contacter pour discuter de mes besoins ?";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
