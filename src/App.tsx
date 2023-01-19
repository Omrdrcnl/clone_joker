import React from "react";
import { Header, Image, Row, Wrapper, Search, Form } from "./components/styled";
import owl from "./images/owl.svg";
import axios from "axios";
import JokeItem from "./components/JokeItem";

const BASE_URL = "https://v2.jokeapi.dev/joke/Any";
type FlagType = {
  nsfw: boolean;
  religios: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
};

type JokeType = {
  id: number;
  safe: boolean;
  lang: "cs" | "de" | "en" | "es" | "pt" | "fr";
  type: "single" | "twopart";
  flags: FlagType;
  category:
    | "any"
    | "misc"
    | "programming"
    | "dark"
    | "Pun"
    | "Spooky"
    | "Chiristmas";
  setup?: string;
  joke?: string;
  delivery?: string;
};

function App() {
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(false);
  const [jokes, setJokes] = React.useState<JokeType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`;
    const { data } = await axios.get(ENDPOINT);

    if (data.error) {
      setError(true);
      setJokes([]);
      return;
    } else {
      setError(false);
      setJokes(data.jokes);
    }
    setSearch("");
    console.log(data);
  };

  return (
    <Wrapper>
      <Row>
        <Header>Joker</Header>
        <Image src={owl} />
      </Row>
      <Form onSubmit={getJokes}>
        <Search
          type="text"
          placeholder="ara"
          value={search}
          onChange={handleChange}
        />
      </Form>
      <div>
        {error && (
          <div>
            <p>Error:No jokes Found</p>
          </div>
        )}
        {jokes.length > 0 &&
          jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />)}
      </div>
    </Wrapper>
  );
}

export default App;
