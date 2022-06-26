import { Link } from 'react-router-dom';

export default function Header() {


    return (
        <div className="bg-stone-900 text-white pt-5 pb-5 flex justify-center">
            <div className='flex justify-between max-w-screen-xl w-full'>

                <div className="flex items-center">
                    <Link className="pr-3 text-xl" to="/">React Shop</Link>
                    <Link className="pr-3 text-sm" to="/fashion">패션</Link>
                    <Link className="pr-3 text-sm" to="/accessory">악세서리</Link>
                    <Link className="pr-3 text-sm" to="/digital">디지털</Link>
                </div>
                <div className='flex'>
                    <div>
                        ☀️
                    </div>
                    <input type="text" />
                    <div>
                        <Link to="/basket">👜</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

