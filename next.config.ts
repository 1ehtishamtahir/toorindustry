import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "toorindustries.com",
      },
    ],
  },
  async redirects() {
    return [
      // Veterinary category .html redirects
      {
        source: "/products/veterinary/animals-identificator.html",
        destination: "/products/veterinary/animals-identificator",
        permanent: true,
      },
      {
        source: "/products/veterinary/dehorning-equipment.html",
        destination: "/products/veterinary/dehorning-equipment",
        permanent: true,
      },
      {
        source: "/products/veterinary/castration-equipments.html",
        destination: "/products/veterinary/castration-equipments",
        permanent: true,
      },
      {
        source: "/products/veterinary/manual-automatic-syringe.html",
        destination: "/products/veterinary/manual-automatic-syringe",
        permanent: true,
      },
      {
        source: "/products/veterinary/veterinary-kits.html",
        destination: "/products/veterinary/veterinary-kits",
        permanent: true,
      },
      {
        source: "/products/veterinary/bolus-guns.html",
        destination: "/products/veterinary/bolus-guns",
        permanent: true,
      },
      {
        source: "/products/veterinary/a-i-equipments.html",
        destination: "/products/veterinary/a-i-equipments",
        permanent: true,
      },
      {
        source: "/products/veterinary/bull-holders.html",
        destination: "/products/veterinary/bull-holders",
        permanent: true,
      },
      {
        source: "/products/veterinary/dairy-equipments.html",
        destination: "/products/veterinary/dairy-equipments",
        permanent: true,
      },
      {
        source: "/products/veterinary/dresses.html",
        destination: "/products/veterinary/dresses",
        permanent: true,
      },
      {
        source: "/products/veterinary/hog-catchers.html",
        destination: "/products/veterinary/hog-catchers",
        permanent: true,
      },
      {
        source: "/products/veterinary/hoof-and-claw-instruments.html",
        destination: "/products/veterinary/hoof-and-claw-instruments",
        permanent: true,
      },
      {
        source: "/products/veterinary/measuring-equipments.html",
        destination: "/products/veterinary/measuring-equipments",
        permanent: true,
      },
      {
        source: "/products/veterinary/mouth-gages.html",
        destination: "/products/veterinary/mouth-gages",
        permanent: true,
      },
      {
        source: "/products/veterinary/obstetric-instruments.html",
        destination: "/products/veterinary/obstetric-instruments",
        permanent: true,
      },
      {
        source: "/products/veterinary/shearing-equipments.html",
        destination: "/products/veterinary/shearing-equipments",
        permanent: true,
      },
      {
        source: "/products/veterinary/surgical-instruments.html",
        destination: "/products/veterinary/surgical-instruments",
        permanent: true,
      },
      {
        source: "/products/veterinary/vaccinators-and-drenchers.html",
        destination: "/products/veterinary/vaccinators-and-drenchers",
        permanent: true,
      },
      // Equestrian category .html redirects
      {
        source: "/products/equestrian/saddles.html",
        destination: "/products/equestrian/saddles",
        permanent: true,
      },
      {
        source: "/products/equestrian/bits.html",
        destination: "/products/equestrian/bits",
        permanent: true,
      },
      {
        source: "/products/equestrian/gloves.html",
        destination: "/products/equestrian/gloves",
        permanent: true,
      },
      {
        source: "/products/equestrian/rugs.html",
        destination: "/products/equestrian/rugs",
        permanent: true,
      },
      {
        source: "/products/equestrian/saddle-pads.html",
        destination: "/products/equestrian/saddle-pads",
        permanent: true,
      },
      {
        source: "/products/equestrian/girths.html",
        destination: "/products/equestrian/girths",
        permanent: true,
      },
      {
        source: "/products/equestrian/stirrups.html",
        destination: "/products/equestrian/stirrups",
        permanent: true,
      },
      {
        source: "/products/equestrian/bandages.html",
        destination: "/products/equestrian/bandages",
        permanent: true,
      },
      // Top-level page .html redirects
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/catalogue.html",
        destination: "/catalogue",
        permanent: true,
      },
      {
        source: "/factory.html",
        destination: "/factory",
        permanent: true,
      },
      {
        source: "/gallery.html",
        destination: "/gallery",
        permanent: true,
      },
      // Old product URL pattern (numeric IDs) - map to new slug-based URLs
      // These are examples; actual old numeric IDs would need to be mapped individually

      // Fix catalogue typo redirect
      {
        source: "/catalogue/Vetinary.pdf",
        destination: "/Catalogue/Veterinary.pdf",
        permanent: true,
      },
      {
        source: "/Catalogue/Vetinary.pdf",
        destination: "/Catalogue/Veterinary.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
