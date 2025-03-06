import React, { useState, useEffect } from 'react';
import type { Program } from '../types/program';
import { Container, List, ListItem, Module, ModuleTitle, ModuleWrapper, Title } from '../ui/MainUi';
import { parseAndSplitDisciplines } from '../utils/utils';

type ProgramCardProps = {
  program: Program;
};

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const [module1Visible, setModule1Visible] = useState(false);
  const [module2Visible, setModule2Visible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [module1, module2] = parseAndSplitDisciplines(program.specializedSubjects);

  return (
    <Container>
      <Title>{program.title}</Title>
      <ModuleWrapper>
        {/* Модуль 1 */}
        <Module
          onClick={() => isMobile && setModule1Visible(!module1Visible)}
          className={isMobile ? 'clickable' : ''}
        >
          <ModuleTitle>Модуль 1</ModuleTitle>
          {/* Список дисциплин */}
          <List className={module1Visible || !isMobile ? 'visible' : ''}>
            {module1.map((disc, index) => (
              <ListItem key={index}>{disc.title}</ListItem>
            ))}
          </List>
        </Module>

        {/* Модуль 2 */}
        <Module
          onClick={() => isMobile && setModule2Visible(!module2Visible)}
          className={isMobile ? 'clickable' : ''}
        >
          <ModuleTitle>Модуль 2</ModuleTitle>
          {/* Список дисциплин */}
          <List className={module2Visible || !isMobile ? 'visible' : ''}>
            {module2.map((disc, index) => (
              <ListItem key={index}>{disc.title}</ListItem>
            ))}
          </List>
        </Module>
      </ModuleWrapper>
    </Container>
  );
};

export default ProgramCard;
