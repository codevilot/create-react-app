import { Link } from 'react-router-dom';
import { cardProps, rawCur } from "../type/type"

export default function Card(props: cardProps) {
    return (
        <div>
            <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold text-white pt-10">
                {props.category}
            </h2>
            <div className='grid grid-cols-4 item_list gap-x-5'>

                {props.items.map((item: rawCur, idx: number) => (
                    <div key={idx} className="bg-gray-600 rounded-lg">
                        <Link to={`/product/${item.id}`}>
                            <div className="flex h-80 bg-white overflow-hidden justify-center items-center flex rounded-t-lg">
                                <img src={item.img} className="max-w-[50%] max-h-[50%]" />
                            </div>
                            <div className="text-white p-10">
                                <div> {item.title}</div>
                                <div>{item.price} </div>

                            </div>
                        </Link>

                    </div>
                ))}
            </div>
        </div >

    )
}

