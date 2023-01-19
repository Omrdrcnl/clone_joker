import styled, { DefaultTheme } from "styled-components";

interface buttonPropsType {
  theme: DefaultTheme;
}

const Button = styled.button<buttonPropsType>`
  padding: 10;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export default Button;
