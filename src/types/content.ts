export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  created_at: string;
  updated_at: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  created_at: string;
  updated_at: string;
}

export interface Achievement {
  id: string;
  value: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Case {
  id: string;
  title: string;
  client: string;
  industry: string;
  solution: string;
  description: string;
  results: string[];
  image: string;
  tags: string[];
  created_at: string;
  updated_at: string;
} 