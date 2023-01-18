import styled, { DefaultTheme } from "styled-components";

interface searchPropsTypes {
  theme: DefaultTheme;
}

const Search = styled.input<searchPropsTypes>`
  margin: 10 15 10 0;
  padding: 10px;
  width: 15rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export default Search;
