/** Places GBS works now, and places it can serve.
 *  The globe, the geography copy, and scripts/check-geography.mjs all read this file.
 *  Natural Earth map units use ISO 249 for metropolitan France. French Guiana is 254.
 */

export const activeCountries = [
  { id: 860, name: "Uzbekistan", note: "Current work, based in Tashkent." },
  { id: 398, name: "Kazakhstan", note: "Current work, including the Taraz water company." },
  { id: 417, name: "Kyrgyzstan", note: "Current work in Osh and Jalal-Abad." },
  { id: 762, name: "Tajikistan", note: "Current work around Khujand and the northern cities." },
];

const EU = [
  40, 56, 100, 191, 196, 203, 208, 233, 246, 249, 276, 300, 348, 372, 380, 428, 440, 442, 470, 528,
  616, 620, 642, 703, 705, 724, 752,
];

export const servicePlaces = [
  { name: "the European Union", isos: EU },
  { name: "the United Kingdom", units: ["ENG", "SCT", "WLS", "NIR"] },
  { name: "Norway", admins: ["NOR"] },
  { name: "Iceland", isos: [352] },
  { name: "Greenland", isos: [304] },
  { name: "Canada", isos: [124] },
  { name: "the United States", isos: [840] },
  { name: "South Korea", isos: [410] },
];

export const frenchGuiana = { iso: 254, unit: "GUF", name: "French Guiana" };

export const globePlaces = [
  { id: "central", name: "Central Asia", note: "Current work", lon: 66, lat: 42 },
  { id: "europe", name: "Europe", note: "Able to serve", lon: 5, lat: 58 },
  { id: "america", name: "Canada & the United States", note: "Able to serve", lon: -96, lat: 48 },
  { id: "korea", name: "South Korea", note: "Able to serve", lon: 128, lat: 36 },
];

const capableIsos = new Set(servicePlaces.flatMap((place) => place.isos || []));

export function serviceSentence() {
  const names = servicePlaces.map((place) => place.name);
  const last = names[names.length - 1];
  return `${names.slice(0, -1).join(", ")}, and ${last}`;
}

export function featureKey(properties) {
  return `${properties.unit || "x"}-${properties.iso || "x"}-${properties.name || "country"}`;
}

export function featureIsActive(properties) {
  const iso = Number(properties.iso);
  return activeCountries.some((country) => country.id === iso);
}

export function featureIsCapable(properties) {
  const iso = Number(properties.iso);
  const name = properties.name || "";
  const unit = properties.unit || "";
  const admin = properties.admin || "";
  const subregion = properties.subregion || "";
  if (iso === frenchGuiana.iso || unit === frenchGuiana.unit || name === frenchGuiana.name) return false;
  if (subregion === "South America") return false;
  if (featureIsActive(properties)) return false;
  if (capableIsos.has(iso)) return true;
  if (admin === "GBR" && ["ENG", "SCT", "WLS", "NIR"].includes(unit)) return true;
  if (admin === "NOR") return true;
  return false;
}

export function featureNote(properties) {
  if (featureIsActive(properties)) {
    return activeCountries.find((country) => country.id === Number(properties.iso)).note;
  }
  if (featureIsCapable(properties)) return "GBS can serve clients here.";
  return "Outside the present practice.";
}
