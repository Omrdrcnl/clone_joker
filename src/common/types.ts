export type CategoryType =
  | "Any"
  | "Misc"
  | "Programming"
  | "Dark"
  | "Pun"
  | "Spooky"
  | "Christmas";

export type FlagType = {
  explicit: boolean;
  nsfw: boolean;
  political: boolean;
  racist: boolean;
  religious: boolean;
  sexist: boolean;
};

export type FlagKeys =
  | "explicit"
  | "nsfw"
  | "political"
  | "racist"
  | "sexist"
  | "religious";

export type JokeType = {
  id: number;
  category: CategoryType;
  delivery?: string;
  setup?: string;
  joke?: string;
  lang: "cs" | "de" | "en" | "es" | "fr" | "pt";
  safe: boolean;
  flags: FlagType;
  type: "single" | "twopart";
};
