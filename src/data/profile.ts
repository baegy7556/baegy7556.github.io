// Everything on the home page that is not a project lives here.

export const profile = {
  name: 'Geonyi Bae',
  headline: 'Mechatronics Engineering student at the University of Auckland',
  tagline:
    'I build robots, write the embedded control code that drives them, and make software tools for designing them.',
  facts: ['Part II, BE(Hons) Mechatronics', 'Auckland, New Zealand', 'NZ Permanent Resident'],
  cv: '/media/Geonyi_Bae_CV.pdf',
  email: 'baegy754715@gmail.com',
  github: 'https://github.com/baegy7556',
  // TODO: paste your LinkedIn profile URL. The link stays hidden while this is empty.
  linkedin: '',
};

/** The "30-second" summary: what I can do, with where I did it. */
export const highlights = [
  {
    title: 'Embedded control',
    body: 'Arduino and C control code with PI control and sensor feedback (light, ultrasonic, encoder).',
    proof: 'Warman Challenge, VEX navigation',
  },
  {
    title: 'Hardware & electronics',
    body: 'Electronics layout, wiring, soldering and fault finding; Fusion 360 CAD and workshop fabrication.',
    proof: 'Warman Challenge',
  },
  {
    title: 'Software & AI tooling',
    body: 'Browser-based robot simulation, multiplayer game back-ends, and AI agents connected over MCP.',
    proof: 'robot-mcp, Roblox games',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Engineering', items: ['Control systems', 'PI control', 'Sensor feedback', 'Autonomous navigation'] },
  {
    group: 'Embedded & hardware',
    items: ['Arduino', 'Sensor integration', 'Wiring & circuit assembly', 'Electronics measurement & fault finding'],
  },
  { group: 'Design & CAD', items: ['Fusion 360 (3D modelling, engineering drawings)'] },
  {
    group: 'Manufacturing',
    items: ['Soldering', 'Turning', 'Milling', 'Welding', '3D printing', 'Laser cutting'],
  },
  { group: 'Programming', items: ['Embedded C', 'C++', 'MATLAB', 'Luau'] },
  { group: 'AI & automation', items: ['Claude Code', 'Codex', 'MCP (Model Context Protocol)'] },
  { group: 'Languages', items: ['English', 'Korean'] },
];

export const experience = [
  {
    role: 'Physics & Mathematics Tutor (part-time)',
    org: 'Cluey Learning',
    where: 'Remote, NZ & Australia',
    period: '2025 – Present',
    points: [
      'One-to-one maths and physics tutoring for secondary students across New Zealand and Australia.',
      'Balanced alongside full-time engineering study.',
    ],
  },
  {
    role: 'NCEA Tutor (part-time)',
    org: 'MyTuition',
    where: 'Auckland',
    period: '2026 – Present',
    points: [
      'Tutor NCEA mathematics, physics and chemistry, adapting explanations to each student’s level.',
    ],
  },
  {
    role: 'Junior Homework Centre Leader (volunteer)',
    org: 'Mount Albert Grammar School',
    where: 'Auckland',
    period: '2024 – 2025',
    points: [
      'Supported junior students in maths, physics and chemistry, one-to-one and in groups.',
      'Organised collaborative study sessions.',
    ],
  },
  {
    role: 'Workshop Volunteer, AURA Science & Engineering Day',
    org: 'Auckland University Robotics Association',
    where: 'Auckland',
    period: '2026',
    points: ['Helped run hands-on coding and robotics workshops for younger students using VEX IQ robots.'],
  },
];

export const education = [
  {
    title: 'Bachelor of Engineering (Honours), Mechatronics',
    org: 'University of Auckland',
    period: 'Mar 2025 – Nov 2028 (expected)',
    points: [
      'Coursework: Electrical & Digital Systems, Introduction to Mechatronics, Engineering Mechanics, Engineering Design, Design & Manufacture.',
      'Member: AURA (robotics association), UOA Game Developer Club.',
    ],
  },
  {
    title: 'NCEA Levels 2 & 3, Excellence endorsement',
    org: 'Mount Albert Grammar School',
    period: '2023 – 2024',
    points: [
      'NZ Engineering Science Competition 2024: built a mathematical model, in a 6-hour team challenge, estimating the airship fleet needed to replace the Cook Strait ferries.',
      'Senior Academic Award in Chemistry (2024).',
    ],
  },
];
