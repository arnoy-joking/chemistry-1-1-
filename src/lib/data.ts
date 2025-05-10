import type { Class } from '@/types';
import { Atom, Beaker, FlaskConical, TestTube } from 'lucide-react';

export const classes: Class[] = [
  {
    id: 'gen-chem-1',
    name: 'General Chemistry I',
    description: 'Fundamental principles of chemistry, including atomic structure, bonding, and reactions.',
    Icon: FlaskConical,
    lectures: [
      {
        id: 'gc1-l1',
        name: 'Introduction to Atoms',
        videoUrl: 'https://www.youtube.com/embed/thnDxFdkzGk', // Example: Kurzgesagt - What Are Atoms?
        pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        notes: 'Atoms are the basic building blocks of matter. Composed of protons, neutrons, and electrons. Atomic number defines an element. Mass number is protons + neutrons.',
        transcript: 'Video transcript discussing the discovery of atoms, subatomic particles, and their properties. Bohr model and quantum mechanical model mentioned.',
      },
      {
        id: 'gc1-l2',
        name: 'Chemical Bonding',
        videoUrl: 'https://www.youtube.com/embed/QXT4OVM4vXI', // Example: TED-Ed - How atoms bond
        pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        notes: 'Ionic bonds involve transfer of electrons. Covalent bonds involve sharing of electrons. Electronegativity differences determine bond type. Lewis structures represent bonding.',
        transcript: 'Detailed explanation of ionic, covalent, and metallic bonds. Discussion on bond polarity, bond length, and bond energy. Introduction to VSEPR theory for molecular geometry.',
      },
    ],
  },
  {
    id: 'org-chem-1',
    name: 'Organic Chemistry I',
    description: 'Structure, properties, composition, reactions, and preparation of carbon-containing compounds.',
    Icon: Atom,
    lectures: [
      {
        id: 'oc1-l1',
        name: 'Alkanes and Cycloalkanes',
        videoUrl: 'https://www.youtube.com/embed/16hYh2b33xI', // Example: Organic Chemistry Tutor - Alkanes
        pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        notes: 'Alkanes are saturated hydrocarbons. Nomenclature rules (IUPAC). Isomerism in alkanes. Conformations of alkanes (Newman projections). Cycloalkanes and ring strain.',
        transcript: 'Covers IUPAC nomenclature for alkanes, structural isomers, constitutional isomers. Discusses Newman projections, anti and gauche conformations. Stability of cycloalkanes, chair and boat conformations of cyclohexane.',
      },
      {
        id: 'oc1-l2',
        name: 'Stereochemistry',
        videoUrl: 'https://www.youtube.com/embed/PahnzVf0yC4',// Example: Khan Academy - Chirality
        pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        notes: 'Chirality and stereoisomers. Enantiomers and diastereomers. R/S configuration. Optical activity. Meso compounds.',
        transcript: 'Introduction to stereochemistry, chiral centers. Assigning R and S configurations using Cahn-Ingold-Prelog priority rules. Properties of enantiomers, racemic mixtures. Diastereomers and their properties.',
      },
    ],
  },
  {
    id: 'analytical-chem',
    name: 'Analytical Chemistry',
    description: 'The science of obtaining, processing, and communicating information about the composition and structure of matter.',
    Icon: Beaker,
    lectures: [
      {
        id: 'ac-l1',
        name: 'Introduction to Spectroscopy',
        videoUrl: 'https://www.youtube.com/embed/vr303YV7h9A', // Example: Bozeman Science - Spectroscopy
        pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        notes: 'Interaction of electromagnetic radiation with matter. UV-Vis, IR, NMR spectroscopy principles. Beer-Lambert Law.',
        transcript: 'Overview of the electromagnetic spectrum. Fundamental principles of different spectroscopic techniques like UV-Visible, Infrared, and Nuclear Magnetic Resonance spectroscopy. Applications in qualitative and quantitative analysis.',
      },
    ],
  },
   {
    id: 'physical-chem',
    name: 'Physical Chemistry',
    description: 'Study of macroscopic and particulate phenomena in chemical systems in terms of the principles, practices, and concepts of physics.',
    Icon: TestTube,
    lectures: [
      {
        id: 'pc-l1',
        name: 'Thermodynamics Basics',
        videoUrl: 'https://www.youtube.com/embed/G9S5z92KqWk', // Example: CrashCourse Chemistry - Thermodynamics
        pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        notes: 'First, second, and third laws of thermodynamics. Enthalpy, entropy, Gibbs free energy. Spontaneity of reactions.',
        transcript: 'Explanation of thermodynamic systems, states, and processes. Detailed discussion on the laws of thermodynamics and their implications. Calculations involving enthalpy, entropy, and Gibbs free energy changes.',
      },
    ],
  },
];
