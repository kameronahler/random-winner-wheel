import styled, { css } from 'styled-components';
import { BUTTON_VARIANTS } from '../../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
}

const StyledButton = styled.button<{ $variant: ButtonProps['variant'] }>`
  border: none;
  outline: 0;

  align-items: center;
  background-image: linear-gradient(
    65deg,
    ${(props) => props.theme.accent},
    ${(props) => props.theme.accentSecondary}
  );
  border-radius: 0.625rem;
  box-shadow: none;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: ${(props) => props.theme.fontFamilySansSerif};
  font-size: 1rem;
  font-weight: 500;
  height: 3.125rem;
  justify-content: center;
  line-height: normal;
  padding: 0.5625rem 1.375rem;
  text-align: center;
  vertical-align: top;

  ${(props) =>
    props.$variant === BUTTON_VARIANTS.OUTLINE &&
    css`
      background: unset;
      border: 0.125rem solid ${(props) => props.theme.accentSecondary};
      border-radius: 0.625rem;
    `}
`;
const Button = ({
  children,
  variant = BUTTON_VARIANTS.FILLED,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton $variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
