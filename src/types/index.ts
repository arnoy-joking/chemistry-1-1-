import type { LucideIcon } from 'lucide-react';

export interface Lecture {
  id: string;
  name: string;
  videoUrl: string; // YouTube embed URL
  pdfUrl: string; // Embeddable PDF URL or path
  notes: string; // Raw text notes for AI
  transcript: string; // Raw text transcript for AI
}

export interface Class {
  id: string;
  name: string;
  description: string;
  Icon?: LucideIcon;
  lectures: Lecture[];
}
