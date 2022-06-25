import { Link } from 'react-router-dom';
export default function Basket() {

    return (
        <div>
            <div className="text-white text-3xl pt-5">장바구니에 물품이 없습니다.</div>
            <div className="flex pt-10 text-white">
                <Link to="/">
                    <div className="bg-indigo-800 p-5 border-indigo-800 border-2 rounded-lg mr-5">
                        담으러 가기
                    </div>
                </Link>
            </div>
            <div className="flex pt-10 text-white place-content-end">
                <div className='pr-5 self-center text-2xl'>
                    총 : $NaN
                </div>
                <Link to="/">
                    <div className="bg-indigo-800 p-5 border-indigo-800 border-2 rounded-lg mr-5">
                        구매매하기
                    </div>
                </Link>
            </div>
        </div>
    )
}

