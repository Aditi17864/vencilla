export const products = [
  {
    slug: 'pregabalin-api',
    name: 'Pregabalin API',
    category: 'CNS / Neurology',
    casNumber: '148553-50-8',
    molecularFormula: 'C8H17NO2',
    shortDescription:
      'GABA-analogue active ingredient used in anticonvulsant and neuropathic pain formulations.',
    overview:
      "Vencilla manufactures Pregabalin API under WHO-GMP conditions with tightly controlled particle size distribution and polymorphic form, supporting consistent dissolution profiles across capsule and tablet formulations.",
    applications: ['Neuropathic pain', 'Epilepsy (adjunct therapy)', 'Generalised anxiety disorder', 'Fibromyalgia'],
    specifications: [
      { label: 'Assay', value: '99.5% – 100.5%' },
      { label: 'Appearance', value: 'White to off-white crystalline powder' },
      { label: 'Related substances', value: 'Complies with USP/EP' },
      { label: 'Residual solvents', value: 'ICH Q3C compliant' },
      { label: 'Particle size (D90)', value: 'Customisable on request' },
    ],
    packaging: ['25 kg fibre drum with double LDPE liner', 'Customised export packaging on request'],
    documentation: ['Certificate of Analysis (COA)', 'CEP / DMF (Open Part)', 'Stability data', 'MSDS'],
    regulatoryStatus: 'CEP, USDMF, WHO-GMP',
    featured: true,
  },
  {
    slug: 'zopiclone-api',
    name: 'Zopiclone API',
    category: 'CNS / Neurology',
    casNumber: '43200-80-2',
    molecularFormula: 'C17H17ClN6O3',
    shortDescription:
      'Cyclopyrrolone-derived active ingredient formulated for short-term management of insomnia.',
    overview:
      "Produced in a dedicated, controlled-substance-compliant manufacturing block, Vencilla's Zopiclone API meets pharmacopoeial standards for identity, purity, and enantiomeric consistency.",
    applications: ['Short-term insomnia management'],
    specifications: [
      { label: 'Assay', value: '98.0% – 102.0%' },
      { label: 'Appearance', value: 'White crystalline powder' },
      { label: 'Heavy metals', value: 'Complies with EP' },
      { label: 'Loss on drying', value: 'NMT 0.5%' },
    ],
    packaging: ['1 kg / 5 kg fibre drum, light-protected', 'Cold-chain not required, store below 25°C'],
    documentation: ['Certificate of Analysis (COA)', 'DMF (Open Part)', 'MSDS', 'Narcotic export licence support'],
    regulatoryStatus: 'WHO-GMP, export-licensed under NDPS framework',
    featured: true,
  },
  {
    slug: 'tapentadol-api',
    name: 'Tapentadol API',
    category: 'Pain Management',
    casNumber: '175591-23-8',
    molecularFormula: 'C14H23NO',
    shortDescription:
      'Centrally-acting analgesic active ingredient for moderate to severe acute and chronic pain.',
    overview:
      "Vencilla's Tapentadol Hydrochloride is manufactured with validated crystallisation control to ensure consistent bulk density and flow characteristics for high-speed tableting.",
    applications: ['Moderate to severe acute pain', 'Chronic musculoskeletal pain', 'Diabetic peripheral neuropathy'],
    specifications: [
      { label: 'Assay', value: '99.0% – 101.0%' },
      { label: 'Appearance', value: 'White to almost white powder' },
      { label: 'Chiral purity', value: '≥ 99.5%' },
      { label: 'Water content', value: 'NMT 0.5% (KF)' },
    ],
    packaging: ['25 kg fibre drum with double LDPE liner'],
    documentation: ['Certificate of Analysis (COA)', 'CEP / DMF (Open Part)', 'Stability data', 'MSDS'],
    regulatoryStatus: 'CEP, WHO-GMP',
    featured: true,
  },
  {
    slug: 'atorvastatin-calcium-api',
    name: 'Atorvastatin Calcium API',
    category: 'Cardiovascular',
    casNumber: '134523-03-8',
    molecularFormula: 'C66H68CaF2N4O10',
    shortDescription: 'Statin active ingredient for cholesterol-lowering formulations.',
    overview:
      'Manufactured with controlled polymorphic form (Form I) for consistent bioavailability across tablet formulations.',
    applications: ['Hypercholesterolemia', 'Cardiovascular risk reduction'],
    specifications: [
      { label: 'Assay', value: '98.0% – 102.0%' },
      { label: 'Polymorphic form', value: 'Form I' },
    ],
    packaging: ['25 kg fibre drum, moisture-protected'],
    documentation: ['Certificate of Analysis (COA)', 'DMF (Open Part)', 'MSDS'],
    regulatoryStatus: 'WHO-GMP',
    featured: false,
  },
  {
    slug: 'azithromycin-api',
    name: 'Azithromycin API',
    category: 'Anti-Infectives',
    casNumber: '83905-01-5',
    molecularFormula: 'C38H72N2O12',
    shortDescription: 'Macrolide antibiotic active ingredient for respiratory and other bacterial infections.',
    overview: 'Manufactured to USP/EP monograph specifications with validated dihydrate crystal form.',
    applications: ['Respiratory tract infections', 'Skin and soft tissue infections'],
    specifications: [
      { label: 'Assay', value: '96.0% – 102.0% (anhydrous basis)' },
      { label: 'Water content', value: '4.0% – 5.0%' },
    ],
    packaging: ['25 kg fibre drum with double LDPE liner'],
    documentation: ['Certificate of Analysis (COA)', 'CEP', 'MSDS'],
    regulatoryStatus: 'CEP, WHO-GMP',
    featured: false,
  },
  {
    slug: 'pantoprazole-sodium-api',
    name: 'Pantoprazole Sodium Sesquihydrate API',
    category: 'Gastro-Intestinal',
    casNumber: '164579-32-2',
    molecularFormula: 'C16H14F2N3NaO4S · 1.5H2O',
    shortDescription: 'Proton-pump inhibitor active ingredient for acid-related gastrointestinal conditions.',
    overview: 'Produced under light- and moisture-controlled conditions to preserve product stability.',
    applications: ['Gastroesophageal reflux disease', 'Peptic ulcer disease'],
    specifications: [
      { label: 'Assay', value: '98.0% – 102.0%' },
      { label: 'Related substances', value: 'Complies with EP' },
    ],
    packaging: ['1 kg / 5 kg amber glass or light-protected drum'],
    documentation: ['Certificate of Analysis (COA)', 'DMF (Open Part)', 'MSDS'],
    regulatoryStatus: 'WHO-GMP',
    featured: false,
  },
];

export const posts = [
  {
    slug: 'understanding-cep-vs-dmf',
    title: 'Understanding CEP vs DMF: What Buyers Need to Know',
    category: 'Regulatory',
    excerpt:
      'A practical breakdown of the two most common regulatory dossier routes for API procurement in Europe and the US.',
    content:
      "When evaluating an API supplier, buyers frequently encounter two dossier formats: the Certificate of Suitability (CEP) issued by EDQM, and the Drug Master File (DMF) filed with the US FDA. While both demonstrate compliance with pharmacopoeial standards, they differ in scope, review process, and the markets they unlock. This article walks through what each covers, how they are evaluated, and what documentation buyers should request during supplier qualification.",
    date: new Date('2026-06-02'),
  },
  {
    slug: 'export-corridors-from-india',
    title: 'How Export Corridors From India Shape API Lead Times',
    category: 'Supply Chain',
    excerpt: 'A look at how Nhava Sheva and Mundra port operations affect delivery timelines for international API buyers.',
    content:
      "India's two major western ports, Nhava Sheva (JNPT) and Mundra, handle the majority of the country's pharmaceutical export volume. Understanding vessel schedules, customs clearance timelines, and seasonal congestion at these ports helps procurement teams plan realistic lead times when sourcing APIs from Indian manufacturers.",
    date: new Date('2026-05-18'),
  },
  {
    slug: 'particle-size-and-dissolution',
    title: 'Why Particle Size Distribution Matters for Formulators',
    category: 'Technical',
    excerpt: 'How D90 particle size specifications influence dissolution profiles in downstream tablet and capsule formulations.',
    content:
      'Particle size distribution is one of the most consequential physical characteristics of an API for formulators. Tighter control over D90 values can significantly influence dissolution rate, content uniformity, and manufacturability at scale. This piece explains how API manufacturers control particle size during crystallisation and milling stages.',
    date: new Date('2026-04-27'),
  },
];
