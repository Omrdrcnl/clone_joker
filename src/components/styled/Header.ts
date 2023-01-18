import styled from "styled-components";
import { DefaultTheme } from "styled-components";

export interface HeaderPropsType {
  theme?: DefaultTheme;
}

const Header = styled.div<HeaderPropsType>`
  font-size: 4em;
  margin: 0 32px;
  color: ${({ theme }) => theme.colors.main};
`;

export default Header;
