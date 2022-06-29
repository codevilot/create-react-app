import products from "../../../public/data/json/products.json";
import { paymentType } from "../../type/type";
import { reduce, add } from "../../store/BasketReducer";
import { useDispatch, useSelector } from "react-redux";

import { state } from "../../type/type";
export default function Payment(props: paymentType) {
  const state = useSelector((state: state) => state);
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
  console.log(paymentInfo);
  return (
    <div className="flex">
      <img src={paymentInfo.img} alt="" />
      <div>
        <div className="text-white">{paymentInfo.title}</div>
        <div className="text-white">${paymentInfo.price}</div>
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
