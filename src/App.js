import styled, {keyframes} from "styled-components";

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.backgroundColor};
`;


function App() {
  return (
  <Wrapper>
    <Title>Title!!!</Title>
  </Wrapper>
  );
}

export default App;
