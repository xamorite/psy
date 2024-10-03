export interface AboutPage {
    id: number;
    title: string;
    introduction: string;
    mission: Mission[];
    objectives: Objective[];
    key_features: KeyFeature[];
    technology: Technology[];
    vision: Vision[];
    last_updated: string;
  }
  
  interface Mission {
    id: number;
    title: string;
    content: string;
    about_page: number;
  }
  
  interface Objective {
    id: number;
    content: string;
    about_page: number;
  }
  
  interface KeyFeature {
    id: number;
    title: string;
    content: string;
    about_page: number;
  }
  
  interface Technology {
    id: number;
    title: string;
    content: string;
    about_page: number;
  }
  
  interface Vision {
    id: number;
    title: string;
    content: string;
    about_page: number;
  }