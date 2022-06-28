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
  items: Array<rawCur>;
};
export type state = {
  globalState: { darkMode: string };
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
export type basketState = {
  productId: {};
};
