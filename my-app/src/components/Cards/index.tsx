import products from "../../../public/data/json/products.json";
import Card from "./Card";
import { rawAcc, rawCur } from "../../type/type";
export default function Cards(props: { range: string }) {
  const cardInfo = props.range === "all" ? infoAll() : info(props.range);
  function info(range: string) {
    const result: rawAcc = {};
    result[range] = products.filter((item) => item.category === range);
    return result;
  }
  function infoAll() {
    const result = products.reduce((acc: rawAcc, cur: rawCur) => {
      if (acc.hasOwnProperty(cur.category)) {
        return {
          ...acc,
          [cur.category]: [...acc[cur.category], cur],
        };
      } else {
        return {
          ...acc,
          [cur.category]: [cur],
        };
      }
    }, {});
    return result;
  }
  const keys = Object.keys(cardInfo);
  return (
    <div>
      {keys.map((key: string, idx: number) => (
        <Card
          category={key}
          items={cardInfo[key]}
          key={idx}
          range={props.range}
        />
      ))}
    </div>
  );
}
