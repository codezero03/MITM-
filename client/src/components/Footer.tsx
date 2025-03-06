import {
  Container,
  PracticalModule,
  PracticalModules,
  StyledModuleTitle,
  StyledText,
} from '../ui/MainUi';

export default function Footer(): JSX.Element {
  return (
    <Container>
      <PracticalModules>
        <PracticalModule className="red">
          <StyledModuleTitle>Практические модули</StyledModuleTitle>
          <StyledText>
            Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
          </StyledText>
        </PracticalModule>
        <PracticalModule className="black">
          <StyledModuleTitle>Итоговая аттестация</StyledModuleTitle>
          <StyledText>
            Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по
            бизнес-проектированию)
          </StyledText>
          <StyledText>Защита итоговой аттестационной работы</StyledText>
        </PracticalModule>
      </PracticalModules>
    </Container>
  );
}
