import products from "../../public/data/json/products.json";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { state, shopInfo } from "../type/type";
import Payment from "../components/Payment";
import { clear } from "../store/BasketReducer";
export default function Basket() {
  const state = useSelector((state: state) => state);
  const dispatch = useDispatch();
  const basketNum = state.basketState.all;
  const shopInfo = state.basketState.basket;
  const clearCart = () => {
    dispatch(clear());
  };
  const info = () => {
    return products.filter((item: shopInfo) => {
      if (shopInfo[item.id]) {
        item.stock = shopInfo[item.id];
        return item;
      }
    });
  };
  const basketInfo = info();

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
          {basketInfo.map((element) => (
            <Payment
              price={element.price}
              id={element.id}
              stock={element.stock}
              key={element.id}
              title={element.title}
              img={element.img}
            />
          ))}

          <div className="flex place-content-end">
            <div className="self-center w-fit rounded-lg mr-5 text-white">
              $
              {basketInfo.reduce(
                (acc, cur) => acc + Number(cur.price) * cur.stock,
                0
              )}
            </div>

            <label htmlFor="my-modal" className="btn btn-primary modal-button">
              구매하기
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
                <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
                <div className="modal-action">
                  <label
                    htmlFor="my-modal"
                    className="btn btn-primary"
                    onClick={clearCart}
                  >
                    네
                  </label>
                  <label htmlFor="my-modal" className="btn">
                    아니오
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
