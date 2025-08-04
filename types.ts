
import React from 'react';

export interface Competition {
  name: string;
}

export interface CompetitionCategory {
  category: string;
  icon: React.ReactNode;
  competitions: Competition[];
  color: string;
}
