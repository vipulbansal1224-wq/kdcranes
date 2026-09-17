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
  { id: "all", name: "All Products (25+)" },
  { id: "busbar", name: "DSL Busbar Systems" },
  { id: "collectors", name: "Current Collectors" },
  { id: "remotes", name: "Radio Remote Control" },
  { id: "switches", name: "Limit Switches" },
  { id: "hoists", name: "Hoists & Trolleys" },
  { id: "brakes", name: "Brakes & Wheels" }
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
    imageUrl: "/images/pic-19.jpeg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-19.jpeg"
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
    imageUrl: "/images/eot-cranes-current-collector-500x500-1.webp",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/eot-cranes-current-collector-500x500-1.webp"
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
    imageUrl: "/images/pic-10-1.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-10-1.jpg"
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
    imageUrl: "/images/lever-type-limit-switch-500x500-1.webp",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/lever-type-limit-switch-500x500-1.webp"
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
    imageUrl: "/images/pic-6-1.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-6-1.jpg"
  },
  {
    id: "wire-rope-hoist-1t-10t",
    slug: "electric-wire-rope-hoist",
    name: "Electric Wire Rope Hoist Unit (1T - 10T)",
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
    imageUrl: "/images/pic-1.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-1.jpg"
  },
  {
    id: "electric-travelling-trolley",
    slug: "electric-travelling-trolley",
    name: "Electric Travelling Trolley Assembly",
    category: "hoists",
    shortDesc: "Motorized electric travelling trolley designed for smooth I-beam and monorail crane travel.",
    specs: [
      { key: "Capacity", value: "1Ton to 10Ton" },
      { key: "Motor Power", value: "0.4kW to 1.5kW 415V" },
      { key: "Beam Flange Width", value: "75mm - 200mm" }
    ],
    features: [
      "Heavy duty forged steel wheels",
      "Smooth acceleration & deceleration motor reduction gearbox"
    ],
    badge: "Heavy Duty",
    imageUrl: "/images/pic-2.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-2.jpg"
  },
  {
    id: "gear-wheel-and-shaft",
    slug: "gear-wheel-and-gear-shaft",
    name: "Gear Wheel & Pinion Shaft Assembly",
    category: "brakes",
    shortDesc: "Precision machined alloy steel gear wheels and pinion shafts for crane end carriage and hoist drive gearboxes.",
    specs: [
      { key: "Material", value: "EN9 / EN24 / Forged Alloy Steel" },
      { key: "Hardening", value: "Induction Hardened Teeth (50-55 HRC)" },
      { key: "Module", value: "Module 4 to Module 12" }
    ],
    features: [
      "High fatigue load resistance and low gear noise",
      "Custom tooth profiling as per drawing"
    ],
    badge: "Precision",
    imageUrl: "/images/pic-3.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-3.jpg"
  },
  {
    id: "plane-wheel",
    slug: "plane-wheel-for-end-carriage",
    name: "Plane Wheel for Crane End Carriage",
    category: "brakes",
    shortDesc: "Flanged forged steel plane wheels for crane long travel and cross travel end trucks.",
    specs: [
      { key: "Diameter", value: "150mm to 500mm" },
      { key: "Bearing Type", value: "Double Spherical Roller Bearings" },
      { key: "Hardness", value: "300-350 BHN" }
    ],
    features: [
      "Heavy load carrying capacity with double flange design",
      "Pre-lubricated sealed bearings"
    ],
    badge: "Durable",
    imageUrl: "/images/pic-4.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-4.jpg"
  },
  {
    id: "counter-weight-assembly",
    slug: "counter-weight-assembly",
    name: "Counter Weight Assembly for Limit Switch",
    category: "switches",
    shortDesc: "Cast iron counter weight and wire rope sling assembly for gravity operated overhoist limit switches.",
    specs: [
      { key: "Weight Range", value: "5kg, 10kg, 15kg" },
      { key: "Material", value: "Graded Cast Iron C.I." },
      { key: "Guide Ring", value: "Rubber Lined Guide Ring" }
    ],
    features: [
      "Failsafe gravity trip mechanism",
      "Corrosion resistant painted finish"
    ],
    badge: "Safety",
    imageUrl: "/images/pic-5.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-5.jpg"
  },
  {
    id: "rotary-limit-switch",
    slug: "rotary-geared-limit-switch",
    name: "Rotary Geared Limit Switch",
    category: "switches",
    shortDesc: "Heavy duty rotary geared limit switch for multi-turn travel and height control on crane winches.",
    specs: [
      { key: "Gear Ratio", value: "1:10 to 1:200" },
      { key: "Contacts", value: "2 / 4 Microswitches 10A" },
      { key: "Enclosure", value: "IP65 Aluminum Housing" }
    ],
    features: [
      "Adjustable cam discs for precise position cutoff",
      "Direct shaft coupling design"
    ],
    badge: "Precision",
    imageUrl: "/images/pic-7-1.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-7-1.jpg"
  },
  {
    id: "gravity-limit-switch",
    slug: "gravity-type-limit-switch",
    name: "Gravity Type Limit Switch for Overhoist",
    category: "switches",
    shortDesc: "Gravity weight trip limit switch for positive emergency upper limit cutoff on electric hoists.",
    specs: [
      { key: "Current Rating", value: "16A 500V AC" },
      { key: "Operation", value: "Failsafe Gravity Trip" }
    ],
    features: [
      "Prevents wire rope over-winding and hook collision",
      "Heavy duty silver contacts"
    ],
    badge: "Failsafe",
    imageUrl: "/images/pic-8-1.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-8-1.jpg"
  },
  {
    id: "anti-collision-device",
    slug: "anti-collision-device",
    name: "Infrared Optical Anti-Collision Device",
    category: "switches",
    shortDesc: "Infrared optical anti-collision sensor system to prevent crane-to-crane collision on shared runways.",
    specs: [
      { key: "Sensing Range", value: "3 Meters to 15 Meters" },
      { key: "Relay Output", value: "Dual Stage Stop & Slowdown Relays" }
    ],
    features: [
      "Dual stage detection (Warning slowdown & Emergency stop)",
      "High optical reflector included"
    ],
    badge: "Optical Safety",
    imageUrl: "/images/pic-9.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-9.jpg"
  },
  {
    id: "hoist-pendant-switch",
    slug: "hoist-pushbutton-pendant-switch",
    name: "Crane Pushbutton Pendant Station",
    category: "remotes",
    shortDesc: "Ergonomic 4-button to 12-button crane pendant control station with emergency stop.",
    specs: [
      { key: "Protection", value: "IP65 Yellow ABS Enclosure" },
      { key: "Buttons", value: "Single / Dual Speed Buttons + E-Stop" }
    ],
    features: [
      "Mechanical interlocked contacts to prevent short circuits",
      "Internal steel strain relief wire cable"
    ],
    badge: "Ergonomic",
    imageUrl: "/images/pic-11.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-11.jpg"
  },
  {
    id: "pvc-cable-carry-trolley",
    slug: "pvc-festoon-cable-carry-trolley",
    name: "PVC Cable Carry Festoon Trolley",
    category: "hoists",
    shortDesc: "PVC coated festoon cable trolleys for supporting flat cables along C-track festoon systems.",
    specs: [
      { key: "Track Type", value: "C-Rail / Diamond Track" },
      { key: "Carrying Capacity", value: "25kg per trolley" }
    ],
    features: [
      "Smooth nylon wheels with ball bearings",
      "Protects flat electrical power cables from abrasion"
    ],
    badge: "Festoon",
    imageUrl: "/images/pic-12-1.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-12-1.jpg"
  },
  {
    id: "i-beam-trolley",
    slug: "i-beam-festoon-cable-trolley",
    name: "I-Beam Heavy Duty Festoon Cable Trolley",
    category: "hoists",
    shortDesc: "Heavy duty steel festoon cable trolley designed to run directly on I-beam flanges.",
    specs: [
      { key: "Beam Width", value: "100mm to 250mm" },
      { key: "Load Rating", value: "100kg per trolley" }
    ],
    features: [
      "Adjustable width clamps for various beam sizes",
      "Steel cable saddles for heavy power cables"
    ],
    badge: "Heavy Load",
    imageUrl: "/images/pic-13.jpg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-13.jpg"
  },
  {
    id: "mild-steel-trolley",
    slug: "mild-steel-push-pull-trolley",
    name: "Mild Steel Push-Pull Trolley",
    category: "hoists",
    shortDesc: "Manual push-pull trolley for manual hoist suspension and travel along I-beams.",
    specs: [
      { key: "Capacity", value: "0.5 Ton to 5 Ton" },
      { key: "Wheels", value: "Precision Machined Steel Wheels" }
    ],
    features: [
      "Easy manual push-pull operation",
      "Safety bumper lugs included"
    ],
    badge: "Manual",
    imageUrl: "/images/pic-14-1.jpeg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-14-1.jpeg"
  },
  {
    id: "gantry-travelling-trolley",
    slug: "gantry-crane-travelling-trolley",
    name: "Gantry Travelling Trolley Assembly",
    category: "hoists",
    shortDesc: "Heavy duty travelling trolley assembly engineered for gantry and semi-gantry cranes.",
    specs: [
      { key: "Capacity", value: "3 Ton to 10 Ton" },
      { key: "Drive", value: "Geared / Motorized Options" }
    ],
    features: [
      "Rigid box frame construction",
      "Dual drive wheel synchronisation"
    ],
    badge: "Gantry Grade",
    imageUrl: "/images/pic-15-1.jpeg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-15-1.jpeg"
  },
  {
    id: "crane-hoist-hook-1t-10t",
    slug: "crane-hoist-forged-shank-hook",
    name: "Forged Steel Crane Hoist Hook (1T - 10T)",
    category: "hoists",
    shortDesc: "Forged shank crane hooks manufactured according to IS 3815 specifications with 360-degree swivel bearing.",
    specs: [
      { key: "Capacity", value: "1 Ton, 2 Ton, 3 Ton, 5 Ton, 7.5 Ton, 10 Ton" },
      { key: "Material", value: "Forged Carbon Steel / Alloy Steel (Class 4 / Class 5)" },
      { key: "Test Certificate", value: "200% Proof Load Tested" }
    ],
    features: [
      "Spring loaded heavy duty safety latch",
      "Thrust ball bearing for smooth 360-degree rotation"
    ],
    badge: "Certified Hook",
    imageUrl: "/images/pic-16-1.jpeg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-16-1.jpeg"
  },
  {
    id: "chain-pulley-block-hook",
    slug: "chain-pulley-block-top-bottom-hook",
    name: "Chain Pulley Block Top & Bottom Hook Assembly",
    category: "hoists",
    shortDesc: "Top and bottom replacement hooks for manual and electrical chain pulley blocks.",
    specs: [
      { key: "Capacity", value: "1T, 2T, 3T, 5T" },
      { key: "Latch", value: "Heavy Duty Spring Latch" }
    ],
    features: [
      "Drop forged alloy steel construction",
      "High ductility shank preventing brittle failure"
    ],
    badge: "Forged",
    imageUrl: "/images/pic-17-1.jpeg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-17-1.jpeg"
  },
  {
    id: "chain-hoist-unit",
    slug: "electric-chain-hoist-unit",
    name: "Electric Chain Hoist Unit (1T - 5T)",
    category: "hoists",
    shortDesc: "Compact electric chain hoist with grade 80 load chain and dual limit switches.",
    specs: [
      { key: "Capacity", value: "1Ton, 2Ton, 3Ton, 5Ton" },
      { key: "Chain Grade", value: "G80 Alloy Steel Calibrated Chain" }
    ],
    features: [
      "Conical rotor motor with built-in mechanical brake",
      "Chain container canvas bag included"
    ],
    badge: "Compact",
    imageUrl: "/images/pic-18-1.jpeg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/pic-18-1.jpeg"
  },
  {
    id: "gravity-type-collector",
    slug: "gravity-type-current-collector",
    name: "Gravity Type Current Collector Assembly",
    category: "collectors",
    shortDesc: "Precision gravity type current collector assembly for seamless alignment and heavy duty power transmission.",
    specs: [
      { key: "Current Rating", value: "100A, 125A, 250A" },
      { key: "Mechanism", value: "Gravity Counterbalanced Swivel Arm" },
      { key: "Shoe Material", value: "Electrolytic Copper" }
    ],
    features: [
      "Maintains constant pressure on shrouded busbars",
      "Minimal wear and zero contact loss during crane motion"
    ],
    badge: "Precision",
    imageUrl: "/images/gravity-type-current-collector-500x500-1.webp",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/gravity-type-current-collector-500x500-1.webp"
  },
  {
    id: "copper-current-collector-shoe-125a",
    slug: "copper-current-collector-shoe-125a",
    name: "Copper Current Collector Shoe 125A",
    category: "collectors",
    shortDesc: "Pure electrolytic copper replacement collector shoes for 125A shrouded busbars.",
    specs: [
      { key: "Ampere", value: "125 Amp" },
      { key: "Material", value: "99.9% Electrolytic Copper" }
    ],
    features: [
      "Self-lubricating graphite mix option",
      "High wear life"
    ],
    badge: "Spare Shoe",
    imageUrl: "/images/eot-crane-copper-current-collector-shoe-125-amps-500x500-1.webp",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/eot-crane-copper-current-collector-shoe-125-amps-500x500-1.webp"
  },
  {
    id: "carbon-brush-current-collector",
    slug: "carbon-brush-current-collector-shoe",
    name: "Carbon Brush Current Collector Shoe",
    category: "collectors",
    shortDesc: "High conductivity carbon graphite brush collector shoes for copper conductor busbars.",
    specs: [
      { key: "Rating", value: "60A to 200A" },
      { key: "Material", value: "Silver-Graphite / Carbon Brush" }
    ],
    features: [
      "Zero spark transmission",
      "Low noise sliding contact"
    ],
    badge: "Carbon Brush",
    imageUrl: "/images/crane-current-collector-carbon-brush-500x500-1.webp",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/crane-current-collector-carbon-brush-500x500-1.webp"
  },
  {
    id: "festoon-system-whatsapp",
    slug: "crane-festoon-cable-system-complete",
    name: "Complete Heavy Duty Crane Festoon Cable System",
    category: "hoists",
    shortDesc: "Complete festoon system including C-rail tracks, tow trolleys, cable carry trolleys, and end stops.",
    specs: [
      { key: "Track Length", value: "10m to 100m" },
      { key: "Cable Capacity", value: "Flat & Round Power Cables" }
    ],
    features: [
      "Smooth low-resistance movement along crane runway",
      "Complete mounting hardware kit included"
    ],
    badge: "Complete System",
    imageUrl: "/images/WhatsApp-Image-2023-01-28-at-15.20.04.jpeg",
    fallbackUrl: "https://kdcranes.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-28-at-15.20.04.jpeg"
  }
];

export const heroSlides = [
  {
    id: 1,
    title: "K.D. CRANE SPARE PARTS & ACCESSORIES",
    subtitle: "Pioneer & Largest Manufacturer of E.O.T Crane Spare Parts, DSL Busbars, and Current Collectors in Ludhiana, Punjab.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2023/01/banner-2-1.jpg",
    localBg: "/images/banner-2-1.jpg",
    btnText: "Explore Products",
    btnLink: "/products"
  },
  {
    id: 2,
    title: "DSL BUSBAR SYSTEM – 125 AMP G.I. COATED",
    subtitle: "High safety shrouded conductor busbar systems available in 60A, 100A, 125A, 200A, 250A, and 400A ratings.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2023/01/banner5.jpg",
    localBg: "/images/banner5.jpg",
    btnText: "View Busbar Systems",
    btnLink: "/products/dsl-busbar-system-125amp"
  },
  {
    id: 3,
    title: "EOT CRANE CURRENT COLLECTOR (60A - 400A)",
    subtitle: "Heavy duty copper current collector shoes, gravity type and spring loaded assemblies for overhead cranes.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/08/eot_crane_banner_2_1787744731192.jpg",
    localBg: "/images/eot_crane_banner_2_1787744731192.jpg",
    btnText: "View Collectors",
    btnLink: "/products/eot-crane-current-collector"
  },
  {
    id: 4,
    title: "WIRELESS RADIO REMOTE CONTROL SYSTEM (6D & 8D)",
    subtitle: "Industrial IP65 waterproof wireless radio remote control system with emergency stop for overhead cranes.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/08/eot_slide_6_1787744944890.jpg",
    localBg: "/images/eot_slide_6_1787744944890.jpg",
    btnText: "Download Brochure",
    btnLink: "/download"
  },
  {
    id: 5,
    title: "HEAVY DUTY LEVER LIMIT SWITCH FOR EOT CRANE",
    subtitle: "Instantaneous trip action 2-position lever limit switches for overhoist and long travel protection.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/09/eot_slide_3_nologo_1789039671056.jpg",
    localBg: "/images/eot_slide_3_nologo_1789039671056.jpg",
    btnText: "View Limit Switches",
    btnLink: "/products/lever-limit-switch-for-eot-crane"
  },
  {
    id: 6,
    title: "ELECTRO-HYDRAULIC THRUSTER BRAKES",
    subtitle: "Smooth braking torque up to 5000 Nm with automatic shoe wear compensation for industrial cranes.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/09/eot_slide_4_nologo_1789039694265.jpg",
    localBg: "/images/eot_slide_4_nologo_1789039694265.jpg",
    btnText: "View Thruster Brakes",
    btnLink: "/products/hydraulic-thruster-brake"
  },
  {
    id: 7,
    title: "ELECTRIC WIRE ROPE HOISTS (1 TON - 10 TON)",
    subtitle: "Precision machined alloy steel helical gears with oil bath lubrication and electromagnetic disc brakes.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/09/eot_slide_5_nologo_1789039719383.jpg",
    localBg: "/images/eot_slide_5_nologo_1789039719383.jpg",
    btnText: "View Wire Rope Hoists",
    btnLink: "/products/electric-wire-rope-hoist"
  },
  {
    id: 8,
    title: "CRANE TROLLEYS & FORGED HOOK ACCESSORIES",
    subtitle: "Complete range of Gear Trolleys, MS Trolleys, PVC Cable Carry Trolleys, and Forged Crane Hooks.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/09/eot_slide_6_nologo_1789039750385.jpg",
    localBg: "/images/eot_slide_6_nologo_1789039750385.jpg",
    btnText: "View Trolleys & Hooks",
    btnLink: "/products/crane-trolleys-and-forged-hooks"
  },
  {
    id: 9,
    title: "KD ENTERPRISES - LUDHIANA MANUFACTURING HQ",
    subtitle: "Contact Mr. Pankesh Thakur & sales team for direct factory wholesale rates and technical assistance.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/09/eot_slide_7_nologo_1789039779877.jpg",
    localBg: "/images/eot_slide_7_nologo_1789039779877.jpg",
    btnText: "Contact Factory HQ",
    btnLink: "/contact"
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
