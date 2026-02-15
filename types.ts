
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  link: string;
  tags: string[];
  features: string[];
  theme: 'dark' | 'creative' | 'minimalist';
}

export interface Service {
  id: string;
  // React namespace is now available via the import above
  icon: React.ReactNode;
  title: string;
  description: string;
}