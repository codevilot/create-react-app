import { getProducts } from "../tools/fetch";
import { useEffect, useState } from "react"
import { list } from "../type/type";
import { Link } from "react-router-dom";
export default function Search(props: { keyword: string }) {
    const [list, setList] = useState<list>([]);
    useEffect(() => {
        getProducts().then((res: list) => setList(res));
    }, []);
    return (
        <ul className="absolute top-16 left-12 bg-white text-black w-60 max-h-96 overflow-y-auto dark:bg-slate-500 dark:text-white bg-slate-200 font-extralight"
        >
            {list.map((element, index) =>
                props.keyword !== "" ?
                    (element.title.includes(props.keyword) === true ?
                        <li key={index} className="p-5">
                            <Link to={`/product/${element.id}`}>
                                {element.title}
                            </Link>
                        </li>
                        : null
                    )
                    : null
            )}
        </ul>
    );
}
