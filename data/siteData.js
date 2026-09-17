export const siteInfo = {
  companyName: "KD Enterprises",
  brandName: "K.D. Crane Spare Parts & Accessories",
  gstin: "03FAHPS1029B1Z6",
  owner: "Mr. Pankesh Thakur",
  established: "2016",
  location: "Ludhiana, Punjab, India",
  address: "Focal Point, Industrial Area, Ludhiana – 141003, Punjab, India",
  phone: "+91 98765 43210",
  landline: "+91 161 250 1234",
  email: "sales@kdcranes.com",
  secondaryEmail: "info@kdcranes.com",
  superbrandText: "Pioneer in EOT Crane Spare Parts & Heavy Duty Busbar Systems since 2016",
  tickerItems: [
    "DSL BUSBAR SYSTEM – 125 AMP IN LUDHIANA",
    "EOT CRANE CURRENT COLLECTOR – 60AMP, 100AMP, 125AMP, 200AMP, 250AMP, 400AMP",
    "EOT CRANE WIRELESS RADIO REMOTE CONTROL SYSTEM",
    "LEVER LIMIT SWITCH FOR EOT CRANE",
    "HYDRAULIC THRUSTER BRAKES & WIRE ROPE HOISTS"
  ]
};

export const categories = [
  { id: "all", name: "All Products" },
  { id: "busbar", name: "DSL Busbar Systems" },
  { id: "collectors", name: "Current Collectors" },
  { id: "remotes", name: "Radio Remote Control" },
  { id: "switches", name: "Limit Switches" },
  { id: "hoists", name: "Hoists & Trolleys" },
  { id: "brakes", name: "Brakes & Accessories" }
];

export const products = [
  {
    id: "dsl-busbar-125a",
    slug: "dsl-busbar-system-125amp",
    name: "DSL Busbar System 3 Line 125Amp G.I. Coated",
    category: "busbar",
    shortDesc: "Heavy duty 3-Line / 4-Line 125Amp G.I. Coated Shrouded Conductor Bus Bar System engineered for maximum safety and uninterrupted power supply in EOT Cranes.",
    specs: [
      { key: "Ampere Rating", value: "125 Amp (Also available in 60A, 100A, 200A, 250A, 400A)" },
      { key: "Conductor Material", value: "Galvanized Iron (G.I.) / Copper" },
      { key: "Insulation Cover", value: "Rigid Green/Yellow PVC Shroud (Self-Extinguishing)" },
      { key: "Standard Bar Length", value: "4 Meters" },
      { key: "Max Voltage", value: "600V AC" }
    ],
    features: [
      "Touch-proof enclosed conductor design for high industrial safety",
      "High thermal resistance and corrosion resistant G.I. coating",
      "Compact installation with jointless copper pin connectors",
      "Ideal for indoor & outdoor EOT overhead crane runways"
    ],
    badge: "Best Seller",
    imageUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-19.jpeg"
  },
  {
    id: "current-collector-shoe",
    slug: "eot-crane-current-collector",
    name: "EOT Crane Copper Current Collector (60A - 400A)",
    category: "collectors",
    shortDesc: "High conductivity copper current collector shoes and assembly available in 60AMP, 100AMP, 125AMP, 200AMP, 250AMP, and 400AMP ratings.",
    specs: [
      { key: "Current Rating", value: "60AMP to 400AMP" },
      { key: "Contact Shoe Material", value: "Pure Electrolytic Copper / Graphite" },
      { key: "Spring Tension", value: "Heavy Duty Adjustable Stainless Steel Springs" },
      { key: "Mounting Arm", value: "Insulated Heavy Duty Mild Steel Arm" }
    ],
    features: [
      "Low friction and high current conduction efficiency",
      "Gravity type and spring loaded mechanisms for perfect track alignment",
      "Prevents sparking and wearing out of DSL conductors",
      "Easy shoe replacement design"
    ],
    badge: "Popular",
    imageUrl: "https://kdcranes.com/wp-content/uploads/2023/01/eot-cranes-current-collector-500x500-1.webp"
  },
  {
    id: "wireless-radio-remote-6d-8d",
    slug: "eot-crane-wireless-radio-remote-control-system",
    name: "EOT Crane Wireless Radio Remote Control System (6D & 8D)",
    category: "remotes",
    shortDesc: "Industrial grade wireless radio remote control systems for 6-Direction and 8-Direction overhead crane operations with emergency stop function.",
    specs: [
      { key: "Operating Range", value: "Up to 100 Meters" },
      { key: "Frequency Range", value: "310 - 470 MHz (Safety Hamming Code)" },
      { key: "Control Buttons", value: "6 / 8 Pushbuttons + Mushroom Emergency Stop + Key Switch" },
      { key: "Protection Rating", value: "IP65 Waterproof & Dustproof" },
      { key: "Receiver Power", value: "110V / 220V / 380V AC" }
    ],
    features: [
      "Ergonomic shock-resistant glass-fiber reinforced housing",
      "Low power consumption transmitter (up to 2 months on 2 AA batteries)",
      "Smart security key card prevents unauthorized operation",
      "Over 4.3 billion unique security ID codes"
    ],
    badge: "Featured",
    imageUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-10-1.jpg"
  },
  {
    id: "lever-limit-switch",
    slug: "lever-limit-switch-for-eot-crane",
    name: "Heavy Duty Lever Limit Switch for EOT Crane",
    category: "switches",
    shortDesc: "Heavy duty 2-position lever type limit switch designed for overhoisting and long-travel safety cutoff on industrial EOT cranes.",
    specs: [
      { key: "Contact Configuration", value: "1NO + 1NC / 2NO + 2NC" },
      { key: "Current Rating", value: "10A @ 500V AC" },
      { key: "Housing Material", value: "Die-Cast Aluminum Enclosure IP65" },
      { key: "Lever Type", value: "Adjustable Roller Lever / Weight Operated" }
    ],
    features: [
      "Instantaneous trip action for emergency travel stopping",
      "Rugged cast aluminum body built for harsh steel plant environments",
      "Silver alloy contacts for long electrical life",
      "Supports counter-weight and rotary action mechanisms"
    ],
    badge: "Safety Grade",
    imageUrl: "https://kdcranes.com/wp-content/uploads/2023/01/lever-type-limit-switch-500x500-1.webp"
  },
  {
    id: "hydraulic-thruster-brake",
    slug: "hydraulic-thruster-brake",
    name: "Electro-Hydraulic Thruster Brake Unit",
    category: "brakes",
    shortDesc: "Precision electro-hydraulic thruster brakes for smooth and safe deceleration and holding of EOT crane hoists, cross travel, and long travel drives.",
    specs: [
      { key: "Drum Diameter", value: "100mm to 600mm" },
      { key: "Braking Torque", value: "Up to 5000 Nm" },
      { key: "Thruster Capacity", value: "18kg to 75kg stroke capacity" },
      { key: "Operating Voltage", value: "415V 3-Phase 50Hz" }
    ],
    features: [
      "Uniform lining wear with automatic shoe adjustment mechanism",
      "Smooth braking without mechanical shocks or vibrations",
      "High temperature resistant brake linings",
      "Complies with IS 3938 crane manufacturing standards"
    ],
    badge: "Heavy Duty",
    imageUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-6-1.jpg"
  },
  {
    id: "wire-rope-hoist-1t-10t",
    slug: "electric-wire-rope-hoist",
    name: "Electric Wire Rope Hoist & Chain Pulley Block (1T - 10T)",
    category: "hoists",
    shortDesc: "High capacity electric wire rope hoists and heavy duty manual chain pulley blocks available in 1Ton, 2Ton, 3Ton, 5Ton, 7.5Ton, and 10Ton configurations.",
    specs: [
      { key: "Lifting Capacity", value: "1 Ton, 2 Ton, 3 Ton, 5 Ton, 7.5 Ton, 10 Ton" },
      { key: "Lifting Height", value: "6 Meters to 30 Meters" },
      { key: "Lifting Speed", value: "4m/min to 8m/min (Single / Dual Speed)" },
      { key: "Trolley Type", value: "Electric Travelling Trolley / Push-Pull Trolley / Gear Trolley" }
    ],
    features: [
      "Precision machined alloy steel helical gears with oil bath lubrication",
      "Fitted with electromagnetic disc brake and rope guide assembly",
      "Includes forged steel 360-degree swivel safety latch hook",
      "Overload protection limiter option available"
    ],
    badge: "Top Rated",
    imageUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-16-1.jpeg"
  },
  {
    id: "crane-trolleys-and-hooks",
    slug: "crane-trolleys-and-forged-hooks",
    name: "Gear Trolleys, MS Trolleys & Forged Crane Hooks",
    category: "hoists",
    shortDesc: "Complete range of I-Beam Trolleys, PVC Cable Carry Trolleys, Gantry Travelling Trolleys, Plane Wheels, Gear Wheels, Gear Shafts, and Forged Crane Hooks (1T to 10T).",
    specs: [
      { key: "Capacity Range", value: "1 Ton to 10 Ton" },
      { key: "Trolley Options", value: "Gear Trolley, Push-Pull, PVC Festoon Cable Trolley, MS Trolley" },
      { key: "Wheel Material", value: "Forged Alloy Steel / Cast Iron C.I. Wheels" },
      { key: "Hook Standard", value: "Forged Steel Shank Hook with Safety Latch (IS 3815)" }
    ],
    features: [
      "Precision machined wheels with sealed ball bearings",
      "Adjustable flange width for varying beam sizes",
      "Heavy duty Festoon cable carry trolleys for smooth festoon cable movement",
      "Forged crane hooks tested under 200% proof load"
    ],
    badge: "Essential",
    imageUrl: "https://kdcranes.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-28-at-15.20.04.jpeg"
  }
];

export const heroSlides = [
  {
    title: "KD ENTERPRISES SUPERBRAND QUALITY",
    subtitle: "Pioneer manufacturer of EOT Crane Spare Parts, DSL Busbar Systems, and Current Collectors in Ludhiana, Punjab.",
    btnText: "Explore Portfolio",
    btnLink: "/products",
    badgeImg: "https://kdcranes.com/wp-content/uploads/2023/02/exclusive-gold-badge-color-46166840-150x150.jpg",
    bgPattern: "linear-gradient(135deg, #021245 0%, #0a2570 100%)"
  },
  {
    title: "DSL Busbar Systems (125Amp G.I.)",
    subtitle: "Safe, compact, and touch-proof enclosed shrouded conductor bus bar systems from 60A to 400A.",
    btnText: "View Busbar Specs",
    btnLink: "/products/dsl-busbar-system-125amp",
    badgeImg: "https://kdcranes.com/wp-content/uploads/2023/01/pic-19.jpeg",
    bgPattern: "linear-gradient(135deg, #061954 0%, #0d3b9e 100%)"
  },
  {
    title: "EOT Crane Current Collectors",
    subtitle: "Heavy duty electrolytic copper current collector shoes (60A, 100A, 125A, 200A, 250A, 400A).",
    btnText: "View Collector Range",
    btnLink: "/products/eot-crane-current-collector",
    badgeImg: "https://kdcranes.com/wp-content/uploads/2023/01/eot-cranes-current-collector-500x500-1.webp",
    bgPattern: "linear-gradient(135deg, #021245 0%, #1a4da6 100%)"
  },
  {
    title: "Wireless Radio Remote Controls",
    subtitle: "Ergonomic 6D & 8D industrial wireless radio remote control transmitters with IP65 protection.",
    btnText: "Download Brochure",
    btnLink: "/download",
    badgeImg: "https://kdcranes.com/wp-content/uploads/2023/01/pic-10-1.jpg",
    bgPattern: "linear-gradient(135deg, #0b2066 0%, #021245 100%)"
  }
];

export const companyStats = [
  { value: "10+", label: "Years of Manufacturing Excellence" },
  { value: "150,000+", label: "Crane Spares Manufactured / Year" },
  { value: "50+", label: "Product Portfolio Categories" },
  { value: "1,000+", label: "Satisfied Industrial Clients" },
  { value: "100%", label: "Quality Inspection Guarantee" }
];

export const testimonials = [
  {
    quote: "KD Enterprises provides top-notch DSL Busbar Systems and Current Collectors. Their delivery lead time in Ludhiana and quality consistency has been unmatched.",
    author: "Rajesh Kumar",
    role: "Plant Operations Head, Ludhiana Steel Works",
    rating: 5
  },
  {
    quote: "We installed KD Crane Wireless Radio Remotes across our overhead cranes. The response time, durability, and safety features are excellent.",
    author: "Harpreet Singh",
    role: "Chief Engineer, Punjab Forge Ltd",
    rating: 5
  },
  {
    quote: "Extremely reliable supplier for hydraulic thruster brakes and limit switches. Mr. Pankesh Thakur and team provide great technical assistance.",
    author: "Vikas Sharma",
    role: "Maintenance Director, Heavy Engineering Corp",
    rating: 5
  }
];

export const brochureFiles = [
  {
    title: "KD Cranes Wireless Radio Remote Control (8D) Brochure",
    fileName: "over-head-cranes-wireless-radio-remote-8d.pdf",
    size: "2.4 MB",
    downloadUrl: "https://kdcranes.com/wp-content/uploads/2023/02/over-head-cranes-wireless-radio-remote-8d.pdf",
    desc: "Complete technical specifications, wiring diagram, and operating manual for 8D Overhead Crane Wireless Remote Control Systems."
  },
  {
    title: "KD Enterprises Full Product Catalogue 2026",
    fileName: "KD_Enterprises_Complete_Product_Catalog.pdf",
    size: "5.8 MB",
    downloadUrl: "https://kdcranes.com/wp-content/uploads/2023/02/over-head-cranes-wireless-radio-remote-8d.pdf",
    desc: "Full comprehensive catalogue covering DSL Busbars, Current Collectors, Limit Switches, Hoists, Brakes, and Crane Accessories."
  }
];
