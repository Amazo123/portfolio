export interface CaseStudy {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  kind: string;
  status: 'built & tested' | 'built · demo' | 'in progress' | 'concept';
  summary: string;
  heroMetric: { value: string; label: string };
  role?: string;
  tags: string[];
  stack: string[];
  accent: 'accent' | 'amber' | 'green' | 'rose' | 'blue';
  /** card image path (under /img), shown on the home and work grids */
  img?: string;
  /** alt override, for cards whose image is not simply the build itself */
  alt?: string;
  /** object-position override, for portrait photos whose subject sits off-center */
  imgPos?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'crynet',
    index: '01',
    title: 'CryNet',
    subtitle: 'Two-cot infant cry detection with wearable caregiver alert',
    year: '2026',
    kind: 'Final-year capstone',
    status: 'built & tested',
    summary:
      'Two ESP32-C3 nodes sit with two cots, track their own noise floors, and freeze two seconds of audio when a sound crosses three times that floor. The window travels over ESP-NOW to an ESP32-S3 hub, which runs a 122,770-parameter INT8 CNN on-chip before paging a BLE wearable. Zero false alarms across 308 windows of real non-cry audio.',
    img: '/img/crynet/units-load.jpg',
    alt: 'The full CryNet system in printed enclosures: wearable, hub, both cot nodes',
    heroMetric: { value: '0.9993', label: 'Test AUC · INT8, all on-chip' },
    tags: ['ESP32-S3', 'ESP-NOW', 'TFLite Micro', 'INMP441', 'BLE'],
    stack: ['ESP32-C3 ×3', 'ESP32-S3', 'TFLite Micro', 'ESP-DSP', 'Python'],
    accent: 'accent',
  },
  {
    slug: 'attendx',
    index: '02',
    title: 'AttendX',
    subtitle: 'Smart biometric attendance management system · TEAM RAMP',
    year: '2026',
    kind: 'Hackathon · NASCOMSOFT TEAM RAMP',
    status: 'built · demo',
    summary:
      'A smart biometric attendance management system on an ESP32-S3-CAM: SFM-V1.7 capacitive fingerprint module, 16×2 LCD, 4×4 keypad, and a 3D-printed enclosure. PIN clock-ins trigger an automatic camera snapshot so proxy attendance leaves evidence. TEAM RAMP took 1st place overall at the NASCOMSOFT EMBEDED Hackathon 2.0.',
    heroMetric: { value: '1st', label: 'Overall · TEAM RAMP grand finale' },
    role: 'Product manager & hardware engineer',
    tags: ['ESP32-S3-CAM', 'SFM-V1.7', 'UART', 'I²C LCD', '3D print'],
    stack: ['ESP32-S3-CAM', 'SFM-V1.7', 'LCD 16×2', '4×4 keypad', 'C++'],
    accent: 'amber',
    img: '/img/attendx/terminal.jpg',
    imgPos: '50% 18%',
  },
  {
    slug: 'evoting',
    index: '03',
    title: 'Biometric E-Voting Machine',
    subtitle: 'Fingerprint-secured ballot terminal with live cloud tallies',
    year: '2026',
    kind: 'Hardware + cloud',
    status: 'built · demo',
    summary:
      'An ESP32 voting terminal that puts 20 party choices behind an AS608 optical fingerprint gate, paginated on a 16×4 LCD with a 4×4 keypad. Every verified ballot is pushed over Wi-Fi to a Render-hosted dashboard on Neon PostgreSQL. Brownout-resist power sequencing keeps optical scans stable mid-read.',
    heroMetric: { value: '20', label: 'Party choices · live cloud sync' },
    role: 'Hardware & firmware engineer',
    tags: ['ESP32', 'AS608', 'PostgreSQL', 'Wi-Fi', 'Power design'],
    stack: ['ESP32', 'AS608', '16×4 LCD', 'Neon Postgres', 'Render'],
    accent: 'green',
    img: '/img/evoting/terminal.jpg',
  },
  {
    slug: 'swarm',
    index: '04',
    title: 'Swarm Robotics Fleet',
    subtitle: 'Electromagnet-coupled robots with calibrated PWM drive',
    year: '2026',
    kind: 'Multi-robot research build',
    status: 'in progress',
    summary:
      'Three ESP32 robots built to dock, latch and move as one payload using downward-facing electromagnets with flyback protection. PWM was tuned per-wheel against a straight-line reference until the fleet tracked true, and an ArUco-marker + dashboard planner is being built to choreograph dock-and-carry sequences.',
    heroMetric: { value: '3', label: 'Robots · electromagnetic docking' },
    tags: ['ESP32', 'L298N', 'Electromagnets', 'ArUco', 'Python'],
    stack: ['ESP32 ×3', 'L298N', 'Logic-level MOSFETs', 'Buck converters', 'Python'],
    accent: 'blue',
    img: '/img/swarm/fleet.jpg',
  },
];

export interface ShortCard {
  title: string;
  year: string;
  status: string;
  summary: string;
  tags: string[];
  accent: 'accent' | 'amber' | 'green' | 'rose' | 'plain';
  source: string;
  /** photo path (under /img), only when a real photo exists for the build */
  img?: string;
  /** alt override, for cards whose image is a diagram rather than the built hardware */
  alt?: string;
}

export const shortCards: ShortCard[] = [
  {
    title: 'P10 LED matrix display board',
    year: '2026',
    status: 'assembled at NASCOMSOFT EMBEDED LTD',
    summary:
      'Panel-by-panel assembly of an outdoor P10 matrix display up to ~4 ft × 1.5 ft, with a dedicated controller and a 5 V / 4 A supply sized for balanced current draw.',
    tags: ['LED matrix', 'PSU sizing', 'Assembly'],
    accent: 'amber',
    source: 'SIWES · NASCOMSOFT EMBEDED LTD',
    img: '/img/bench/p10.jpg',
  },
  {
    title: 'ATmega328P streetlight controller',
    year: '2026',
    status: 'firmware',
    summary:
      'Dual-LDR dawn/dusk streetlight controller in embedded C: relay switching with hysteresis on the assignment circuit. My part was the firmware.',
    tags: ['ATmega328P', 'Embedded C', 'Relay', 'LDR'],
    accent: 'plain',
    source: 'NASCOMSOFT EMBEDED LTD · week 23 assignment',
    img: '/img/bench/streetlight-circuit.jpg',
  },
  {
    title: 'Solar snake detection system',
    year: '2026',
    status: 'circuit & design docs',
    summary:
      'A joint build: four PIR sensors feed an ESP32 that sounds a buzzer alarm, reports on an LCD and raises alerts over LoRa and GSM, running from a solar panel with charge control and battery storage. My contribution was the circuit diagram, the block diagram and the flowchart.',
    tags: ['ESP32', 'PIR', 'LoRa', 'SIM800L', 'Solar'],
    accent: 'plain',
    source: 'Joint project',
    img: '/img/bench/snake-circuit.png',
    alt: 'Circuit diagram of the solar snake detection system: four PIR sensors into an ESP32, with buzzer, LCD, LoRa, GSM and a solar charge path',
  },
  {
    title: 'Remote hazard-detection vehicle',
    year: '2026',
    status: 'built & tested',
    summary:
      'Bluetooth-driven rover with front/rear ultrasonic interlocks and an ESP32-CAM. An on-device model flags potholes and puddles and sounds a buzzer before the wheels get there.',
    tags: ['Arduino Nano', 'ESP32-CAM', 'HC-SR04', 'Bluetooth'],
    accent: 'green',
    source: 'Personal build',
    img: '/img/bench/hazard-vehicle.jpg',
  },
  {
    title: 'Obstacle-avoidance robot · veroboard build',
    year: '2026',
    status: 'built & tested',
    summary:
      'ATmega328P DIP-28 on hand-soldered veroboard, no Arduino board in the loop. HC-SR04 ranging with a 20 cm trigger limit driving an L298N differential drive.',
    tags: ['ATmega328P', 'Veroboard', 'HC-SR04', 'L298N'],
    accent: 'accent',
    source: 'Personal build',
    img: '/img/bench/obstacle-cased.jpg',
    alt: 'The obstacle-avoidance robot, upright: yellow enclosure over the HC-SR04 and the drive wheels',
  },
  {
    title: 'Electronic vault lock · CirkitDesigner study',
    year: '2026',
    status: 'simulation',
    summary:
      'Arduino Uno vault door: 4×4 keypad code entry, servo latch, buzzer, RFID and status LEDs, designed and simulated end-to-end in CirkitDesigner as a systems-integration exercise.',
    tags: ['CirkitDesigner', 'Keypad', 'Servo', 'RFID'],
    accent: 'plain',
    source: 'SIWES · NASCOMSOFT EMBEDED LTD',
    img: '/img/bench/vault-lock.jpg',
  },
];

export const timeline = [
  {
    period: 'Jun–Nov 2026',
    title: 'Embedded Systems Intern',
    org: 'NASCOMSOFT EMBEDED LTD, Bauchi',
    note: 'Assembled an outdoor P10 LED display board with its controller and supply, and wrote the embedded C firmware for the streetlight controller assignment. Featured in the NASCOMSOFT Student Spotlight.',
    tags: ['SIWES'],
  },
  {
    period: 'Aug–Oct 2026',
    title: 'Product Manager & Hardware Engineer, TEAM RAMP',
    org: 'NASCOMSOFT EMBEDED Hackathon 2.0',
    note: 'Built AttendX with TEAM RAMP, the smart biometric attendance management system that took 1st place overall: ESP32-S3-CAM, capacitive fingerprint module, 3D-printed enclosure, and the PIN-fallback snapshot that catches proxy clock-ins.',
    tags: ['1st place'],
  },
  {
    period: 'Aug–Sep 2026',
    title: 'Robotics & Electronics Volunteer Instructor',
    org: 'CEAISES & ATBU, Bauchi',
    note: 'Taught electronics, breadboarding and sensor interfacing over a four-week children’s camp, and mentored Group Six to 1st place in the Grand Finale Maze Race.',
    tags: ['Teaching'],
  },
  {
    period: '2022–2027 (exp.)',
    title: 'B.Eng. Computer Engineering',
    org: 'University of Maiduguri',
    note: 'Coursework across embedded systems design, microprocessor systems, digital electronics and logic design, control systems, computer architecture, data communications and signals & systems.',
    tags: ['B.Eng.'],
  },
];
