import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;

const Pane = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: navajowhite;
`;

const Control = styled.div`
  height: 150px;
  width: 150px;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: lightcoral;
`;

const Tester = () => (
  <Container>
    <Pane>
      <Control />
    </Pane>
  </Container>
);

export default Tester;
