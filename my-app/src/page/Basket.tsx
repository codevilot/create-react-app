import products from "../../public/data/json/products.json";
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { state, shopInfo } from "../type/type";
import { ModalMode } from "../store/ModalReducer"
import Payment from "../components/Payment";
import Modal from "../components/Modal"
export default function Basket() {

  const state = useSelector((state: state) => state);
  const basketNum = state.basketState.all;
  const shopInfo = state.basketState.basket;
  const modalState = state.modalState;
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(ModalMode());
  };
  const info = () => {
    return products.filter((item: shopInfo) => {
      if (shopInfo[item.id]) {
        item.stock = shopInfo[item.id]
        return item
      }
    })
  };
  const basketInfo = info()
  useEffect(() => {

    setModal(modalState.modalMode)
  }, [modalState]);
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
          {modal ? <Modal /> : null}
          {basketInfo.map((element) => (
            <Payment price={element.price} id={element.id} stock={element.stock} key={element.id} title={element.title} img={element.img} />
          ))}

          <div className="flex place-content-end">
            <div className=" w-fit p-5 rounded-lg mr-5 text-white">${basketInfo.reduce((acc, cur) => acc + Number(cur.price) * cur.stock, 0)}</div>
            <div className=" w-fit bg-indigo-600 p-5 border-indigo-600 border-2 rounded-lg mr-5 text-white"
              onClick={handleModal}>
              구매하기
            </div>
          </div>
        </div>

      )}
    </div>
  );
}
