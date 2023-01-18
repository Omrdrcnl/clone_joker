import React from "react";
import { Header, Image, Row, Wrapper, Search, Form } from "./components/styled";
import owl from "./images/owl.svg";

function App() {
  const [search, setSearch] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Wrapper>
      <Row>
        <Header>Joker</Header>
        <Image src={owl} />
      </Row>
      <Form onSubmit={}>
        <Search
          type="text"
          placeholder="ara"
          value={search}
          onChange={handleChange}
        />
      </Form>
    </Wrapper>
  );
}

export default App;
