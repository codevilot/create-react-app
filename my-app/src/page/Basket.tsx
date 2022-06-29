import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { state } from "../type/type";
import Payment from "../components/Payment";
export default function Basket() {
  const dispatch = useDispatch();
  const state = useSelector((state: state) => state);
  const basketNum = state.basketState.all;
  const shopInfo = state.basketState.basket;
  console.log(Object.entries(shopInfo));
  return (
    <div>
      {!basketNum || state.basketState.all === 0 ? (
        <div className="text-white text-3xl pt-5">
          장바구니에 물품이 없습니다.
        </div>
      ) : (
        <div>
          {Object.entries(shopInfo).map((element) => (
            <Payment id={element[0]} stock={element[1]} key={element[0]} />
          ))}
        </div>
      )}

      <div className="flex pt-10 text-white">
        <Link to="/">
          <div className="bg-indigo-800 p-5 border-indigo-800 border-2 rounded-lg mr-5">
            담으러 가기
          </div>
        </Link>
      </div>
      <div className="flex pt-10 text-white place-content-end">
        <div className="pr-5 self-center text-2xl">총 : $NaN</div>
        <Link to="/">
          <div className="bg-indigo-800 p-5 border-indigo-800 border-2 rounded-lg mr-5">
            구매매하기
          </div>
        </Link>
      </div>
    </div>
  );
}
