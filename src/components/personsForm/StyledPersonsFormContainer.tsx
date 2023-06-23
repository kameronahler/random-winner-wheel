import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  background-color: ${(props) => props.theme.surfaceAccent};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.25rem;
`;
