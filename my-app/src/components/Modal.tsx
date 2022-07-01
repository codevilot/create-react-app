
import { useDispatch } from "react-redux";
import { ModalMode } from "../store/ModalReducer"
export default function Modal() {

    const dispatch = useDispatch();
    const handleModal = () => {
        dispatch(ModalMode());
    };
    return (
        <div className="fixed w-full h-full inset-0 z-3 flex items-center justify-center bg[#0000004a]">

            <div className="text-white bg-zinc-700 p-6 rounded-lg w-[32rem]">
                <div>

                    정말로 구매하시겠습니까?
                </div>
                <div>

                    장바구니의 모든 상품들이 삭제됩니다.
                </div>
                <div className="flex justify-end">
                    <div className="ml-5 p-3 bg-purple-700 border-purple-700 rounded-lg">네</div>
                    <div className="ml-5 p-3 border-2 border-white rounded-lg" onClick={handleModal}>아니오</div>
                </div>
            </div>
        </div>
    );
}
