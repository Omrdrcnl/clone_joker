import styled, { DefaultTheme } from "styled-components";

interface formProps {
  theme: DefaultTheme;
}

const Form = styled.form<formProps>`
  padding: 10;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export default Form;
