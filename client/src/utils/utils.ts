import type { Discipline, SpecializedSubject } from '../types/program';


export const parseAndSplitDisciplines = (
  subjects: SpecializedSubject[],
): [Discipline[], Discipline[]] => {
  try {
    const disciplines = subjects.reduce<Discipline[]>((acc, subject) => {
      if (subject.skills.length === 0 && !!subject.string) {
        return [...acc, { title: subject.string, string: subject.string }];
      }
      return [...acc, ...subject.skills];
    }, []);

    const half = Math.floor(disciplines.length / 2);
    const module1 = disciplines.slice(0, half);
    const module2 = disciplines.slice(half, half * 2); 
    return [module1, module2];
  } catch (error) {
    console.error('Ошибка парсинга specializedSubjects:', error);
    return [[], []];
  }
};
