const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string): string {
  return `${basePath}${path}`;
}

export const images = {
  hero: asset("/images/hero.jpg"),
  menu: asset("/images/menu.jpg"),
  reservation: asset("/images/reservation.jpg"),
  eshop: asset("/images/eshop.jpg"),
  loyaltyPoster: asset("/images/loyalty-poster.jpg"),
  about: asset("/locations/italska.jpg"),
  features: asset("/locations/klimentska.jpg"),
  logo: asset("/logo.png"),
  locations: {
    klimentska: asset("/locations/klimentska.jpg"),
    italska: asset("/locations/italska.jpg"),
    ortenovo: asset("/locations/ortenovo-namesti.jpg"),
  },
} as const;
