import { StudyNote } from '../types';

export const INITIAL_NOTES: StudyNote[] = [
  // Class 9th Notes (5 Notes)
  {
    id: 'note-1',
    title: 'Physics Chapter 2: Kinematics (Equations of Motion & Vectors)',
    classLevel: '9th',
    subject: 'Physics',
    chapterNumber: 2,
    chapterName: 'Kinematics',
    board: 'All Punjab Boards (Lahore, Rawalpindi, Gujranwala) & Federal Board (FBISE)',
    totalPages: 24,
    fileSizeBytes: '3.4 MB',
    downloadCount: 14200,
    rating: 4.9,
    description: 'Comprehensive study notes with graphical derivations of 1st, 2nd, and 3rd equations of motion, solved conceptual numerical problems, graphs (distance-time, speed-time) and board short questions.',
    topics: [
      'Rest and Motion with frame of reference',
      'Types of motion (Translatory, Rotatory, Vibratory)',
      'Scalars vs Vectors with graphical representation',
      'Distance and Displacement, Speed and Velocity',
      'Derivation of 3 Equations of Motion (Graphical Method)',
      'Motion of freely falling bodies under gravitational acceleration',
    ],
    keyFormulasOrPoints: [
      'vf = vi + at',
      'S = vi·t + ½·a·t²',
      '2aS = vf² - vi²',
      'g = 9.8 m/s² (Earth gravity)',
    ],
    sampleQuestions: [
      {
        question: 'Differentiate between scalar and vector quantities with two examples each.',
        answerSnippet: 'Scalars have magnitude only with proper units (e.g. Mass = 5 kg, Speed = 20 m/s). Vectors have both magnitude and specific direction (e.g. Displacement = 50 m North, Force = 10 N downward).'
      },
      {
        question: 'Prove that the area under a speed-time graph gives the total distance travelled.',
        answerSnippet: 'Since Distance = Speed × Time, the product corresponds to base (time) multiplied by height (speed), which geometrically equals the area of rectangle or trapezoid under the curve.'
      }
    ],
  },
  {
    id: 'note-2',
    title: 'Chemistry Chapter 4: Structure of Molecules & Chemical Bonding',
    classLevel: '9th',
    subject: 'Chemistry',
    chapterNumber: 4,
    chapterName: 'Structure of Molecules',
    board: 'Federal Board (FBISE) & Punjab Curriculum and Textbook Board (PCTB)',
    totalPages: 20,
    fileSizeBytes: '2.8 MB',
    downloadCount: 11800,
    rating: 4.8,
    description: 'Complete high-yield notes explaining Duet and Octet rules, Ionic bonding, Covalent bonding (Single, Double, Triple), Coordinate covalent bonding, and Intermolecular forces (Hydrogen bonding).',
    topics: [
      'Why atoms form chemical bonds (Duet & Octet rules)',
      'Ionic Bonding: Formation of NaCl and properties of ionic compounds',
      'Covalent Bonding: Non-polar and polar covalent bonds with electronegativity difference',
      'Coordinate Covalent (Dative) Bond formation with NH4+ and H3O+ examples',
      'Metallic bonding & Electron Sea Model',
      'Intermolecular forces: Dipole-dipole forces and Hydrogen bonding in H2O and HF',
    ],
    keyFormulasOrPoints: [
      'Electronegativity difference > 1.7 creates ionic bond; < 1.7 creates polar covalent',
      'Octet Rule: Tendency of atoms to attain 8 electrons in outermost shell',
      'Hydrogen bonding occurs when H is bonded to highly electronegative atoms (N, O, F)',
    ],
    sampleQuestions: [
      {
        question: 'Why does ice float on the surface of liquid water?',
        answerSnippet: 'Due to hydrogen bonding, water molecules arrange in an open cage-like hexagonal structure upon freezing, making ice about 9% less dense than liquid water at 4°C.'
      },
      {
        question: 'Why do ionic compounds conduct electricity in aqueous solution but not in solid state?',
        answerSnippet: 'In solid state, ions are locked in fixed lattice positions. In molten or aqueous state, ions are free to move and carry electric current.'
      }
    ],
  },
  {
    id: 'note-3',
    title: 'Mathematics Chapter 1: Matrices and Determinants',
    classLevel: '9th',
    subject: 'Mathematics',
    chapterNumber: 1,
    chapterName: 'Matrices and Determinants',
    board: 'BISE Lahore, Gujranwala, Rawalpindi, Multan & Sindh Boards',
    totalPages: 28,
    fileSizeBytes: '4.1 MB',
    downloadCount: 18900,
    rating: 4.9,
    description: 'Detailed stepwise solutions for Exercise 1.1 to 1.6. In-depth explanations of matrix inversion method, Cramer’s rule for linear equations, singular/non-singular determinants, and adjoints.',
    topics: [
      'Definition, order, and types of matrices (Row, Column, Square, Identity, Diagonal)',
      'Addition and Subtraction of matrices and conformability condition',
      'Multiplication of matrices and associative law',
      'Determinant of a 2x2 matrix and test for Singularity',
      'Adjoint of a matrix and Multiplicative Inverse: A⁻¹ = (1/|A|) · Adj(A)',
      'Solving simultaneous linear equations by Matrix Inversion Method and Cramer’s Rule',
    ],
    keyFormulasOrPoints: [
      '|A| = ad - bc for A = [[a, b], [c, d]]',
      'Adj(A) = [[d, -b], [-c, a]]',
      'A⁻¹ exists only if |A| ≠ 0 (Non-singular matrix)',
      'Cramer’s Rule: x = |Ax| / |A|, y = |Ay| / |A|',
    ],
    sampleQuestions: [
      {
        question: 'Solve using Cramer’s Rule: 2x - 2y = 4 and 3x + 2y = 6.',
        answerSnippet: 'A = [[2, -2], [3, 2]], |A| = (2)(2) - (-2)(3) = 4 + 6 = 10. Ax = [[4, -2], [6, 2]], |Ax| = 8 - (-12) = 20. Thus x = 20/10 = 2. Ay = [[2, 4], [3, 6]], |Ay| = 12 - 12 = 0. Thus y = 0/10 = 0. Solution set = {(2, 0)}.'
      }
    ],
  },
  {
    id: 'note-4',
    title: 'Biology Chapter 4: Cells and Tissues (Structure & Cell Organelles)',
    classLevel: '9th',
    subject: 'Biology',
    chapterNumber: 4,
    chapterName: 'Cells and Tissues',
    board: 'All Boards of Intermediate and Secondary Education (Punjab & KPK)',
    totalPages: 26,
    fileSizeBytes: '3.6 MB',
    downloadCount: 12400,
    rating: 4.8,
    description: 'Diagram-rich notes covering animal and plant cell ultrastructure, microscopy, light vs electron microscopes, organelles (Mitochondria, Ribosomes, Endoplasmic Reticulum), and plant/animal tissues.',
    topics: [
      'Microscopy, Magnification, and Resolution power',
      'Cell Theory postulates (Schleiden, Schwann, and Virchow)',
      'Plant Cell vs Animal Cell structural differences',
      'Cell Wall, Cell Membrane, and Fluid Mosaic Model',
      'Nucleus, Mitochondria, Plastids (Chloroplasts), Ribosomes, and Golgi apparatus',
      'Plant Tissues (Meristematic, Permanent) & Animal Tissues (Epithelial, Connective, Muscular, Nervous)',
    ],
    keyFormulasOrPoints: [
      'Resolution: Light microscope (0.2 μm), Electron microscope (0.2 nm)',
      'Fluid Mosaic Model proposed by Singer and Nicolson in 1972',
      'Mitochondria is the "Powerhouse of the cell" (ATP synthesis)',
    ],
    sampleQuestions: [
      {
        question: 'State three major differences between prokaryotic and eukaryotic cells.',
        answerSnippet: '1) Prokaryotes lack a membrane-bound nucleus (DNA in nucleoid); eukaryotes have a distinct nucleus. 2) Prokaryotes have 70S ribosomes; eukaryotes have 80S ribosomes. 3) Prokaryotes lack membrane-bound organelles (no mitochondria/chloroplasts); eukaryotes possess them.'
      }
    ],
  },
  {
    id: 'note-5',
    title: 'Computer Science Chapter 1: Fundamentals of Computer & OS',
    classLevel: '9th',
    subject: 'Computer Science',
    chapterNumber: 1,
    chapterName: 'Fundamentals of Computer',
    board: 'National Curriculum / FBISE Islamabad & Punjab Boards',
    totalPages: 22,
    fileSizeBytes: '2.5 MB',
    downloadCount: 9800,
    rating: 4.7,
    description: 'Covers computer generations, hardware components (CPU, ALU, CU, Registers, Cache), system software vs application software, operating system functions, and number system conversions.',
    topics: [
      'Evolution of computers from Abacus to 5th Generation (AI)',
      'Von Neumann computer architecture and system bus (Data, Address, Control)',
      'Primary Memory (RAM, ROM) vs Secondary Storage (HDD, SSD)',
      'Operating System functions: Memory management, Processor scheduling, File system',
      'Binary, Decimal, Octal, and Hexadecimal number system conversions',
    ],
    keyFormulasOrPoints: [
      'CPU = Arithmetic Logic Unit (ALU) + Control Unit (CU) + Registers',
      'RAM is volatile; ROM is non-volatile',
      '1 Byte = 8 bits, 1 KB = 1024 Bytes, 1 MB = 1024 KB',
    ],
    sampleQuestions: [
      {
        question: 'Differentiate between RAM and ROM with two points.',
        answerSnippet: '1) RAM is volatile memory that loses contents when power is switched off; ROM is non-volatile and retains permanent instructions (BIOS). 2) RAM is read/write memory; ROM is read-only memory.'
      }
    ],
  },

  // Class 10th Notes (5 Notes)
  {
    id: 'note-6',
    title: 'Physics Chapter 10: Simple Harmonic Motion & Waves',
    classLevel: '10th',
    subject: 'Physics',
    chapterNumber: 10,
    chapterName: 'Simple Harmonic Motion & Waves',
    board: 'All Punjab Boards, FBISE, & KPK Board',
    totalPages: 25,
    fileSizeBytes: '3.5 MB',
    downloadCount: 16500,
    rating: 4.9,
    description: 'Detailed analysis of Hooke’s law, mass-spring system, simple pendulum, wave motion (transverse & longitudinal), ripple tank experiments, reflection, refraction, and diffraction.',
    topics: [
      'Hooke’s Law and restoring force in Mass-Spring system',
      'Simple Harmonic Motion proof for Simple Pendulum',
      'Characteristics of SHM: Amplitude, Vibration, Time Period, Frequency',
      'Wave motion and derivation of formula: v = f · λ',
      'Ripple Tank phenomena: Reflection, Refraction, and Diffraction of water waves',
    ],
    keyFormulasOrPoints: [
      'F = -kx (Hooke’s Law)',
      'T = 2π√(m/k) for mass-spring system',
      'T = 2π√(l/g) for simple pendulum',
      'v = f · λ (Universal wave equation)',
    ],
    sampleQuestions: [
      {
        question: 'What is a simple pendulum? What is the time period of a simple pendulum of 1 m length on Earth?',
        answerSnippet: 'A simple pendulum consists of a small heavy bob suspended by a light inextensible string from a frictionless support. T = 2π√(l/g) = 2(3.14)√(1/9.8) ≈ 2.0 seconds.'
      }
    ],
  },
  {
    id: 'note-7',
    title: 'Chemistry Chapter 9: Chemical Equilibrium & Le Chatelier’s Principle',
    classLevel: '10th',
    subject: 'Chemistry',
    chapterNumber: 9,
    chapterName: 'Chemical Equilibrium',
    board: 'BISE Lahore, Faisalabad, Multan, Rawalpindi & Federal Board',
    totalPages: 22,
    fileSizeBytes: '2.9 MB',
    downloadCount: 13700,
    rating: 4.8,
    description: 'Exploration of reversible reactions, dynamic equilibrium, derivation of the Law of Mass Action, equilibrium constant Kc and its units, and industrial significance.',
    topics: [
      'Reversible vs Irreversible reactions with graphical representations',
      'Concept of Dynamic Equilibrium (Rate of Forward = Rate of Reverse)',
      'Guldberg & Waage Law of Mass Action',
      'Derivation of Equilibrium Constant Kc expression',
      'Determination of units of Kc for different reaction orders',
      'Importance of equilibrium constant in predicting reaction direction and extent',
    ],
    keyFormulasOrPoints: [
      'Law of Mass Action: Rate of reaction is proportional to active masses of reactants',
      'Kc = [Products]ⁿ / [Reactants]ᵐ',
      'If Qc < Kc, reaction proceeds forward; if Qc > Kc, reaction proceeds reverse',
    ],
    sampleQuestions: [
      {
        question: 'State the Law of Mass Action and derive expression of Kc for reaction: aA + bB ⇌ cC + dD.',
        answerSnippet: 'Rf = kf[A]^a[B]^b, Rr = kr[C]^c[D]^d. At equilibrium, Rf = Rr => kf[A]^a[B]^b = kr[C]^c[D]^d. Therefore Kc = kf/kr = ([C]^c[D]^d) / ([A]^a[B]^b).'
      }
    ],
  },
  {
    id: 'note-8',
    title: 'Mathematics Chapter 2: Theory of Quadratic Equations & Roots',
    classLevel: '10th',
    subject: 'Mathematics',
    chapterNumber: 2,
    chapterName: 'Theory of Quadratic Equations',
    board: 'Punjab Curriculum and Textbook Board (PCTB) & FBISE',
    totalPages: 30,
    fileSizeBytes: '4.2 MB',
    downloadCount: 21000,
    rating: 4.9,
    description: 'Covers nature of roots using discriminant b² - 4ac, cube roots of unity (1, ω, ω²), symmetric functions of roots, synthetic division, and simultaneous quadratic equations.',
    topics: [
      'Discriminant: Disc = b² - 4ac and testing real, rational, equal, or imaginary roots',
      'Properties of cube roots of unity: 1 + ω + ω² = 0 and ω³ = 1',
      'Sum (S = -b/a) and Product (P = c/a) of roots of quadratic equation',
      'Forming quadratic equation from given roots: x² - Sx + P = 0',
      'Synthetic Division method to find quotient and remainder',
    ],
    keyFormulasOrPoints: [
      'Disc > 0 & perfect square: Real, rational & unequal roots',
      'Disc > 0 & not perfect square: Real, irrational & unequal roots',
      'Disc = 0: Real, rational & equal roots; Disc < 0: Imaginary/complex roots',
      '1 + ω + ω² = 0, ω³ = 1',
    ],
    sampleQuestions: [
      {
        question: 'Find the value of k if roots of equation 2x² - 3x + k = 0 are equal.',
        answerSnippet: 'For equal roots, Discriminant = 0. b² - 4ac = 0 => (-3)² - 4(2)(k) = 0 => 9 - 8k = 0 => 8k = 9 => k = 9/8.'
      }
    ],
  },
  {
    id: 'note-9',
    title: 'Biology Chapter 10: Gaseous Exchange & Respiratory System',
    classLevel: '10th',
    subject: 'Biology',
    chapterNumber: 10,
    chapterName: 'Gaseous Exchange',
    board: 'All Board Authorities in Pakistan (Matric Science Group)',
    totalPages: 24,
    fileSizeBytes: '3.1 MB',
    downloadCount: 11900,
    rating: 4.8,
    description: 'Detailed study of gaseous exchange in plants (stomata, lenticels) and humans (air passageway, lungs, alveoli, mechanism of breathing), respiratory disorders (Bronchitis, Emphysema, Pneumonia, Asthma), and smoking effects.',
    topics: [
      'Gaseous exchange in plants (Daytime vs Nighttime respiration)',
      'Air passageway in humans: Nasal cavity, Pharynx, Larynx, Trachea, Bronchi, Alveoli',
      'Mechanism of breathing: Inhalation (inspiration) vs Exhalation (expiration)',
      'Respiratory Disorders: Bronchitis, Emphysema, Pneumonia, Asthma, and Lung Cancer',
      'Harmful effects of tobacco smoking on respiratory and cardiovascular health',
    ],
    keyFormulasOrPoints: [
      'Alveoli provide a large, moist surface area surrounded by blood capillaries for diffusion',
      'Diaphragm contracts and flattens during inhalation, increasing thoracic volume',
      'Emphysema involves breakdown of alveolar walls and reduced surface area',
    ],
    sampleQuestions: [
      {
        question: 'Differentiate between breathing and cellular respiration.',
        answerSnippet: 'Breathing is a physical and mechanical process of taking in air and exhaling it with no energy production. Cellular respiration is a biochemical intracellular process where food glucose is oxidized to release ATP energy.'
      }
    ],
  },
  {
    id: 'note-10',
    title: 'English Compulsory: High-Scoring Board Essays, Grammar & Letters',
    classLevel: '10th',
    subject: 'English',
    chapterNumber: 1,
    chapterName: 'English Grammar & Composition',
    board: 'Federal Board, Punjab Boards, Sindh & KPK Boards',
    totalPages: 32,
    fileSizeBytes: '3.0 MB',
    downloadCount: 22400,
    rating: 4.9,
    description: 'High-scoring model essays (My Hobby, A True Muslim, Quaid-e-Azam, Life in a Big City), active/passive voice rules, direct and indirect speech transformations, pair of words, and standard official letter formats.',
    topics: [
      'Standard Board Essay Outline and 15 High-Yield Model Essays',
      'Active & Passive Voice transformation rules for all tenses',
      'Direct and Indirect Speech narration guidelines with examples',
      '100 Most Frequently Repeated Pair of Words in BISE exams',
      'Formal Letters (To Editors, Municipal Authorities, Principals) and Story Writing',
    ],
    keyFormulasOrPoints: [
      'Passive Voice always takes 3rd form of Verb (Past Participle)',
      'Reporting verb in Past tense changes Present to Past in Indirect Speech',
      'Essay Structure: Introduction, 3-4 Body paragraphs with quotes, Conclusion',
    ],
    sampleQuestions: [
      {
        question: 'Change into Passive Voice: "The gardener is watering the plants."',
        answerSnippet: '"The plants are being watered by the gardener."'
      },
      {
        question: 'Change into Indirect Speech: He said, "I have completed my homework."',
        answerSnippet: 'He said that he had completed his homework.'
      }
    ],
  },

  // Class 11th Notes (1st Year FSc / ICS) (5 Notes)
  {
    id: 'note-11',
    title: 'Physics Chapter 2: Vectors and Equilibrium (1st Year FSc)',
    classLevel: '11th',
    subject: 'Physics',
    chapterNumber: 2,
    chapterName: 'Vectors and Equilibrium',
    board: 'Federal Board (FBISE) & All Punjab BISE Boards',
    totalPages: 34,
    fileSizeBytes: '4.5 MB',
    downloadCount: 26800,
    rating: 4.9,
    description: 'Vector addition by rectangular components, scalar (dot) and vector (cross) products, torque/moment of force, center of gravity, and 1st and 2nd conditions of equilibrium with complete board numericals.',
    topics: [
      'Vector addition by rectangular components method with full mathematical derivation',
      'Scalar Product (Dot Product): Definition, geometric interpretation, and 5 characteristics',
      'Vector Product (Cross Product): Right-hand rule and physical examples (Torque, Lorentz Force)',
      'Torque and Principle of Moments',
      'First and Second Conditions of Static and Dynamic Equilibrium',
    ],
    keyFormulasOrPoints: [
      'A · B = AB cos(θ); î · î = 1, î · ĵ = 0',
      'A × B = AB sin(θ) n̂; î × ĵ = k̂',
      'Torque τ = r × F = rF sin(θ)',
      '1st Condition: ΣF = 0 (ΣFx = 0, ΣFy = 0)',
      '2nd Condition: Στ = 0 (Clockwise torque = Counterclockwise torque)',
    ],
    sampleQuestions: [
      {
        question: 'Show that dot product of two mutually perpendicular vectors is zero.',
        answerSnippet: 'A · B = AB cos(θ). When two vectors are perpendicular, angle θ = 90°. Since cos(90°) = 0, A · B = AB(0) = 0. Hence proven.'
      },
      {
        question: 'Can a body be in equilibrium when it is in motion? Explain.',
        answerSnippet: 'Yes. When a body moves with uniform velocity in a straight line, its acceleration is zero. Hence net external force ΣF = ma = 0. This state is called dynamic equilibrium (e.g. a paratrooper falling with terminal velocity).'
      }
    ],
  },
  {
    id: 'note-12',
    title: 'Chemistry Chapter 1: Basic Concepts & Stoichiometry (1st Year FSc)',
    classLevel: '11th',
    subject: 'Chemistry',
    chapterNumber: 1,
    chapterName: 'Basic Concepts',
    board: 'Punjab Boards & Federal Board Islamabad',
    totalPages: 28,
    fileSizeBytes: '3.8 MB',
    downloadCount: 23100,
    rating: 4.9,
    description: 'Covers isotopes, mass spectrometry, relative atomic mass, empirical and molecular formulas by combustion analysis, mole concept, Avogadro’s number, stoichiometric calculations, and limiting reactants.',
    topics: [
      'Relative atomic mass and Mass Spectrometer operational stages',
      'Combustion analysis for organic compounds to determine Empirical formula',
      'Concept of Mole, Molar Mass, and Avogadro’s constant (6.02 × 10²³)',
      'Molar volume of gases at STP (22.414 dm³)',
      'Stoichiometric mass-mass, mass-mole, and mass-volume relationships',
      'Limiting Reactant identification steps and theoretical vs actual percentage yield',
    ],
    keyFormulasOrPoints: [
      'Moles = Given Mass (g) / Molar Mass (g/mol)',
      'No. of Particles = Moles × NA (6.02 × 10²³)',
      '% Yield = (Actual Yield / Theoretical Yield) × 100%',
    ],
    sampleQuestions: [
      {
        question: 'Why is actual yield in a chemical reaction usually less than theoretical yield?',
        answerSnippet: 'Reasons include: 1) Practical losses during filtration, crystallization, and transfer. 2) Occurrence of competing side reactions. 3) Reversible nature of reactions where dynamic equilibrium prevents 100% completion.'
      }
    ],
  },
  {
    id: 'note-13',
    title: 'Mathematics Chapter 3: Matrices and Determinants (1st Year FSc/ICS)',
    classLevel: '11th',
    subject: 'Mathematics',
    chapterNumber: 3,
    chapterName: 'Matrices and Determinants',
    board: 'Punjab Curriculum and Textbook Board (PCTB) & FBISE',
    totalPages: 36,
    fileSizeBytes: '4.8 MB',
    downloadCount: 20400,
    rating: 4.8,
    description: 'Matrix row and column operations, echelon and reduced echelon forms, rank of matrix, 3x3 determinants, cofactor expansion, properties of determinants without expansion, and Cramer’s Rule.',
    topics: [
      'Types of matrices: Hermitian, Skew-Hermitian, Symmetric, Skew-Symmetric',
      'Determinants of order 3x3 and 4x4 using cofactor expansion',
      '7 Fundamental properties of determinants and proofs without expansion',
      'Row and column elementary operations (e-row and e-column)',
      'Echelon form, Reduced Echelon form, and determination of matrix Rank',
      'System of linear homogeneous and non-homogeneous equations',
    ],
    keyFormulasOrPoints: [
      'If two rows or columns of a determinant are identical, |A| = 0',
      'Rank = Number of non-zero rows in echelon form',
      'Non-trivial solution for homogeneous system AX = O exists iff |A| = 0',
    ],
    sampleQuestions: [
      {
        question: 'Prove without expansion that the determinant with a row of zeros is equal to zero.',
        answerSnippet: 'Expanding along that zero row gives terms multiplied by 0, resulting in 0. Alternatively, multiplying that row by a scalar λ does not change it, implying λ|A| = |A|, which holds only when |A| = 0.'
      }
    ],
  },
  {
    id: 'note-14',
    title: 'Biology Chapter 2: Biological Molecules & Enzymes (1st Year FSc)',
    classLevel: '11th',
    subject: 'Biology',
    chapterNumber: 2,
    chapterName: 'Biological Molecules',
    board: 'All BISE Boards in Pakistan & PMDC Entrance Test Prep',
    totalPages: 30,
    fileSizeBytes: '3.9 MB',
    downloadCount: 24700,
    rating: 4.9,
    description: 'Biochemical study of carbohydrates (monosaccharides, disaccharides, polysaccharides), lipids, proteins (primary, secondary, tertiary, quaternary structures), nucleic acids (DNA & RNA), and enzyme kinetics.',
    topics: [
      'Importance of Water as life solvent (Heat capacity, Heat of vaporization, Ionization)',
      'Carbohydrates: Glycosidic bonds in Maltose, Sucrose, Starch, Glycogen, and Cellulose',
      'Lipids: Triglycerides, Phospholipids in biological membranes, and Waxes',
      'Proteins: Amino acid structure, Peptide bond, and 4 levels of protein organization',
      'Nucleic Acids: Nucleotides, Phosphodiester bond, and Watson-Crick DNA model',
      'Enzymes: Lock and Key model vs Induced Fit model, competitive and non-competitive inhibitors',
    ],
    keyFormulasOrPoints: [
      'General formula of carbohydrates: Cx(H2O)y',
      'Peptide bond formed by condensation between amino group and carboxyl group: -CONH-',
      'Induced Fit Model proposed by Daniel Koshland in 1958',
    ],
    sampleQuestions: [
      {
        question: 'Differentiate between competitive and non-competitive enzyme inhibitors.',
        answerSnippet: 'Competitive inhibitors have structural similarity with the substrate and bind to the active site, which can be overcome by increasing substrate concentration. Non-competitive inhibitors bind to an allosteric site altering active site shape permanently.'
      }
    ],
  },
  {
    id: 'note-15',
    title: 'Computer Science Chapter 2: Information Networks & Topologies (1st Year ICS)',
    classLevel: '11th',
    subject: 'Computer Science',
    chapterNumber: 2,
    chapterName: 'Information Networks',
    board: 'FBISE Federal Board & All Punjab Boards',
    totalPages: 26,
    fileSizeBytes: '3.2 MB',
    downloadCount: 17200,
    rating: 4.8,
    description: 'Local Area Networks (LAN), Metropolitan Area Networks (MAN), Wide Area Networks (WAN), network topologies (Bus, Star, Ring, Mesh, Tree), transmission media, and OSI 7-layer reference model.',
    topics: [
      'Types of networks: LAN, MAN, WAN, and Client-Server vs Peer-to-Peer networks',
      'Physical Network Topologies: Star, Bus, Ring, Mesh, and Hybrid with pros/cons',
      'Guided transmission media: Twisted Pair, Coaxial Cable, and Fiber Optic Cable',
      'Unguided media: Microwave, Satellite communication, and Cellular networks',
      'OSI 7-Layer Reference Model (Physical, Data Link, Network, Transport, Session, Presentation, Application)',
    ],
    keyFormulasOrPoints: [
      'Star topology requires central hub/switch; single point of node failure does not crash network',
      'Mesh topology requires n(n-1)/2 physical links for n devices',
      'Fiber optics transmits data via Total Internal Reflection of light waves',
    ],
    sampleQuestions: [
      {
        question: 'Explain why Star topology is preferred over Bus topology in modern office LANs.',
        answerSnippet: 'In Star topology, each device connects directly to a central switch. If one cable fails, only that device is disconnected without interrupting other nodes. In Bus topology, a single cable break or terminator failure brings down the entire network.'
      }
    ],
  },

  // Class 12th Notes (2nd Year FSc / ICS) (5 Notes)
  {
    id: 'note-16',
    title: 'Physics Chapter 12: Electrostatics & Gauss’s Law (2nd Year FSc)',
    classLevel: '12th',
    subject: 'Physics',
    chapterNumber: 12,
    chapterName: 'Electrostatics',
    board: 'All Punjab Boards & FBISE Islamabad',
    totalPages: 32,
    fileSizeBytes: '4.2 MB',
    downloadCount: 31200,
    rating: 4.9,
    description: 'In-depth notes on Coulomb’s law, electric field intensity and field lines, electric flux, Gauss’s law and its 3 applications, electric potential, Millikan’s oil drop experiment, and capacitors.',
    topics: [
      'Coulomb’s Law in scalar and vector form with dielectric effect',
      'Electric field intensity E = F/q and field due to point charge',
      'Electric Flux Φ = E · A and flux through closed surface enclosing charge',
      'Gauss’s Law statement and mathematical formulation: Φ = Q / ε₀',
      'Applications of Gauss’s Law: Charge on hollow sphere, infinite sheet of charge, oppositely charged parallel plates',
      'Millikan’s oil drop experiment for charge quantization: q = ne',
      'Capacitors, Capacitance in series/parallel, and Energy stored in charged capacitor',
    ],
    keyFormulasOrPoints: [
      'F = (1 / 4πε₀) · (q1·q2 / r²)',
      'E between parallel plates: E = σ / ε₀',
      'Gauss’s Law: Total flux Φ = Q / ε₀',
      'Energy stored: U = ½ · C · V² = ½ · ε₀ · εr · E² · A · d',
    ],
    sampleQuestions: [
      {
        question: 'State Gauss’s Law and calculate electric field intensity due to an infinite sheet of charge.',
        answerSnippet: 'Gauss’s Law states that electric flux through any closed surface equals 1/ε₀ times total charge enclosed. Constructing a cylindrical Gaussian surface across the sheet: Total flux = 2EA. By Gauss’s law, 2EA = q/ε₀ = σA/ε₀ => E = σ / 2ε₀.'
      }
    ],
  },
  {
    id: 'note-17',
    title: 'Chemistry Chapter 7: Fundamental Principles of Organic Chemistry (2nd Year FSc)',
    classLevel: '12th',
    subject: 'Chemistry',
    chapterNumber: 7,
    chapterName: 'Fundamental Principles of Organic Chemistry',
    board: 'BISE Lahore, Rawalpindi, Faisalabad, Gujranwala & Federal Board',
    totalPages: 30,
    fileSizeBytes: '3.7 MB',
    downloadCount: 28500,
    rating: 4.9,
    description: 'Vital force theory debunking, catenation, hybridization of carbon (sp³, sp², sp), classification of organic compounds, functional groups, isomerism (structural and cis-trans stereoisomerism).',
    topics: [
      'Wöhler synthesis of Urea from Ammonium Cyanate and demise of Vital Force Theory',
      'Tetravalency and Catenation ability of Carbon',
      'Orbital Hybridization: sp³ (Methane), sp² (Ethene), and sp (Ethyne) with bond angles',
      'Classification: Acyclic (aliphatic), Cyclic (homocyclic/aromatic and heterocyclic)',
      'Types of Isomerism: Chain, Position, Functional group, Metamerism, Tautomerism, and Cis-Trans geometric isomerism',
      'IUPAC nomenclature fundamentals for hydrocarbons and substituted alkanes',
    ],
    keyFormulasOrPoints: [
      'sp³: 109.5° tetrahedral; sp²: 120° trigonal planar; sp: 180° linear',
      'Cis-isomer: identical groups on same side of double bond; Trans-isomer: opposite sides',
      'Homologous series formula for alkanes: CnH2n+2',
    ],
    sampleQuestions: [
      {
        question: 'Why is there no free rotation around a carbon-carbon double bond (C=C)?',
        answerSnippet: 'The double bond consists of one strong σ-bond and one lateral π-bond formed by parallel overlap of unhybridized p-orbitals. Rotation would require breaking the π-bond, which demands high energy (~260 kJ/mol). This restricted rotation leads to cis-trans geometric isomerism.'
      }
    ],
  },
  {
    id: 'note-18',
    title: 'Mathematics Chapter 2: Differentiation & Applications of Derivatives (2nd Year FSc/ICS)',
    classLevel: '12th',
    subject: 'Mathematics',
    chapterNumber: 2,
    chapterName: 'Differentiation',
    board: 'Punjab Curriculum and Textbook Board (PCTB) & Federal Board',
    totalPages: 40,
    fileSizeBytes: '5.2 MB',
    downloadCount: 34100,
    rating: 4.9,
    description: 'Derivative by first principles (ab-initio method), power rule, product rule, quotient rule, chain rule, derivatives of trigonometric, inverse trig, logarithmic and exponential functions, and maxima/minima.',
    topics: [
      'Definition of derivative as limit of difference quotient (ab-initio / definition method)',
      'Basic differentiation rules: Power Rule d/dx(xⁿ) = n·xⁿ⁻¹, Product Rule, Quotient Rule',
      'Chain Rule and parametric equations differentiation',
      'Derivatives of Trigonometric (sin, cos, tan) and Inverse Trigonometric functions',
      'Derivatives of Exponential (eˣ, aˣ) and Logarithmic (ln x, logₐ x) functions',
      'Higher order derivatives, Maclaurin and Taylor series expansions',
      'Applications: Increasing/decreasing functions, critical points, extreme values (Local Maxima and Minima)',
    ],
    keyFormulasOrPoints: [
      'd/dx(u/v) = (v·u\' - u·v\') / v²',
      'd/dx(ln x) = 1/x; d/dx(eˣ) = eˣ',
      'Second Derivative Test: If f\'(c) = 0 and f\'\'(c) < 0, local maximum at c; if f\'\'(c) > 0, local minimum',
    ],
    sampleQuestions: [
      {
        question: 'Find derivative of y = (x² + 1) / (x² - 1) with respect to x.',
        answerSnippet: 'Using quotient rule: dy/dx = [(x² - 1)(2x) - (x² + 1)(2x)] / (x² - 1)² = [2x³ - 2x - 2x³ - 2x] / (x² - 1)² = -4x / (x² - 1)².'
      }
    ],
  },
  {
    id: 'note-19',
    title: 'Biology Chapter 20: Chromosomes and DNA (Molecular Genetics 2nd Year FSc)',
    classLevel: '12th',
    subject: 'Biology',
    chapterNumber: 20,
    chapterName: 'Chromosomes and DNA',
    board: 'All Pakistan BISE Boards & National Entry Test Medical Syllabus',
    totalPages: 32,
    fileSizeBytes: '4.1 MB',
    downloadCount: 29800,
    rating: 4.9,
    description: 'Detailed study of chromosome types, chromatin composition, nucleosomes, Griffith and Hershey-Chase experiments, Meselson-Stahl DNA replication, transcription, genetic code, and translation.',
    topics: [
      'Types of chromosomes based on centromere position (Telocentric, Acrocentric, Sub-metacentric, Metacentric)',
      'Chemical composition of chromatin: Histone proteins (octamer) and Nucleosome beads',
      'Experimental proof of DNA as hereditary material (Griffith, Avery-MacLeod, Hershey-Chase)',
      'Semiconservative replication proof by Meselson and Stahl using ¹⁵N isotopes',
      'Central Dogma: Transcription (RNA Polymerase, promoters) and Post-transcriptional mRNA processing',
      'Genetic Code: Codons, Anticodons, Degeneracy, Non-overlapping, and Universal nature',
      'Translation mechanism on 80S ribosomes: Initiation, Elongation, and Termination',
    ],
    keyFormulasOrPoints: [
      'Chargaff’s Rule: Amount of Adenine = Thymine (A=T), Guanine = Cytosine (G=C)',
      'Start Codon: AUG (Methionine); Stop Codons: UAA, UAG, UGA',
      'Human karyotype has 46 chromosomes (23 pairs: 22 pairs autosomes, 1 pair sex chromosomes)',
    ],
    sampleQuestions: [
      {
        question: 'Explain the semiconservative model of DNA replication demonstrated by Meselson and Stahl.',
        answerSnippet: 'Bacteria grown in ¹⁵N isotope medium were shifted to ¹⁴N medium. After one generation, DNA showed intermediate hybrid density (¹⁵N-¹⁴N). After two generations, half was hybrid and half was light (¹⁴N-¹⁴N). This proved each new DNA double helix consists of one original parental strand and one newly synthesized daughter strand.'
      }
    ],
  },
  {
    id: 'note-20',
    title: 'Pakistan Studies: Ideology of Pakistan, 1973 Constitution & Foreign Policy',
    classLevel: '12th',
    subject: 'Pak Studies',
    chapterNumber: 1,
    chapterName: 'Ideology and Constitutional Development',
    board: 'Federal Board (FBISE) & All Provincial Boards (Compulsory Subject)',
    totalPages: 26,
    fileSizeBytes: '2.7 MB',
    downloadCount: 25100,
    rating: 4.8,
    description: 'Complete revision notes covering Two-Nation Theory, Quaid-e-Azam and Allama Iqbal’s statements, Objective Resolution 1949, salient features of 1973 Constitution, and key objectives of Pakistan’s foreign policy.',
    topics: [
      'Genesis of the Two-Nation Theory and historical evolution of Muslim nationalism',
      'Pronouncements of Quaid-e-Azam Muhammad Ali Jinnah and Allama Muhammad Iqbal on Pakistan ideology',
      'The Objectives Resolution (1949) as constitutional preamble and Magna Carta of Pakistan',
      'Salient features of the 1973 Constitution of the Islamic Republic of Pakistan',
      'Islamic provisions of the 1973 Constitution (Sovereignty of Allah, Council of Islamic Ideology)',
      'Fundamental principles and strategic objectives of Pakistan’s Foreign Policy (OIC, UN, China relations)',
    ],
    keyFormulasOrPoints: [
      'Objectives Resolution passed on March 12, 1949 under Prime Minister Liaquat Ali Khan',
      '1973 Constitution enforces parliamentary democracy with bicameral legislature (Senate & National Assembly)',
      'Council of Islamic Ideology (CII) advises parliament on conformity of laws with Quran and Sunnah',
    ],
    sampleQuestions: [
      {
        question: 'Enumerate four major Islamic provisions incorporated into the 1973 Constitution of Pakistan.',
        answerSnippet: '1) Islam is declared the official state religion of Pakistan. 2) The President and Prime Minister must be Muslim. 3) Sovereign authority belongs to Allah Almighty alone, exercised through elected representatives within prescribed limits. 4) Injunction that no law shall be enacted repugnant to the Holy Quran and Sunnah.'
      }
    ],
  },
];
