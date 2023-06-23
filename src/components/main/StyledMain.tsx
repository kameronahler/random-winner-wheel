import styled from 'styled-components';

const StyledMain = styled.main`
  background-image: ${(props) =>
    `radial-gradient(${props.theme.mainBgColorInner}, ${props.theme.mainBgColorOuter})`};
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
`;

export default StyledMain;
