import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface WrapperPropsType {
  theme: DefaultTheme;
}

const Wrapper = styled.div<WrapperPropsType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80rem;
  margin: 0 auto;
`;

export default Wrapper;
