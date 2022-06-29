export type rawAcc = {
  [key: string]: Array<rawCur>;
};
export type rawCur = {
  id: string;
  title: string;
  desc: string;
  score: string;
  participants: string;
  img: string;
  price: string;
  state: string;
  category: string;
};
export type cardProps = {
  category: string;
  range: string;
  items: Array<rawCur>;
};
export type paymentType = {
  id: string;
  stock: number;
};
export type state = {
  darkState: { darkMode: string };
  basketState: {
    basket: { [key: string]: number };
    all: number;
  };
};

export type banner = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
};
export type DarkMode = {
  darkMode: string;
};

export type BasketState = {
  basket: { [key: string]: number };
  all: number;
};
