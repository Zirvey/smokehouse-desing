export const branches = [
  {
    name: "Klimentská",
    address: "Klimentská 1215/26, Praha 1",
    phone: "+420 725 532 876",
    lat: 50.0919447,
    lng: 14.4306465,
    maps: "https://www.google.com/maps/search/?api=1&query=Klimentsk%C3%A1+1215%2F26+Praha+1",
  },
  {
    name: "Italská",
    address: "Italská 25, Praha 2",
    phone: "+420 776 318 662",
    lat: 50.0786557,
    lng: 14.4365742,
    maps: "https://www.google.com/maps/search/?api=1&query=Italsk%C3%A1+25+Praha+2",
  },
  {
    name: "Ortenova náměstí",
    address: "Ortenova nám. 1631/16a, Praha 7",
    phone: "+420 727 862 120",
    lat: 50.1091186,
    lng: 14.4503941,
    maps: "https://www.google.com/maps/search/?api=1&query=Ortenovo+n%C3%A1m%C4%9Bst%C3%AD+1631%2F16a+Praha+7",
  },
] as const;

export const branchImages = {
  klimentska: "klimentska",
  italska: "italska",
  ortenovo: "ortenovo",
} as const;
