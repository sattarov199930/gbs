import { readFileSync } from "node:fs";
import {
  activeCountries,
  featureIsCapable,
  frenchGuiana,
  servicePlaces,
  serviceSentence,
} from "../src/data/geography.js";
import { countries } from "../src/data/content.js";
import { enquiryMailto } from "../src/lib/sendEnquiry.js";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const sentence = serviceSentence();
for (const place of servicePlaces) {
  assert(sentence.includes(place.name), `Service sentence is missing ${place.name}`);
}
assert(!/Riga|Boston|office/i.test(sentence), "Service sentence names an office");
assert(!sentence.includes("French Guiana"), "Service sentence includes French Guiana");
assert(servicePlaces.length === 8, "The able-to-serve count should stay at eight named places");

assert(
  countries.map((country) => country.name).join("|") === activeCountries.map((country) => country.name).join("|"),
  "Geography cards and the current-work list have drifted"
);

const home = readFileSync(new URL("../src/pages/Home.jsx", import.meta.url), "utf8");
const locations = readFileSync(new URL("../src/pages/Locations.jsx", import.meta.url), "utf8");
const globe = readFileSync(new URL("../src/components/Globe.jsx", import.meta.url), "utf8");
assert(home.includes("serviceSentence("), "Home no longer uses the shared service sentence");
assert(locations.includes("serviceSentence("), "Geography page no longer uses the shared service sentence");
assert(globe.includes("featureIsCapable"), "Globe no longer uses the shared color rule");
for (const source of [home, locations, globe]) {
  assert(!/Riga|Boston|EU office|North American/.test(source), "An office claim returned to a page");
}

const map = JSON.parse(readFileSync(new URL("../public/geo/map-units.json", import.meta.url), "utf8"));
const byName = (name) => map.features.find((feature) => feature.properties.name === name);
const guiana = byName("French Guiana");
const france = byName("France");
const england = byName("England");
const norway = byName("Norway");
const brazil = byName("Brazil");
assert(guiana, "French Guiana is missing from the map");
assert(Number(guiana.properties.iso) === frenchGuiana.iso, "French Guiana no longer has ISO 254");
assert(featureIsCapable(guiana.properties) === false, "French Guiana would be colored as a place GBS can serve");
assert(featureIsCapable(france.properties) === true, "Metropolitan France would not be colored");
assert(featureIsCapable(england.properties) === true, "England would not be colored");
assert(featureIsCapable(norway.properties) === true, "Norway would not be colored");
assert(featureIsCapable(brazil.properties) === false, "Brazil would be colored");
for (const name of ["Canada", "Greenland", "Iceland", "South Korea", "United States of America"]) {
  assert(featureIsCapable(byName(name).properties), `${name} would not be colored`);
}
const coloredSouthAmerica = map.features.filter(
  (feature) => feature.properties.subregion === "South America" && featureIsCapable(feature.properties)
);
assert(coloredSouthAmerica.length === 0, `South America would be colored: ${coloredSouthAmerica.map((feature) => feature.properties.name).join(", ")}`);

const mailto = enquiryMailto({
  to: "info@gbs.uz",
  subject: "Enquiry",
  name: "A Client",
  email: "client@example.com",
  message: "A short assignment note for the test.",
  fields: { interest: "Water" },
});
assert(mailto.startsWith("mailto:info@gbs.uz?"), "Enquiry is not addressed to info@gbs.uz");
assert(decodeURIComponent(mailto).includes("client@example.com"), "Enquiry reply address was lost");
assert(decodeURIComponent(mailto).includes("assignment"), "Enquiry message was lost");

console.log("Geography and enquiry checks passed.");
