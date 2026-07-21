export interface Investigation {
  id: string;
  code: string;
  title: string;
  location: string;
  state: string;
  year: number;
  coordinates: string;
  evidenceBadge: 'Acoustic' | 'Thermal' | 'Electromagnetic' | 'Linguistic' | 'Archaeological';
  shortDesc: string;
  fullNarrative: string;
  findings: string[];
  equipmentUsed: string[];
  imageUrl: string;
}

export interface Equipment {
  id: string;
  name: string;
  type: string;
  description: string;
  historicalPrecedent: string; // the vintage equivalent
  status: 'functional' | 'calibrating' | 'active_field';
  currentReading: string;
  measurementUnit: string;
  soundFrequency?: string;
  iconName: string;
}

export interface MythReality {
  id: string;
  mythTitle: string;
  mythDetails: string;
  realityTitle: string;
  realityDetails: string;
  scientificExplanation: string;
  vashisthaRef?: string; // Ancient Sanskrit text or architectural ref
  illustratedIcon: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  category: 'Ancient Manuscript' | 'Research Journal' | 'Field Ledger' | 'Archaeological Survey';
  origin: string;
  estimatedAge: string;
  summary: string;
  translatedExcerpt: string;
  condition: string;
  languages: string[];
}

export interface TimelineMilestone {
  id: string;
  year: number;
  title: string;
  location: string;
  achievement: string;
  narrative: string;
  sketchLabel: string;
}

export interface ResearchInquiry {
  id: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
  date: string;
  sealColor: string;
  isRead: boolean;
}
