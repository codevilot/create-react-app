import { Link } from 'react-router-dom';
import { cardProps, rawCur } from "../type/type"

export default function Card(props: cardProps) {
    console.log(props)
    return (
        <div>
            {props.category}
            {props.items.map((item: rawCur, idx: number) => (
                <div key={idx}>
                    <Link to={item.link}>
                        <div className="bg-white">
                            <img src={item.img} />
                        </div>

                        <div> {item.title}</div>
                        <div>{item.price} </div>
                    </Link>

                </div>
            ))}
        </div>

    )
}

