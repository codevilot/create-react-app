import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { state } from "../type/type";
import Payment from "../components/Payment";
export default function Basket() {
  const dispatch = useDispatch();
  const state = useSelector((state: state) => state);
  const basketNum = state.basketState.all;
  const shopInfo = state.basketState.basket;
  const total = document.querySelectorAll(".added-price");

  console.log(total);
  return (
    <div>
      {!basketNum || state.basketState.all === 0 ? (
        <div>
          <div className="text-white text-3xl pt-5">
            장바구니에 물품이 없습니다.
          </div>
          <div className="flex pt-10 text-white">
            <Link to="/">
              <div className="bg-indigo-800 p-5 border-indigo-800 border-2 rounded-lg mr-5">
                담으러 가기
              </div>
            </Link>
          </div>
          <div className="flex pt-10 text-white place-content-end"></div>
        </div>
      ) : (
        <div>
          {Object.entries(shopInfo).map((element) => (
            <Payment id={element[0]} stock={element[1]} key={element[0]} />
          ))}

          <Link to="/" className="flex place-content-end">
            <div className=" w-fit p-5 rounded-lg mr-5 text-white">$</div>
            <div className=" w-fit bg-indigo-600 p-5 border-indigo-600 border-2 rounded-lg mr-5 text-white">
              구매하기
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
