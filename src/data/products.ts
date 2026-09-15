export type ProductGroup = "veterinary" | "equestrian";

export type ProductCategory = {
  slug: string;
  name: string;
  group: ProductGroup;
  description: string;
  heroImage: string;
};

export type Product = {
  slug: string;
  sku: string;
  name: string;
  categorySlug: string;
  group: ProductGroup;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  images: string[];
};

export const veterinaryCategories: ProductCategory[] = [
  {
    slug: "animals-identificator",
    name: "Animals Identificator",
    group: "veterinary",
    description:
      "Professional-grade animal identification tools including ear tags, tattoo pliers, and numbering systems for livestock management.",
    heroImage: "/images/categories/veterinary-animals-identificator.jpg",
  },
  {
    slug: "dehorning-equipment",
    name: "Dehorning Equipment",
    group: "veterinary",
    description:
      "Complete range of dehorning tools including dehorning shears, hot iron dehorners, and cautery equipment for safe and efficient horn removal.",
    heroImage: "/images/categories/veterinary-dehorning.jpg",
  },
  {
    slug: "castration-equipments",
    name: "Castration Equipments",
    group: "veterinary",
    description:
      "Surgical and non-surgical castration instruments including emasculators, elastrator rings, and bloodless castration tools.",
    heroImage: "/images/categories/veterinary-castration.jpg",
  },
  {
    slug: "manual-automatic-syringe",
    name: "Manual & Automatic Syringe",
    group: "veterinary",
    description:
      "Precision veterinary syringes for vaccinations, injections, and medication delivery in livestock and companion animals.",
    heroImage: "/images/categories/veterinary-syringe.jpg",
  },
  {
    slug: "veterinary-kits",
    name: "Veterinary Kits",
    group: "veterinary",
    description:
      "Comprehensive veterinary instrument kits assembled for field use, containing essential tools for routine examinations and procedures.",
    heroImage: "/images/categories/veterinary-kits.jpg",
  },
  {
    slug: "bolus-guns",
    name: "Bolus Guns",
    group: "veterinary",
    description:
      "Durable bolus guns and pill dispensers designed for oral administration of tablets and capsules to cattle, sheep, and goats.",
    heroImage: "/images/categories/veterinary-bolus-guns.jpg",
  },
  {
    slug: "a-i-equipments",
    name: "A.I. Equipments",
    group: "veterinary",
    description:
      "Artificial insemination equipment including A.I. guns, catheters, straws, and reproductive management tools for dairy and beef operations.",
    heroImage: "/images/categories/veterinary-ai.jpg",
  },
  {
    slug: "bull-holders",
    name: "Bull Holders",
    group: "veterinary",
    description:
      "Heavy-duty bull holders, nose leads, and restraint equipment for safe handling of large livestock during veterinary procedures.",
    heroImage: "/images/categories/veterinary-bull-holders.jpg",
  },
  {
    slug: "dairy-equipments",
    name: "Dairy Equipments",
    group: "veterinary",
    description:
      "Complete dairy farming equipment including milking machines, udder care products, and milk testing supplies.",
    heroImage: "/images/categories/veterinary-dairy.jpg",
  },
  {
    slug: "dresses",
    name: "Dresses",
    group: "veterinary",
    description:
      "Veterinary protective clothing, surgical gowns, and professional attire for veterinary practitioners and farm staff.",
    heroImage: "/images/categories/veterinary-dresses.jpg",
  },
  {
    slug: "hog-catchers",
    name: "Hog Catchers",
    group: "veterinary",
    description:
      "Specialized pig catching and restraint tools designed for safe and efficient handling of hogs and swine.",
    heroImage: "/images/categories/veterinary-hog-catchers.jpg",
  },
  {
    slug: "hoof-and-claw-instruments",
    name: "Hoof and Claw Instruments",
    group: "veterinary",
    description:
      "Professional hoof trimming tools, hoof knives, nippers, and corrective devices for cattle, sheep, and equine hoof care.",
    heroImage: "/images/categories/veterinary-hoof.jpg",
  },
  {
    slug: "measuring-equipments",
    name: "Measuring Equipments",
    group: "veterinary",
    description:
      "Precision measuring instruments for livestock including scales, thermometers, calipers, and growth monitoring tools.",
    heroImage: "/images/categories/veterinary-measuring.jpg",
  },
  {
    slug: "mouth-gages",
    name: "Mouth Gages",
    group: "veterinary",
    description:
      "Mouth speculums, gagging tools, and oral examination instruments for veterinary dental and oral procedures.",
    heroImage: "/images/categories/veterinary-mouth-gages.jpg",
  },
  {
    slug: "obstetric-instruments",
    name: "Obstetric Instruments",
    group: "veterinary",
    description:
      "Veterinary obstetric tools including fetotomy knives, embryotomy wire, calving chains, and obstetric chains for difficult births.",
    heroImage: "/images/categories/veterinary-obstetric.jpg",
  },
  {
    slug: "shearing-equipments",
    name: "Shearing Equipments",
    group: "veterinary",
    description:
      "Professional sheep shearing equipment including electric shears, hand shears, and shearing accessories for wool harvesting.",
    heroImage: "/images/categories/veterinary-shearing.jpg",
  },
  {
    slug: "surgical-instruments",
    name: "Surgical Instruments",
    group: "veterinary",
    description:
      "Complete range of veterinary surgical instruments including scalpels, forceps, retractors, and suturing equipment for field and clinic use.",
    heroImage: "/images/categories/veterinary-surgical.jpg",
  },
  {
    slug: "vaccinators-and-drenchers",
    name: "Vaccinators and Drenchers",
    group: "veterinary",
    description:
      "Automatic vaccinators, drenching guns, and oral medication delivery systems for efficient herd health management.",
    heroImage: "/images/categories/veterinary-vaccinators.jpg",
  },
];

export const equestrianCategories: ProductCategory[] = [
  {
    slug: "saddles",
    name: "Saddles",
    group: "equestrian",
    description:
      "Handcrafted English and Western saddles designed for comfort, durability, and superior riding performance.",
    heroImage: "/images/categories/equestrian-saddles.jpg",
  },
  {
    slug: "bits",
    name: "Bits",
    group: "equestrian",
    description:
      "Precision-engineered horse bits including snaffle, curb, and pelham designs for effective communication and control.",
    heroImage: "/images/categories/equestrian-bits.jpg",
  },
  {
    slug: "gloves",
    name: "Gloves",
    group: "equestrian",
    description:
      "Premium riding gloves crafted for grip, comfort, and protection during training and competition.",
    heroImage: "/images/categories/equestrian-gloves.jpg",
  },
  {
    slug: "rugs",
    name: "Rugs",
    group: "equestrian",
    description:
      "Turnout rugs, stable blankets, and fly sheets designed to protect horses in all weather conditions.",
    heroImage: "/images/categories/equestrian-rugs.jpg",
  },
  {
    slug: "saddle-pads",
    name: "Saddle Pads",
    group: "equestrian",
    description:
      "Cushioned saddle pads and numnahs providing shock absorption and pressure distribution for horse comfort.",
    heroImage: "/images/categories/equestrian-saddle-pads.jpg",
  },
  {
    slug: "girths",
    name: "Girths",
    group: "equestrian",
    description:
      "Secure and comfortable girths in leather, synthetic, and elastic materials for reliable saddle attachment.",
    heroImage: "/images/categories/equestrian-girths.jpg",
  },
  {
    slug: "stirrups",
    name: "Stirrups",
    group: "equestrian",
    description:
      "Durable stirrup irons and safety stirrups engineered for rider stability and foot support.",
    heroImage: "/images/categories/equestrian-stirrups.jpg",
  },
  {
    slug: "bandages",
    name: "Bandages",
    group: "equestrian",
    description:
      "Polo wraps, stable bandages, and wound care wraps for equine leg protection and support.",
    heroImage: "/images/categories/equestrian-bandages.jpg",
  },
];

export const allCategories = [...veterinaryCategories, ...equestrianCategories];

export const products: Product[] = [
  {
    slug: "tattoo-pliers",
    sku: "T-102",
    name: "Tattoo Pliers",
    categorySlug: "animals-identificator",
    group: "veterinary",
    shortDescription: "Professional tattoo pliers for permanent animal identification.",
    description:
      "High-quality stainless steel tattoo pliers designed for permanent identification of livestock. Easy to use with clear, legible number imprinting. Available in various sizes to accommodate different animal species.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Type", value: "Manual" },
      { label: "Available Numbers", value: "0-9, A-Z" },
      { label: "Weight", value: "350g" },
    ],
    images: ["/images/products/tattoo-pliers.jpg"],
  },
  {
    slug: "dehorning-shears",
    sku: "T-201",
    name: "Dehorning Shears",
    categorySlug: "dehorning-equipment",
    group: "veterinary",
    shortDescription: "Heavy-duty shears for safe and efficient horn removal.",
    description:
      "Professional-grade dehorning shears constructed from hardened carbon steel. Ergonomic handles reduce fatigue during extended use. Sharp cutting edges ensure clean, precise cuts.",
    specs: [
      { label: "Material", value: "Carbon Steel" },
      { label: "Blade Length", value: "150mm" },
      { label: "Overall Length", value: "550mm" },
      { label: "Weight", value: "1.2kg" },
    ],
    images: ["/images/products/dehorning-shears.jpg"],
  },
  {
    slug: "emasculator",
    sku: "T-301",
    name: "Emasculator",
    categorySlug: "castration-equipments",
    group: "veterinary",
    shortDescription: "Bloodless castration tool for livestock.",
    description:
      "Precision-engineered emasculator for bloodless castration procedures. Features a crushing mechanism that ensures complete occlusion of the spermatic cord. Made from surgical-grade stainless steel.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Length", value: "250mm" },
      { label: "Jaw Width", value: "15mm" },
      { label: "Weight", value: "450g" },
    ],
    images: ["/images/products/emasculator.jpg"],
  },
  {
    slug: "automatic-vaccinator",
    sku: "T-401",
    name: "Automatic Vaccinator",
    categorySlug: "manual-automatic-syringe",
    group: "veterinary",
    shortDescription: "Self-refilling syringe for efficient mass vaccination.",
    description:
      "Automatic self-refilling syringe designed for rapid and accurate vaccination of large herds. Adjustable dosage settings from 0.5ml to 10ml. Comfortable grip reduces hand fatigue during extended use.",
    specs: [
      { label: "Capacity", value: "0.5ml - 10ml" },
      { label: "Material", value: "Anodized Aluminum" },
      { label: "Needle Fit", value: "Luer Lock" },
      { label: "Weight", value: "180g" },
    ],
    images: ["/images/products/automatic-vaccinator.jpg"],
  },
  {
    slug: "veterinary-instrument-kit",
    sku: "T-501",
    name: "Veterinary Instrument Kit",
    categorySlug: "veterinary-kits",
    group: "veterinary",
    shortDescription: "Comprehensive field kit for veterinary professionals.",
    description:
      "All-in-one veterinary instrument kit containing essential tools for field examinations and minor surgical procedures. Packed in a durable carrying case for easy transport.",
    specs: [
      { label: "Pieces", value: "22 Instruments" },
      { label: "Case Material", value: "Hard-shell EVA" },
      { label: "Instruments", value: "Scalpels, Forceps, Scissors, etc." },
      { label: "Weight", value: "2.5kg" },
    ],
    images: ["/images/products/veterinary-kit.jpg"],
  },
  {
    slug: "cattle-bolus-gun",
    sku: "T-601",
    name: "Cattle Bolus Gun",
    categorySlug: "bolus-guns",
    group: "veterinary",
    shortDescription: "Durable bolus gun for oral pill administration.",
    description:
      "Robust bolus gun designed for safe and easy administration of boluses and large tablets to cattle. Spring-loaded mechanism ensures accurate placement. Easy to clean and maintain.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Tube Diameter", value: "30mm" },
      { label: "Overall Length", value: "650mm" },
      { label: "Weight", value: "800g" },
    ],
    images: ["/images/products/bolus-gun.jpg"],
  },
  {
    slug: "ai-gun",
    sku: "T-701",
    name: "A.I. Gun",
    categorySlug: "a-i-equipments",
    group: "veterinary",
    shortDescription: "Precision artificial insemination gun for cattle.",
    description:
      "High-precision artificial insemination gun designed for accurate semen deposition. Compatible with standard straws. Calibrated dosage markings for consistent results.",
    specs: [
      { label: "Material", value: "Stainless Steel & Plastic" },
      { label: "Straw Size", value: "0.5ml / 0.25ml" },
      { label: "Length", value: "450mm" },
      { label: "Weight", value: "120g" },
    ],
    images: ["/images/products/ai-gun.jpg"],
  },
  {
    slug: "bull-nose-lead",
    sku: "T-801",
    name: "Bull Nose Lead",
    categorySlug: "bull-holders",
    group: "veterinary",
    shortDescription: "Heavy-duty nose lead for bull restraint.",
    description:
      "Strong and reliable bull nose lead made from galvanized steel cable with a comfortable plastic handle. Essential tool for safe bull handling and restraint during veterinary procedures.",
    specs: [
      { label: "Material", value: "Galvanized Steel Cable" },
      { label: "Cable Length", value: "1.5m" },
      { label: "Handle", value: "Ergonomic Plastic" },
      { label: "Weight", value: "650g" },
    ],
    images: ["/images/products/bull-nose-lead.jpg"],
  },
  {
    slug: "milking-cluster",
    sku: "T-901",
    name: "Milking Cluster",
    categorySlug: "dairy-equipments",
    group: "veterinary",
    shortDescription: "Efficient milking cluster for dairy operations.",
    description:
      "Complete milking cluster assembly designed for efficient and hygienic milk extraction. Compatible with most milking machines. Easy to disassemble for cleaning.",
    specs: [
      { label: "Material", value: "Silicone & Stainless Steel" },
      { label: "Capacity", value: "30L/min" },
      { label: "Teat Cup Size", value: "Standard" },
      { label: "Weight", value: "1.5kg" },
    ],
    images: ["/images/products/milking-cluster.jpg"],
  },
  {
    slug: "electric-shears",
    sku: "T-1001",
    name: "Electric Shears",
    categorySlug: "shearing-equipments",
    group: "veterinary",
    shortDescription: "Professional electric shears for sheep shearing.",
    description:
      "High-performance electric shears designed for fast and efficient wool removal. Powerful motor with cooling system for continuous operation. Interchangeable comb and cutter sets.",
    specs: [
      { label: "Power", value: "600W" },
      { label: "Speed", value: "2800 SPM" },
      { label: "Blade Material", value: "Carbon Steel" },
      { label: "Weight", value: "1.6kg" },
    ],
    images: ["/images/products/electric-shears.jpg"],
  },
  {
    slug: "hog-catcher",
    sku: "T-1004",
    name: "Hog Catcher",
    categorySlug: "hog-catchers",
    group: "veterinary",
    shortDescription: "Professional tool for safe pig restraint.",
    description:
      "Designed for safely catching and restraining pigs and hogs. Features a secure grip mechanism that minimizes stress to the animal and reduces risk of injury to the handler.",
    specs: [
      { label: "Material", value: "Steel & Rubber" },
      { label: "Jaw Opening", value: "200mm" },
      { label: "Handle Length", value: "800mm" },
      { label: "Weight", value: "1.8kg" },
    ],
    images: ["/images/products/hog-catcher.jpg"],
  },
  {
    slug: "hoof-trimming-knife",
    sku: "T-1101",
    name: "Hoof Trimming Knife",
    categorySlug: "hoof-and-claw-instruments",
    group: "veterinary",
    shortDescription: "Precision knife for hoof trimming procedures.",
    description:
      "Sharp, ergonomic hoof trimming knife designed for precise removal of excess hoof material. Hardened steel blade retains edge through extended use. Safety handle with anti-slip grip.",
    specs: [
      { label: "Material", value: "Hardened Steel" },
      { label: "Blade Length", value: "80mm" },
      { label: "Handle", value: "Anti-slip Rubber" },
      { label: "Weight", value: "150g" },
    ],
    images: ["/images/products/hoof-knife.jpg"],
  },
  {
    slug: "livestock-scale",
    sku: "T-1207",
    name: "Livestock Scale",
    categorySlug: "measuring-equipments",
    group: "veterinary",
    shortDescription: "Digital scale for accurate animal weight measurement.",
    description:
      "Heavy-duty digital livestock scale capable of weighing large animals up to 1000kg. Large platform with non-slip surface. LCD display with tare function and hold feature.",
    specs: [
      { label: "Capacity", value: "1000kg" },
      { label: "Platform Size", value: "1200mm x 800mm" },
      { label: "Accuracy", value: "±0.5kg" },
      { label: "Power", value: "Battery / AC Adapter" },
    ],
    images: ["/images/products/livestock-scale.jpg"],
  },
  {
    slug: "mouth-speculum",
    sku: "T-1308",
    name: "Mouth Speculum",
    categorySlug: "mouth-gages",
    group: "veterinary",
    shortDescription: "Stainless steel mouth speculum for oral examination.",
    description:
      "Professional mouth speculum designed to safely hold the animal's mouth open during dental and oral examinations. Available in multiple sizes for different animal species.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Sizes Available", value: "Small, Medium, Large" },
      { label: "Opening", value: "Adjustable 50-150mm" },
      { label: "Weight", value: "300g (Medium)" },
    ],
    images: ["/images/products/mouth-speculum.jpg"],
  },
  {
    slug: "calving-chains",
    sku: "T-1401",
    name: "Calving Chains",
    categorySlug: "obstetric-instruments",
    group: "veterinary",
    shortDescription: "Heavy-duty calving chains for assisted births.",
    description:
      "Strong calving chains designed for assisting difficult births in cattle. Made from high-tensile steel with smooth surface to minimize tissue damage. Includes handles for secure grip.",
    specs: [
      { label: "Material", value: "High-tensile Steel" },
      { label: "Chain Length", value: "1.2m" },
      { label: "Load Capacity", value: "500kg" },
      { label: "Includes", value: "2 Handles" },
    ],
    images: ["/images/products/calving-chains.jpg"],
  },
  {
    slug: "veterinary-scalpel-set",
    sku: "T-1501",
    name: "Veterinary Scalpel Set",
    categorySlug: "surgical-instruments",
    group: "veterinary",
    shortDescription: "Professional scalpel set for surgical procedures.",
    description:
      "Complete scalpel set including handles and interchangeable blades for various veterinary surgical procedures. Made from surgical-grade stainless steel for durability and easy sterilization.",
    specs: [
      { label: "Material", value: "Surgical Stainless Steel" },
      { label: "Pieces", value: "3 Handles, 10 Blades" },
      { label: "Blade Types", value: "#10, #11, #15, #20, #22" },
      { label: "Case", value: "Sterilization Tray" },
    ],
    images: ["/images/products/scalpel-set.jpg"],
  },
  {
    slug: "automatic-drencher",
    sku: "T-1601",
    name: "Automatic Drencher",
    categorySlug: "vaccinators-and-drenchers",
    group: "veterinary",
    shortDescription: "Self-dosing oral medication delivery gun.",
    description:
      "Automatic drenching gun for precise oral medication delivery to livestock. Adjustable dose settings with clear markings. Ergonomic trigger mechanism reduces hand fatigue.",
    specs: [
      { label: "Capacity", value: "60ml" },
      { label: "Material", value: "Stainless Steel & Plastic" },
      { label: "Dosage Range", value: "5ml - 60ml" },
      { label: "Weight", value: "350g" },
    ],
    images: ["/images/products/automatic-drencher.jpg"],
  },
  {
    slug: "dressage-saddle",
    sku: "TI-E-103",
    name: "Dressage Saddle",
    categorySlug: "saddles",
    group: "equestrian",
    shortDescription: "Premium dressage saddle with deep seat design.",
    description:
      "Handcrafted dressage saddle featuring a deep seat and extended flaps for optimal rider positioning. Made from premium European leather with wool-flocked panels for superior comfort.",
    specs: [
      { label: "Material", value: "Premium Leather" },
      { label: "Seat Sizes", value: "16\", 17\", 18\"" },
      { label: "Tree", value: "Flexible Spring Tree" },
      { label: "Weight", value: "6.5kg" },
    ],
    images: ["/images/products/dressage-saddle.jpg"],
  },
  {
    slug: "snaffle-bit",
    sku: "TI-E-205",
    name: "Snaffle Bit",
    categorySlug: "bits",
    group: "equestrian",
    shortDescription: "Precision-engineered stainless steel snaffle bit.",
    description:
      "High-quality stainless steel snaffle bit with smooth mouthpiece for gentle communication. Available in various ring styles including loose ring, eggbutt, and D-ring.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Mouthpiece", value: "Smooth / Jointed" },
      { label: "Thickness", value: "14mm / 16mm" },
      { label: "Ring Sizes", value: "55mm / 65mm" },
    ],
    images: ["/images/products/snaffle-bit.jpg"],
  },
  {
    slug: "riding-gloves",
    sku: "TI-E-306",
    name: "Riding Gloves",
    categorySlug: "gloves",
    group: "equestrian",
    shortDescription: "Premium leather riding gloves for all conditions.",
    description:
      "Supple leather riding gloves with reinforced palms for superior grip and durability. Touchscreen-compatible fingertips allow phone use without removing gloves. Available in multiple colors.",
    specs: [
      { label: "Material", value: "Full-grain Leather" },
      { label: "Sizes", value: "XS, S, M, L, XL" },
      { label: "Colors", value: "Black, Brown, White" },
      { label: "Feature", value: "Touchscreen Compatible" },
    ],
    images: ["/images/products/riding-gloves.jpg"],
  },
  {
    slug: "turnout-rug",
    sku: "TI-E-401",
    name: "Turnout Rug",
    categorySlug: "rugs",
    group: "equestrian",
    shortDescription: "Waterproof turnout rug for all-weather protection.",
    description:
      "Heavy-duty waterproof turnout rug designed to keep horses warm and dry in harsh weather conditions. Features adjustable surcingles, fillet string, and shoulder gussets for freedom of movement.",
    specs: [
      { label: "Material", value: "600D Ripstop Polyester" },
      { label: "Fill Weight", value: "200g / 300g / 400g" },
      { label: "Waterproof", value: "Yes (3000mm)" },
      { label: "Sizes", value: "4'6\" - 7'0\"" },
    ],
    images: ["/images/products/turnout-rug.jpg"],
  },
  {
    slug: "dressage-saddle-pad",
    sku: "TI-E-501",
    name: "Dressage Saddle Pad",
    categorySlug: "saddle-pads",
    group: "equestrian",
    shortDescription: "Quilted dressage pad with shock absorption.",
    description:
      "Premium quilted dressage saddle pad with high-density foam lining for shock absorption. Extended shape designed for dressage saddles. Available in a range of colors.",
    specs: [
      { label: "Material", value: "Cotton / Polyester" },
      { label: "Fill", value: "High-density Foam" },
      { label: "Shape", value: "Dressage Cut" },
      { label: "Colors", value: "Multiple Options" },
    ],
    images: ["/images/products/dressage-pad.jpg"],
  },
  {
    slug: "leather-girth",
    sku: "TI-E-601",
    name: "Leather Girth",
    categorySlug: "girths",
    group: "equestrian",
    shortDescription: "Premium leather girth with elastic inserts.",
    description:
      "Handcrafted leather girth with double elastic inserts for comfort and flexibility. Features stainless steel buckles and a contoured design that prevents rubbing.",
    specs: [
      { label: "Material", value: "Full-grain Leather" },
      { label: "Elastic", value: "Double-sided" },
      { label: "Buckles", value: "Stainless Steel Roller" },
      { label: "Lengths", value: "48cm - 76cm" },
    ],
    images: ["/images/products/leather-girth.jpg"],
  },
  {
    slug: "safety-stirrups",
    sku: "TI-E-706",
    name: "Safety Stirrups",
    categorySlug: "stirrups",
    group: "equestrian",
    shortDescription: "Innovative safety stirrups with quick release.",
    description:
      "Advanced safety stirrups with an outward-facing breakaway arm that releases the foot in a fall. Non-slip rubber tread provides secure grip. Lightweight aluminum construction.",
    specs: [
      { label: "Material", value: "Aircraft-grade Aluminum" },
      { label: "Tread", value: "Non-slip Rubber" },
      { label: "Release", value: "Outward Breakaway" },
      { label: "Weight", value: "450g (pair)" },
    ],
    images: ["/images/products/safety-stirrups.jpg"],
  },
  {
    slug: "polo-wraps",
    sku: "TI-E-801",
    name: "Polo Wraps",
    categorySlug: "bandages",
    group: "equestrian",
    shortDescription: "Elastic polo wraps for leg protection.",
    description:
      "High-quality elastic polo wraps for protecting horse legs during exercise and transport. Self-adhesive closure ensures secure fit. Available in a wide range of colors.",
    specs: [
      { label: "Material", value: "Elastic Fleece" },
      { label: "Length", value: "4m each" },
      { label: "Width", value: "10cm" },
      { label: "Colors", value: "20+ Options" },
    ],
    images: ["/images/products/polo-wraps.jpg"],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return allCategories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoriesByGroup(group: ProductGroup): ProductCategory[] {
  return allCategories.filter((c) => c.group === group);
}
