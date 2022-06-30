import products from "../../../public/data/json/products.json";
import { paymentType } from "../../type/type";
import { reduce, add } from "../../store/BasketReducer";
import { useDispatch } from "react-redux";

export default function Payment(props: paymentType) {
  const info = (id: string) => {
    return products.filter((item) => item.id === id);
  };
  const dispatch = useDispatch();
  const addCart = (id: string) => {
    dispatch(add(Number(id)));
  };
  const reduceCart = (id: string) => {
    dispatch(reduce(Number(id)));
  };
  const paymentInfo = info(props.id)[0];
  return (
    <div className="flex mb-20">
      <div className="h-56 w-56 bg-white">
        <img
          className="max-h-full max-w-full box-border m-auto p-5"
          src={paymentInfo.img}
          alt=""
        />
      </div>
      <div className="h-56 flex flex-col place-content-center lg:px-12">
        <div className="text-white text-xl">{paymentInfo.title}</div>
        <div className="text-white text-3xl mt-2 mb-4">
          $<span>{Number(paymentInfo.price) * props.stock}</span>
        </div>
        <div className="text-white flex">
          <div
            className="bg-indigo-600 p-4 rounded-lg"
            onClick={() => reduceCart(paymentInfo.id)}
          >
            -
          </div>
          <div className="p-4">{props.stock}</div>
          <div
            className="bg-indigo-600 p-4 rounded-lg"
            onClick={() => addCart(paymentInfo.id)}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}
