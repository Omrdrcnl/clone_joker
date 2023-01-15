import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface RowPropsType {
  theme: DefaultTheme;
}

const Row = styled.div<RowPropsType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

export default Row;
