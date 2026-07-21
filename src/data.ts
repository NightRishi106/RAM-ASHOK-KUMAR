import { Investigation, Equipment, MythReality, LibraryItem, TimelineMilestone } from './types';

export const investigations: Investigation[] = [
  {
    id: 'inv-hampi',
    code: 'ARC-2014-HMP',
    title: 'The Resonant Monoliths of Vittala',
    location: 'Hampi, Karnataka',
    state: 'Karnataka',
    year: 2014,
    coordinates: '15.3350° N, 76.4620° E',
    evidenceBadge: 'Acoustic',
    shortDesc: 'Acoustic resonance mapping of the 56 musical pillars of Hampi. Discovered synchronized infrasound spikes aligning with full moon tides.',
    fullNarrative: 'The Vittala Temple’s musical pillars, or "SaReGaMa" pillars, are carved out of massive solid granite blocks. Critics claimed the musical properties were random. Our 21-day field research involved high-frequency seismic transceivers and directional microphones. We discovered that the columns do not merely ring; they vibrate in harmonic fractions of 111Hz, 222Hz, and 440Hz when stimulated. More remarkably, during specific lunar positions, the entire bedrock of the temple floor undergoes micro-seismic resonance, causing the silent pillars to emit a low, steady hum below the human threshold of hearing (7Hz), inducing mild disorientation and meditative calm in subjects.',
    findings: [
      'Disproved the "hollow stone" myth; the pillars are solid micro-granite with heavy iron ore pockets.',
      'Identified a direct correlation between sub-surface water current velocity and structural vibration.',
      'Recorded isolated 14-decibel spikes at midnight during the winter solstice.'
    ],
    equipmentUsed: ['Acoustic Infrasound Sensor', 'Precision Seismic Transceiver', 'EMF Tri-Field Meter'],
    imageUrl: 'https://picsum.photos/seed/hampi/800/600'
  },
  {
    id: 'inv-bhangarh',
    code: 'THM-2018-BHN',
    title: 'The Cold-Spot Mapping of Bhangarh Ruins',
    location: 'Bhangarh, Rajasthan',
    state: 'Rajasthan',
    year: 2018,
    coordinates: '27.0964° N, 76.2861° E',
    evidenceBadge: 'Thermal',
    shortDesc: 'Systematic infrared analysis of the ruined royal palace. Discovered stationary, non-dissipating thermal blocks measuring -8°C below ambient.',
    fullNarrative: 'Bhangarh Fort is infamous for folklore warning of supernatural curses. From a scientific viewpoint, we set up four FLIR thermal imaging matrices across the ruins of the main gateway and the dancer’s chambers. Over a 72-hour cycle, we verified that while the ambient Rajasthan night hovered at 29°C, a precise 3x3 meter zone in the inner sanctum dropped spontaneously to 21°C within 15 seconds, maintaining this exact boundary for hours despite heavy crosswinds. The anomaly did not travel, which contradicts "entity" claims, but rather pointed to an underlying geological friction fault that releases compressed CO2 pockets through micro-fissures in the ancient slate bedrock.',
    findings: [
      'Logged a highly localized magnetic dip of 250 mG directly overlapping the thermal cold-spot.',
      'Disproved spontaneous combustion tales; localized ash is composed of burnt mineral limestone dust.',
      'Documented high concentrations of underground radon gas escaping through old dry-stone masonry.'
    ],
    equipmentUsed: ['FLIR Thermal Camera', 'Radon Gas Monitor', 'Soil Resistance Surveyor'],
    imageUrl: 'https://picsum.photos/seed/bhangarh/800/600'
  },
  {
    id: 'inv-kuldhara',
    code: 'EMF-2011-KUL',
    title: 'The Silent Ionization of Kuldhara',
    location: 'Kuldhara Desert Oasis, Jaisalmer',
    state: 'Rajasthan',
    year: 2011,
    coordinates: '26.8722° N, 70.7836° E',
    evidenceBadge: 'Electromagnetic',
    shortDesc: 'Mapping of the electromagnetic charge across 410 abandoned clay-brick houses. Found an active magnetic field trap that mimics biological brainwave patterns.',
    fullNarrative: 'In 1825, all inhabitants of Kuldhara vanished in a single night. Legends suggest a curse, but our electrostatic field scanners revealed a unique geological condition. The clay bricks of Kuldhara were baked using sand from a highly magnetic dry lakebed nearby. As a result, the entire village functions as a giant natural tape-recorder. Major electrical storms magnetize the bricks, locking in low-frequency electromagnetic fields. When visitors walk between the high-iron clay walls, their temporal lobes are stimulated by these ambient fields, triggering "waking dreams," shadows in peripheral vision, and a deep, biological sense of being watched.',
    findings: [
      'Discovered that the brick alignment acts as a primitive waveguide for low-frequency atmospheric radio waves.',
      'Recorded a stable 8.2 Hz Schumann resonance spike within the village center.',
      'Tested 12 volunteers; 10 reported experiencing auditory illusions of distant conversations when magnetic field rose above 120µT.'
    ],
    equipmentUsed: ['EMF Tri-Field Meter', 'Electrostatic Field Mill', 'Digital Audio Recorder'],
    imageUrl: 'https://picsum.photos/seed/kuldhara/800/600'
  },
  {
    id: 'inv-kodinhi',
    code: 'BIO-2020-KOD',
    title: 'The Geomagnetic Anomalies of Kodinhi',
    location: 'Kodinhi (The Twin Village), Kerala',
    state: 'Kerala',
    year: 2020,
    coordinates: '11.0264° N, 75.9525° E',
    evidenceBadge: 'Archaeological',
    shortDesc: 'A comprehensive study of localized terrestrial radiation and natural spring water mineral profiles in the famed twins-dense settlement.',
    fullNarrative: 'Kodinhi, a tiny village in Kerala, holds an abnormally high rate of multiple births. While geneticists attribute this to founder effect, our environmental survey mapped an extraordinary subterranean thorium-rich monazite sand deposit directly below the village well network. Our team utilized gamma-radiation scintillometers and trace-element mass spectrometers to analyze the aquifers. The research revealed that the groundwater contains high concentrations of unique metallic ions and trace minerals combined with a mild, harmless, but persistent ionizing background that may physically trigger multi-ovulation in the maternal population over generations.',
    findings: [
      'Mapped sub-surface thorium deposits radiating 0.35 mSv/year, slightly higher than the national average.',
      'Identified unique high-magnesium, low-lithium water chemistry in the older temple pond.',
      'Correlated birth coordinates; twin density drops linearly away from the primary subterranean mineral fault line.'
    ],
    equipmentUsed: ['Gamma Scintillometer', 'Water Quality Mass Spectrometer', 'GPR Subsurface Radar'],
    imageUrl: 'https://picsum.photos/seed/kodinhi/800/600'
  }
];

export const equipmentList: Equipment[] = [
  {
    id: 'eq-emf',
    name: 'Bespoke Vintage Tri-Field EMF Meter',
    type: 'Electromagnetic Surveyor',
    description: 'A customized, copper-shielded electromagnetic scanner. Blends early 20th-century analog needle aesthetics with modern digital microprocessors to detect static and dynamic electrical fluxes without picking up cellular or ambient radio noise.',
    historicalPrecedent: 'The 1920s Barkhausen Barking-Effect Coil receiver.',
    status: 'active_field',
    currentReading: '12.4 mG (Stable)',
    measurementUnit: 'milliGauss (mG)',
    soundFrequency: '85 Hz',
    iconName: 'Activity'
  },
  {
    id: 'eq-acoustic',
    name: 'Seismic Infrasound Micro-Barometer',
    type: 'Acoustic / Pressure Sensor',
    description: 'An extremely sensitive barometric and mechanical transducer. Designed to capture low-frequency acoustic vibrations between 0.1 Hz and 20 Hz, which are felt by the human body as dread, chills, or phantom touch but cannot be heard.',
    historicalPrecedent: 'The 1915 Galitzin Electromagnetic Seismograph.',
    status: 'functional',
    currentReading: '0.04 Pa (Fluctuating)',
    measurementUnit: 'Pascal (Pa)',
    soundFrequency: '12 Hz',
    iconName: 'Volume2'
  },
  {
    id: 'eq-thermal',
    name: 'Narrow-Spectrum Infrared Bolometer',
    type: 'Thermal Scanner',
    description: 'Designed to detect minute, localized microclimate collapses. Unlike commercial heat guns, this tool maps localized air molecule temperature drops within a confined beam of 1.5 degrees, ignoring surrounding surface heat variables.',
    historicalPrecedent: 'The 1880 Langley Bolometer.',
    status: 'calibrating',
    currentReading: '22.8 °C (Calibrating)',
    measurementUnit: 'Celsius (°C)',
    soundFrequency: 'None',
    iconName: 'Eye'
  },
  {
    id: 'eq-gas',
    name: 'Radon & Ionization Chamber Ion-Counter',
    type: 'Gas & Air Ion Monitor',
    description: 'Measures natural radioactive decay and positive/negative air ions. High concentrations of positive ions are linked to serotonin changes in humans, explaining the sudden feelings of panic or anxiety reported at allegedly haunted locations.',
    historicalPrecedent: 'The 1908 Rutherford-Geiger Tube.',
    status: 'active_field',
    currentReading: '420 Ions/cm³',
    measurementUnit: 'Ions per cubic cm',
    soundFrequency: '220 Hz',
    iconName: 'Wind'
  },
  {
    id: 'eq-gpr',
    name: 'Sub-surface Ground Penetrating Radar',
    type: 'Geological Radar',
    description: 'A dual-frequency radar used to scan for hidden hollow chambers, underground aqueducts, and ancient architectural foundations up to 5 meters below clay and granite bedrocks, providing geological answers to floating anomalies.',
    historicalPrecedent: 'Early 1930s Soil Conductivity bridges.',
    status: 'functional',
    currentReading: 'Layer 1: Clay (0.4m)',
    measurementUnit: 'Dielectric Depth',
    soundFrequency: '440 Hz',
    iconName: 'Layers'
  }
];

export const mythRealityList: MythReality[] = [
  {
    id: 'mr-curse',
    mythTitle: 'The Fatal Curative Curse of Bhangarh Fort',
    mythDetails: 'Folklore maintains that an ascetic wizard cursed the city, saying "the moment the roofs of your palaces cast shadows on my retreat, the city shall fall." Locals believe any roof built on the fort ruins will spontaneously collapse at midnight.',
    realityTitle: 'Micro-Climatic Thermal Expansion and Poor Lime Binding',
    realityDetails: 'Bhangarh sits at the base of steep hills that create a natural wind-tunnel. The intense day temperatures (often 48°C) followed by rapid desert cooling at night cause extreme thermal expansion in the local limestone.',
    scientificExplanation: 'Because the original architects used a dry-stone structural method without heavy mortar, modern repairs utilizing rigid cement expand at different rates than the old bricks, leading to a natural stress collapse during cold midnight drops. No supernatural energy is required to tear down the roofs; it is basic thermodynamics.',
    vashisthaRef: 'Mayamatam Vastu Shastra, Chapter 12: Thermal Tolerance of Dry Masonry.',
    illustratedIcon: 'BookOpen'
  },
  {
    id: 'mr-will',
    mythTitle: 'The Wandering Blue Wisps of Kuldhara Dunes',
    mythDetails: 'Will-o’-the-wisps, locally called "Chudel Ki Roshni," are said to be the spirits of the departed Paliwal Brahmins holding lanterns, guiding lost travelers to their doom in the desert sands.',
    realityTitle: 'Sub-surface Methane Ignition and Phosphoretted Hydrogen',
    realityDetails: 'The ruins of Kuldhara sit atop ancient clay marshlands that were buried beneath shifting sands. Over centuries, trapped organic material decomposes anaerobically beneath the sand, producing pockets of methane gas.',
    scientificExplanation: 'When high winds or low atmospheric pressure cause these gas pockets to seep through sand dunes, they oxidize instantly upon contact with oxygen and trace phosphines. The result is a cold, glowing blue-green chemical luminescence that floats above the sands, mimicking lanterns blowing in the desert breeze.',
    vashisthaRef: 'Rigveda, Mandala 10, Hymn 142: Cold flames of the marsh gases.',
    illustratedIcon: 'Flame'
  },
  {
    id: 'mr-monolith',
    mythTitle: 'The Levitation of the Shivapur Stone',
    mythDetails: 'A 200-pound stone is said to hover three feet in the air if exactly eleven men place their right index fingers under it and chant a specific mystic name in unison.',
    realityTitle: 'Symmetrical Human Leverage and Staggered Peak Forces',
    realityDetails: 'When eleven adult men space themselves symmetrically around a flat stone, they form a circular tripod. By chanting in unison, they synchronize their neurological motor responses to a singular rhythm.',
    scientificExplanation: 'An adult male index finger can easily lift 18-22 pounds when locked vertically. Eleven men exerting synchronous peak vertical force can comfortably hoist 200 pounds. The chanting creates a perfect acoustic synchronization, giving participants the psychological illusion that the stone was "weightless" due to the shared, timed load.',
    vashisthaRef: 'Sushruta Samhita, Sutrasthana: Motor synchronization under acoustic rhythm.',
    illustratedIcon: 'Activity'
  },
  {
    id: 'mr-vibration',
    mythTitle: 'The Chanting Temple Sanctums',
    mythDetails: 'Certain remote cave temples in the Western Ghats are said to repeat the cosmic chant of "OM" on their own when a lone traveler stands in the center of the inner garbhagriha.',
    realityTitle: 'Acoustic Standing Waves and Ellipsoidal Cavity Resonance',
    realityDetails: 'Ancient temple sanctums were carved in precise hemispherical or semi-elliptical curves, mimicking the structural mathematics of acoustic whispering galleries.',
    scientificExplanation: 'When a human breathes, speaks, or shifts weight in the center of an ellipsoidal stone vault, the room amplifies frequencies between 110Hz and 130Hz—the exact frequency of a deep male baritone chest voice. This standing wave resonance reflects back to the speaker’s ears from all angles, creating a feedback loop that sounds like a continuous, self-sustaining humming chant.',
    vashisthaRef: 'Shilpa Shastra: Architecture of the Sound-Mirroring Caves.',
    illustratedIcon: 'Volume'
  }
];

export const libraryItems: LibraryItem[] = [
  {
    id: 'lib-vashistha',
    title: 'The Vashistha Rasa-Shastra (14th Century)',
    category: 'Ancient Manuscript',
    origin: 'Ujjain Observatory Archives',
    estimatedAge: 'Circa 1340 AD',
    summary: 'A palm-leaf manuscript outlining early Indian concepts of geographic energy nodes (Marma Sthanas) and how iron-rich materials respond to localized planetary magnetic forces.',
    translatedExcerpt: '"Where the Earth’s iron veins meet the black water beneath, the air grows thick with invisible sparks. Let no man rest his head upon these points, for his dreams shall be severed, and his heart will beat to the cadence of the sleeping stone."',
    condition: 'Fragile, partially carbonized palm-leaves preserved in cedar-wood frames.',
    languages: ['Classical Sanskrit', 'Grantha Script']
  },
  {
    id: 'lib-journal-2',
    title: 'Field Ledger Vol. IX: Western India Surveys',
    category: 'Field Ledger',
    origin: 'Ram Ashok Kumar Personal Collection',
    estimatedAge: '1998-2002',
    summary: 'Direct field observations, hand-drawn site surveys, barometric charts, and soil resistance logs from 14 abandoned villages across the Thar Desert.',
    translatedExcerpt: '"October 4, 1999 - Kuldhara. The needle on our early micro-ammeter deflected 45 degrees without any magnetic source present. The villagers left more than clay walls; they left a geological battery, charged by two centuries of iron-clay compaction..."',
    condition: 'Leather-bound ledger, slight water damage in the margins, contains raw ink sketches.',
    languages: ['English', 'Scientific Notation']
  },
  {
    id: 'lib-survey-3',
    title: 'Acoustic Anomalies of the Nilgiri Caves',
    category: 'Research Journal',
    origin: 'Indian Academy of Archaeo-Acoustics',
    estimatedAge: 'Published 2008',
    summary: 'A peer-reviewed study analyzing how pre-Vedic basalt tunnels in the Nilgiri hills act as passive resonators for low-frequency earthquakes and ocean surf waves.',
    translatedExcerpt: '"The long tunnels act as physical organs. Wind blowing from the coast 80km away is compressed, creating a standing infrasound wave of 4.8 Hz. This frequency is proven to cause eyeball resonance, leading to reports of gray apparitions..."',
    condition: 'Excellent, bound archive copy with architectural blue-prints.',
    languages: ['English']
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'tl-1999',
    year: 1999,
    title: 'The Inception of Rational Research',
    location: 'Dehradun, Uttarakhand',
    achievement: 'Founded the Center for Anomalous Geological Studies',
    narrative: 'After graduating in applied geophysics, Ram Ashok Kumar realized that the vast majority of paranormal reports in India were misclassified natural anomalies. He set out to build a scientific team using geological tools instead of mystical rituals.',
    sketchLabel: 'First portable magnetometer, custom calibrated in Dehradun, 1999'
  },
  {
    id: 'tl-2005',
    year: 2005,
    title: 'The Hampi Resonance Discovery',
    location: 'Vittala Temple, Karnataka',
    achievement: 'First acoustic recording of the silent bedrock frequency',
    narrative: 'Kumar spent six months documenting the structural physics of the stone pillars. Using customized seismic accelerometers, he published the first conclusive paper proving the pillars resonated in response to sub-surface river rapids.',
    sketchLabel: 'Faded graphite sketch of the stone pillar joint assembly'
  },
  {
    id: 'tl-2012',
    year: 2012,
    title: 'The Desert Mapping Expedition',
    location: 'Kuldhara & Bhangarh',
    achievement: 'First 72-hour continuous microclimate and EM survey',
    narrative: 'Kumar led a team of six physicists to map the thermal and magnetic shifts of the Rajasthan desert. The expedition established that over 90% of local "haunting" events occurred at specific magnetic fault line coordinates during thermal inversion.',
    sketchLabel: 'Ink chart mapping localized midnight temperature drops'
  },
  {
    id: 'tl-2019',
    year: 2019,
    title: 'Exhibition of the Archaeological Archives',
    location: 'National Museum (Guest Lecturer)',
    achievement: 'Showcased the "Science of Myth" physical equipment',
    narrative: 'Ram Ashok Kumar was invited to showcase his custom-built field equipment. The exhibition aimed to bridge the gap between ancient temple science, vastu architectural geometry, and modern acoustic physics.',
    sketchLabel: 'Curator tag: Custom tri-field coil assembly on cedar block'
  }
];
