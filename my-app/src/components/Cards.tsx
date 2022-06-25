import cards from "../../public/data/json/card.json"
import Card from "../components/Card"
import { rawAcc, rawCur } from "../type/type"
export default function Cards() {
    const cardInfo = cards.reduce((acc: rawAcc, cur: rawCur) => {
        if (acc.hasOwnProperty(cur.category)) {
            return {
                ...acc, [cur.category]: [...acc[cur.category], cur]
            }
        } else {
            return {
                ...acc, [cur.category]: [cur]
            }
        }
    }, {})
    const keys = Object.keys(cardInfo)

    return (

        <div>
            {keys.map((key: string, idx: number) => (<Card category={key} items={cardInfo[key]} key={idx} />))}
        </div >

    )
}

