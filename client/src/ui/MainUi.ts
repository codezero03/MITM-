import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 54px;
  padding: 40px 90px;
  max-width: 100vw;
  margin: auto;

  @media (max-width: 375px) {
    padding: 15px 20px;
    gap: 30px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 2.5rem;

  @media (max-width: 375px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const ModuleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

const Module = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  min-width: 596px;

  @media (max-width: 375px) {
    flex-direction: column;
    min-width: 100%;
  }
`;

const ModuleTitle = styled.h2`
  font-weight: 400;
  display: inline-block;
  position: relative;
  height: fit-content;
  margin: 0;
  white-space: nowrap;
  width: max-content;
  
  &::before {
    content: '';
    background: #ff6b6b;
    height: 2px;
    width: 100%;
    position: absolute;
    top: -30px;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
    &::before {
      top: -20px;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '•';
    color: #ff6b6b;
    position: absolute;
    left: 0;
  }

  @media (max-width: 375px) {
    padding-left: 15px;
    font-size: 0.9rem;
  }
`;

const PracticalModules = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 375px) {
    gap: 20px;
  }
`;

const PracticalModule = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 56px; 
  color: white;
  box-sizing: border-box;

  @media (max-width: 375px) {
    padding: 20px;
    min-width: 100%;
  }

  &.red {
    background: #FF3B3B;
    position: relative;
    clip-path: polygon(calc(100% - 43px) 0, 100% 43px, 100% 100%, 0 100%, 0 0);

    &::after {
      content: '';
      width: 43px;
      height: 43px;
      background: #D62020;
      position: absolute;
      top: 0;
      right: 0;
      clip-path: polygon(0 0, 0% 100%, 100% 100%);
    }
  }

  &.black {
    background: #1E1E1E;
  }
`;

const StyledModuleTitle = styled.h3`
  font-family: 'Styrene A Web', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 43.2px;
  margin: 0;

  @media (max-width: 375px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

const StyledText = styled.p`
  font-family: 'Styrene A Web', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 130%;
  position: relative;
  padding-left: 20px;
  margin: 0;

  &::before {
    content: '•';
    color: #ff6b6b;
    position: absolute;
    left: 0;
  }

  @media (max-width: 375px) {
    font-size: 20px;
    padding-left: 15px;
  }
`;

const HeaderContainer = styled.header`
  padding: 40px 90px;
  background: #ffffff;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    padding: 15px 28px;
  }
`;

const HeaderTitle = styled.h1`
  font-family: 'Styrene A Web', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  color: #1e1e1e;
  margin: 0;
  position: relative;
  padding-bottom: 20px;

  @media (max-width: 375px) {
    font-size: 28px;
  }
`;

export {
  Container,
  List,
  ListItem,
  Module,
  ModuleTitle,
  ModuleWrapper,
  Title,
  PracticalModule,
  PracticalModules,
  StyledModuleTitle,
  StyledText,
  HeaderContainer,
  HeaderTitle,
};
