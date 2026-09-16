export const SITE = {
  name: "Toor Industries",
  tagline: "Sign of Quality",
  phone: "+92 300 6126063",
  phoneRaw: "+923006126063",
  email: "info@toorindustries.com",
  address: {
    street: "31-622 Greenwood Street",
    city: "Sialkot",
    province: "Punjab",
    country: "Pakistan",
  },
  maps: {
    place: "https://www.google.com/maps/place/Toor+Industries/@32.5,74.3,15z",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.5!2d74.3!3d32.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDMwJzAwLjAiTiA3NMKwMTgnMDAuMCJF!5e0!3m2!1sen!2spk!4v1",
  },
  whatsapp: (text?: string) =>
    `https://wa.me/${"923006126063"}${text ? `?text=${encodeURIComponent(text)}` : ""}`,
  social: {
    facebook: "https://facebook.com/toorindustries",
    linkedin: "https://linkedin.com/company/toorindustries",
    instagram: "https://instagram.com/toorindustries",
  },
  catalogue: {
    veterinary: "/Catalogue/Vetinary.pdf",
    equestrian: "/Catalogue/Equestrian.pdf",
  },
} as const;

export const COMPANY = {
  founded: 1960,
  founder: "Ch. Zulfiqar Ali Toor",
  location: "Sialkot, Punjab, Pakistan",
  stats: [
    { value: "65+", label: "Years Experience" },
    { value: "40+", label: "Countries Served" },
    { value: "500+", label: "Products" },
    { value: "1000+", label: "Trusted Partners" },
  ],
} as const;
