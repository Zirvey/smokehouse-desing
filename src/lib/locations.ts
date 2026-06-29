export const branches = [
  {
    name: "Klimentská",
    address: "Klimentská 26, Praha 1",
    phone: "+420 725 532 876",
    lat: 50.0919576,
    lng: 14.4306216,
    maps: "https://www.google.com/maps/place/Smokehouse+Shisha+Lounge+%26+Bar/@50.091961,14.4284329,17z",
  },
  {
    name: "Italská",
    address: "Italská 25, Praha 2",
    phone: "+420 776 318 662",
    lat: 50.075167,
    lng: 14.435842,
    maps: "https://www.google.com/maps?cid=3851837454387933409",
  },
  {
    name: "Ortenovo náměstí",
    address: "Ortenovo nám. 1631/16a, Praha 7",
    phone: "+420 727 862 120",
    lat: 50.1091185,
    lng: 14.4503939,
    maps: "https://www.google.com/maps/place/16a,+Ortenovo+n%C3%A1m.+1631%2F16a,+170+00+Praha+7-Hole%C5%A1ovice/@50.1091219,14.447819,17z",
  },
] as const;

/** Public OpenStreetMap embed — works without Google account (My Maps is private). */
export function getBranchesMapEmbedUrl(): string {
  const lats = branches.map((b) => b.lat);
  const lngs = branches.map((b) => b.lng);
  const padding = 0.012;
  const bbox = [
    Math.min(...lngs) - padding,
    Math.min(...lats) - padding,
    Math.max(...lngs) + padding,
    Math.max(...lats) + padding,
  ].join(",");

  const markers = branches.map((b) => `marker=${b.lat},${b.lng}`).join("&");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&${markers}`;
}

export const branchImages = {
  klimentska: "klimentska",
  italska: "italska",
  ortenovo: "ortenovo",
} as const;
