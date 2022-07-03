export type rawAcc = {
  [key: string]: Array<rawCur>;
};
export type rawCur = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};
export type list = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}[];

export type cardProps = {
  category: string;
  range: string;
  items: Array<rawCur>;
};
export type paymentType = {
  id: string;
  img: string;
  title: string;
  stock: number;
  price: string;
};
export type state = {
  darkState: { darkMode: string };
  basketState: {
    basket: { [key: string]: number };
    all: number;
  };
  modalState: { modalMode: boolean };
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
export type shopInfo = {
  id: string;
  title: string;
  desc: string;
  score: string;
  participants: string;
  img: string;
  price: string;
  state: string;
  category: string;
  stock: number;
};
