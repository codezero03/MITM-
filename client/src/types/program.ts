export interface Discipline {
  title: string | null;
  string: string | null;
}

export interface SpecializedSubject {
  skills: Discipline[];
  string: string
}

export interface Program {
  title: string;
  specializedSubjects: SpecializedSubject[];
}
