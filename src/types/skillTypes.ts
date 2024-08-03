export interface Skill {
    name: string;
    icon: string;
    description?: string;
}
  
export interface SkillCategory {
    category: string;
    skills: Skill[];
}