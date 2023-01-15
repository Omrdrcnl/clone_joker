import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ImagePropsType {
  theme?: DefaultTheme;
}

const Image = styled.img<ImagePropsType>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Image;
