import { useEffect, useState } from "react";
import Card from "./Card";
import { rawAcc, rawCur, list } from "../../type/type";
import { getProducts } from "../../tools/fetch";
export default function Cards(props: { range: string }) {
  const [list, setList] = useState<list>([]);
  const cardInfo = props.range === "all" ? infoAll() : info(props.range);
  const keys = Object.keys(cardInfo);
  function info(range: string) {
    const result: rawAcc = {};
    result[range] = list.filter((item) => item.category === range);
    return result;
  }
  function infoAll() {
    const result = list.reduce((acc: rawAcc, cur: rawCur) => {
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

  useEffect(() => {
    getProducts().then((res: list) => setList(res));
  }, []);

  return (
    <div>
      {keys.map((key) => (
        <Card
          category={key}
          items={cardInfo[key]}
          key={key}
          range={props.range}
        />
      ))}
    </div>
  );
}
