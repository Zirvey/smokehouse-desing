export const SMOKEHOUSE_MAP_EMBED =
  "https://www.google.com/maps/d/u/0/embed?mid=1lQSUDP1DFpci6FVtA9y8yoqVL2Po3LM&ehbc=2E312F&noprof=1";

export const branches = [
  {
    name: "Klimentská",
    address: "Klimentská 26, Praha 1",
    phone: "+420 725 532 876",
    maps: "https://www.google.com/maps/place/Smokehouse+Shisha+Lounge+%26+Bar/@50.091961,14.4284329,17z",
  },
  {
    name: "Italská",
    address: "Italská 25, Praha 2",
    phone: "+420 776 318 662",
    maps: "https://www.google.com/maps?cid=3851837454387933409",
  },
  {
    name: "Ortenovo náměstí",
    address: "Ortenovo nám. 1631/16a, Praha 7",
    phone: "+420 727 862 120",
    maps: "https://www.google.com/maps/place/16a,+Ortenovo+n%C3%A1m.+1631%2F16a,+170+00+Praha+7-Hole%C5%A1ovice/@50.1091219,14.447819,17z",
  },
] as const;

export const branchImages = {
  klimentska: "klimentska",
  italska: "italska",
  ortenovo: "ortenovo",
} as const;
