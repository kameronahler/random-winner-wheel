import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  padding: 1rem;
  margin-bottom: 4rem;
  place-content: center;
  position: relative;
  z-index: 1;
`;

const Header = ({ random, setRandom }: ButtonProps) => {
  const handleSpin = () => {
    setRandom(Math.random());
  };

  const handleReset = () => {
    setRandom(null);
  };

  return (
    <StyledHeader id="header">
      {random ? (
        <button onClick={handleReset}>Reset</button>
      ) : (
        <button disabled={!!random} onClick={handleSpin}>
          Spin
        </button>
      )}
    </StyledHeader>
  );
};

export default Header;
