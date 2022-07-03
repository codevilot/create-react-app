import { Link } from "react-router-dom";
import { cardProps, rawCur } from "../../type/type";
export default function Card(props: cardProps) {
  const range = props.range === "all" ? 4 : 100;
  // console.log(props);
  return (
    <div className="px-4">
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold dark:text-white pt-10 text-black">
        {props.category}
      </h2>
      <div className="grid gap-6 md:w-full w-screen md:grid-flow-row md:grid-cols-2 md:auto-rows-auto lg:grid-cols-4 auto-cols-[minmax(320px,1fr)] grid-flow-col overflow-x-auto">
        {props.items
          ?.map((item: rawCur, idx: number) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-600 dark:border-0 border-2 dark:border-gray-200 rounded-lg font-bold"
            >
              <Link to={`/product/${item.id}`}>
                <div className="flex h-80 bg-white overflow-hidden justify-center items-center flex rounded-t-lg">
                  <img src={item.image} className="max-w-[50%] max-h-[50%]" />
                </div>
                <div className="text-black dark:text-white p-10">
                  <div> {item.title}</div>
                  <div>{item.price} </div>
                </div>
              </Link>
            </div>
          ))
          .slice(0, range)}
      </div>
    </div>
  );
}
