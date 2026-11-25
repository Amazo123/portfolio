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
      'Two ESP32-C3 nodes sit with two cots, track their own noise floors, and freeze two seconds of audio when a sound crosses three times that floor. A 286-fragment ESP-NOW burst with CRC-16/CRC-32 carries the window to an ESP32-S3 hub, which computes the log-Mel front end in C (41.7 ms) and runs a 122,770-parameter INT8 CNN on-chip (101.8 ms) before paging a BLE wearable. Zero false alarms across 308 windows of real non-cry audio.',
    heroMetric: { value: '0.9993', label: 'Test AUC · INT8, all on-chip' },
    tags: ['ESP32-S3', 'ESP-NOW', 'TFLite Micro', 'INMP441', 'BLE'],
    stack: ['ESP32-C3 ×3', 'ESP32-S3', 'TFLite Micro', 'ESP-DSP', 'Python'],
    accent: 'accent',
  },
  {
    slug: 'attendx',
    index: '02',
    title: 'AttendX',
    subtitle: 'Smart biometric attendance and management system · TEAM RAMP',
    year: '2026',
    kind: 'Hackathon · NASCOMSOFT TEAM RAMP',
    status: 'built · demo',
    summary:
      'A smart biometric attendance and management system on an ESP32-S3-CAM: SFM-V1.7 capacitive fingerprint module, 16×2 LCD, 4×4 keypad, and a 3D-printed enclosure. PIN clock-ins trigger an automatic camera snapshot so proxy attendance leaves evidence. TEAM RAMP took 1st place overall at the NASCOMSOFT EMBEDED Hackathon 2.0.',
    heroMetric: { value: '1st', label: 'Overall · TEAM RAMP grand finale' },
    role: 'Product Manager · one of two hardware engineers',
    tags: ['ESP32-S3-CAM', 'SFM-V1.7', 'UART', 'I²C LCD', '3D print'],
    stack: ['ESP32-S3-CAM', 'SFM-V1.7', 'LCD 16×2', '4×4 keypad', 'C++'],
    accent: 'amber',
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
    tags: ['ESP32', 'AS608', 'PostgreSQL', 'Wi-Fi', 'Power design'],
    stack: ['ESP32', 'AS608', '16×4 LCD', 'Neon Postgres', 'Render'],
    accent: 'green',
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
  },
  {
    title: 'RA-02 LoRa + SIM800L telemetry nodes',
    year: '2026',
    status: 'built & tested',
    summary:
      'Sub-GHz RA-02 LoRa transmit/receive pairs with a DHT sensor on the node side, plus GSM SIM800L paths for telemetry where LoRa cannot reach and SMS alerts where there is no network.',
    tags: ['LoRa RA-02', 'SIM800L', 'DHT', 'Telemetry'],
    accent: 'accent',
    source: 'SIWES · NASCOMSOFT EMBEDED LTD',
  },
  {
    title: 'ATmega328P streetlight controller',
    year: '2026',
    status: 'firmware + circuit design',
    summary:
      'Dual-LDR dawn/dusk streetlight controller in embedded C: relay switching with hysteresis, schematics drawn in Proteus. Firmware and circuit complete; hardware assembly pending.',
    tags: ['ATmega328P', 'Relay', 'LDR', 'Proteus'],
    accent: 'plain',
    source: 'NASCOMSOFT EMBEDED LTD · week 23 assignment',
  },
  {
    title: 'Soil-moisture irrigation controller',
    year: '2026',
    status: 'firmware + circuit design',
    summary:
      'Automated irrigation rig driven by soil-moisture thresholds, with pump control through a relay and sensor-debounce logic. Firmware and circuit diagram delivered; not yet on hardware.',
    tags: ['ATmega328P', 'Moisture sensing', 'Relay', 'Proteus'],
    accent: 'plain',
    source: 'NASCOMSOFT EMBEDED LTD · week 23 assignment',
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
  },
];

export const timeline = [
  {
    period: 'Jun–Nov 2026',
    title: 'Embedded Systems Intern',
    org: 'NASCOMSOFT EMBEDED LTD, Bauchi',
    note: 'Proteus-first design workflow, LoRa + GSM telemetry nodes, P10 LED board assembly, oscilloscope-level troubleshooting. Featured in the NASCOMSOFT Student Spotlight.',
    tags: ['SIWES'],
  },
  {
    period: 'Aug–Oct 2026',
    title: 'Product Manager & Hardware Engineer, TEAM RAMP',
    org: 'NASCOMSOFT EMBEDED Hackathon 2.0',
    note: 'Only product manager on a four-person team that took 1st place overall with AttendX, a smart biometric attendance and management system. Shared the hardware build: ESP32-S3-CAM, fingerprint module, enclosure, fallback camera logic.',
    tags: ['1st place'],
  },
  {
    period: 'Aug–Sep 2026',
    title: 'Robotics & Electronics Volunteer Instructor',
    org: 'CEAISES & ATBU, Bauchi',
    note: 'Four-week children’s camp teaching electronics, breadboarding and sensor interfacing. Mentored Group Six to 1st place in the Grand Finale Maze Race.',
    tags: ['Teaching'],
  },
  {
    period: '2022–2027 (exp.)',
    title: 'B.Eng. Computer Engineering',
    org: 'University of Maiduguri',
    note: 'Microprocessor systems, embedded systems design, digital electronics & logic design, control systems, computer architecture, data communications, signals & systems.',
    tags: ['B.Eng.'],
  },
];
