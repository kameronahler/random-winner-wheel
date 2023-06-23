import { ErrorMessage, Field, useField } from 'formik';
import React, { useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  --spacing: 0.5em;

  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledLabel = styled.label<{ $isErrored: boolean }>`
  color: ${(props) =>
    props.$isErrored ? props.theme.textError : props.theme.textLight};
  display: block;
  font-weight: 600;
  margin-bottom: var(--spacing);
`;

const StyledError = styled.p`
  color: ${(props) => props.theme.textError};
  font-family: ${(props) => props.theme.fontFamilyMonospace};
  margin-bottom: unset;
  margin-top: var(--spacing);
  display: inline-block;
  vertical-align: top;
`;

const StyledField = styled.input`
  background-color: transparent;
  border-radius: 0.625rem;
  border: 0.125rem solid currentColor;
  color: ${(props) => props.theme.textLight};
  display: block;
  font-family: ${(props) => props.theme.fontFamilySansSerif};
  font-size: 1rem;
  height: 3.125rem;
  line-height: normal;
  padding-left: 0.75rem;
  padding: 0 0.625rem;
  user-select: auto;
  width: 100%;

  :focus {
    border: 3px solid ${(props) => props.theme.accent};
  }
`;

const FormikField = React.forwardRef<HTMLInputElement, FormikFieldProps>(
  ({ name, label, type }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [, meta] = useField(name);
    const { error, touched } = meta;

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => inputRef.current
    );

    return (
      <StyledWrapper>
        <StyledLabel $isErrored={!!error && touched} htmlFor={name}>
          {label}
        </StyledLabel>
        <Field
          as={StyledField}
          id={name}
          innerRef={inputRef}
          name={name}
          type={type}
        />
        <ErrorMessage
          render={(error: string) => <StyledError>{error}</StyledError>}
          name={name}
        />
      </StyledWrapper>
    );
  }
);

export default FormikField;
